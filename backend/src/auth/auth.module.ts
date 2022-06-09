import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from './auth.constants';
import { LocalStrategy } from './strategies/local.strategy';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserModule } from 'src/api/user/user.module';
import { ParentModule } from 'src/api/parent/parent.module';
import { CompanyModule } from 'src/api/company/company.module';
import { EmployeeModule } from 'src/api/employee/employee.module';

@Module({
  imports: [
    UserModule,
    ParentModule,
    CompanyModule,
    PassportModule,
    EmployeeModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy, LocalAuthGuard],
})
export class AuthModule {}
