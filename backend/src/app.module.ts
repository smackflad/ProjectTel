import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { ParentModule } from './api/parent/parent.module';
import { CompanyModule } from './api/company/company.module';
import { OrderModule } from './api/order/order.module';
import { EventModule } from './api/event/event.module';
import { LocationModule } from './api/location/location.module';
import { EmployeeModule } from './api/employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    AuthModule,
    UserModule,
    ParentModule,
    CompanyModule,
    OrderModule,
    EventModule,
    LocationModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
