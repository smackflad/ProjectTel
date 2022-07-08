import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CompanyService } from './api/company/company.service';
import { CreateCompanyDto } from './api/company/dto/create-company.dto';
import { CreateEmployeeDto } from './api/employee/dto/create-employee.dto';
import { EmployeeService } from './api/employee/employee.service';
import { CreateLocationDto } from './api/location/dto/create-location.dto';
import { CreateUserDto } from './api/user/dto/create-user.dto';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { UserRole } from './infastructure/enums/roles.enum';
import { GlobalExceptionFilter } from './infastructure/filters/globalException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    const companyService = app.get(CompanyService);
    const company = new CreateCompanyDto();
    const admin = new CreateUserDto();
    admin.email = 'admin@happykids.com';
    admin.firstName = 'system';
    admin.lastName = 'admin';
    admin.password = 'admin';
    company.admin = admin;

    const location = new CreateLocationDto();
    location.address = 'Online';
    location.city = 'Panama City';
    location.state = 'La Chorrera';
    location.country = 'Panama';
    location.postalCode = '0101';
    location.addressNum = '99';
    company.location = location;

    company.email = 'happykids@happykids.com';
    company.name = 'Happy Kids';
    company.taxId = '9874563210';
    company.taxOffice = 'Bocas del Toro Province';
    company.iban = 'PM 1239801329803921875489328931017';
    company.phone = '2108124739';

    await companyService.createSystemAdmin(company);
  } catch (err) {
    console.log('test err');
  }

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
    }),
  );

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.setGlobalPrefix('api/'); //edit your prefix as per your requirements!

  const config = new DocumentBuilder()
    .setTitle('Server Docs')
    .setDescription('Backend API description')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  // app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(configService.getPort());
}
bootstrap();
