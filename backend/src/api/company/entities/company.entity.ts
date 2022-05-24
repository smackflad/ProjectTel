import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Event } from 'src/api/event/entities/event.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Employee } from 'src/api/employee/entities/employee.entity';
import { Base } from 'src/infastructure/database/entities/base.entity';

@Entity()
export class Company extends Base {
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

  @OneToOne(() => Location, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  location: Location;

  @OneToMany(() => Event, (event) => event.company)
  events: Event[];

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];
}
