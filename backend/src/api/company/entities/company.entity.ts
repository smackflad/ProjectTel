import { Column, Entity, OneToMany } from 'typeorm';
import { Event } from 'src/api/event/entities/event.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Employee } from 'src/api/employee/entities/employee.entity';

@Entity()
export class Company extends Location {
  @Column()
  name: string;

  @Column()
  taxId: string;

  @Column()
  taxOffice: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  iban: string;

  @OneToMany(() => Event, (event) => event.company)
  events: Event[];

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];
}
