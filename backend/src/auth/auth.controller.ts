import { LoginDto } from './dtos/login.dto';
import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/infastructure/Decorators/public.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('token')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: LoginDto })
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
