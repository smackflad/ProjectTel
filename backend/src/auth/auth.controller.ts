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
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/infastructure/decorators/public.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/api/user/user.service';
import { CompanyService } from 'src/api/company/company.service';
import { ParentService } from 'src/api/parent/parent.service';
import { CreateUnitializedParentDto } from 'src/api/parent/dto/createUnitialized.dto';
import {
  RegisterQueryDto,
  RegisterType,
  RegistrationStep,
} from './dtos/register.query.dto';
import { CreateParentDto } from 'src/api/parent/dto/create-parent.dto';
import { UpdateParentDto } from 'src/api/parent/dto/update-parent.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private parentService: ParentService,
    private companyService: CompanyService,
  ) {}

  @Public()
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @Public()
  @Post('completeParentRegistration/:id')
  async completeParentRegistration(
    @Param('id') id: string,
    @Body() createParentDto: CreateParentDto,
  ) {
    return await this.parentService.update(
      id,
      createParentDto as UpdateParentDto,
    );
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
  @Post('registerCompany')
  async registerCompany(@Body() registerCompanyDto: CreateCompanyDto) {
    return await this.companyService.create(registerCompanyDto);
  }
}
