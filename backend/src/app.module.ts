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

@Module({
  imports: [
    UserModule,
    ParentModule,
    CompanyModule,
    OrderModule,
    EventModule,
    LocationModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
