import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/api/user/user.service';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async resetPassword(id: string, resetDto: ResetPasswordDto) {
    const user = await this.userService.findOne(id);
    if (
      resetDto.email === user.email &&
      resetDto.oldPassword === user.password
    ) {
      user.password = resetDto.newPassword;
      await this.userService.saveUser(user);
      return { passwordReset: true };
    } else {
      throw new UnauthorizedException('cannot reset passoword');
    }
  }
}
