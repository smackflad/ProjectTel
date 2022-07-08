import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/api/user/user.service';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    const isMatch = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
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
    if (typeof user === 'undefined')
      throw new BadRequestException('user id not found');

    const isMatch = await bcrypt.compare(resetDto.oldPassword, user.password);
    if (resetDto.email === user.email && isMatch) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(resetDto.newPassword, salt);
      await this.userService.saveUser(user);
      return { passwordReset: true };
    } else {
      throw new UnauthorizedException('cannot reset passoword');
    }
  }
}
