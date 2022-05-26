import { CreateCompanyDto } from './../api/company/dto/create-company.dto';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/infastructure/decorators/public.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateParentDto } from 'src/api/parent/dto/create-parent.dto';
import { UserService } from 'src/api/user/user.service';
import { CompanyService } from 'src/api/company/company.service';
import { ParentService } from 'src/api/parent/parent.service';

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
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('registerUser')
  async registerUser(@Body() registerUserDto: CreateUserDto) {
    return await this.userService.create(registerUserDto);
  }

  @Public()
  @Post()
  async registerParent(@Body() registerParentDto: CreateParentDto) {
    return await this.parentService.create(registerParentDto);
    // return this.authService.login(req.user);
  }

  @Public()
  @Post()
  async registerCompany(@Body() registerCompanyDto: CreateCompanyDto) {
    return await this.companyService.create(registerCompanyDto);
  }
}
