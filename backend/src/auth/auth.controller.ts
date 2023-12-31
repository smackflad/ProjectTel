import { CreateCompanyDto } from './../api/company/dto/create-company.dto';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Query,
  Param,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/infastructure/decorators/public.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/api/user/user.service';
import { CompanyService } from 'src/api/company/company.service';
import { ParentService } from 'src/api/parent/parent.service';
import { CreateUnitializedParentDto } from 'src/api/parent/dto/createUnitialized.dto';
import { CreateParentDto } from 'src/api/parent/dto/create-parent.dto';
import { UpdateParentDto } from 'src/api/parent/dto/update-parent.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { EmployeeService } from 'src/api/employee/employee.service';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private parentService: ParentService,
    private companyService: CompanyService,
    private employeeService: EmployeeService,
  ) {}

  //TODO: Add userRole to userEntity
  //TODO: and merge login companies

  @Public()
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: LoginDto })
  @Post('loginParent')
  async loginParent(@Request() req, @Body() loginDto: LoginDto) {
    const token = await this.authService.login(req.user);

    const parentStatus = await this.parentService.isParentInitialized(
      loginDto.email,
    );
    if (parentStatus === false)
      throw new UnauthorizedException('Parent doesnt exist');

    return { ...token, ...parentStatus };
  }

  @Public()
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: LoginDto })
  @Post('loginEmployee')
  async loginEmployee(@Request() req, @Body() loginDto: LoginDto) {
    // return role of the employee
    const token = await this.authService.login(req.user);
    const role = await this.employeeService.findEmployeeRoleByEmail(
      loginDto.email,
    );
    if (!role) throw new UnauthorizedException('Employee doesnt exist');

    return { ...token, ...role };
  }

  @Public()
  @Post('completeParentRegistration/:id')
  async completeParentRegistration(
    @Param('id') id: string,
    @Body() createParentDto: CreateParentDto,
  ) {
    const updatedParent = await this.parentService.update(
      id,
      createParentDto as UpdateParentDto,
    );
    return { userId: updatedParent.user.id };
  }

  @Public()
  @Post('initializeParentRegistration')
  async initializeParent(
    @Body()
    createUnitializedParentDto: CreateUnitializedParentDto,
  ) {
    return await this.parentService.createUninitializedParent(
      createUnitializedParentDto,
    );
  }

  @Public()
  @Post(':id/resetPassword')
  async resetPassword(
    @Param('id') id: string,
    @Body()
    resetDto: ResetPasswordDto,
  ) {
    return await this.authService.resetPassword(id, resetDto);
  }

  @Public()
  @Post('registerCompany')
  async registerCompany(@Body() registerCompanyDto: CreateCompanyDto) {
    return await this.companyService.create(registerCompanyDto);
  }
}
