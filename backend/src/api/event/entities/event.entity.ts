import { Company } from 'src/api/company/entities/company.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Order } from 'src/api/order/entities/order.entity';
import { BaseWithoutId } from 'src/infastructure/database/entities/base.entity';
import { AgeCategory } from 'src/infastructure/enums/age-category.enum';
import { EventCategory } from 'src/infastructure/enums/event-category.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Event extends BaseWithoutId {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column('double precision')
  price: number;

  @Column()
  ammount: number;

  @Column({ type: 'date', nullable: true, array: true })
  eventDate: string[];

  @Column({
    type: 'enum',
    enum: EventCategory,
    default: [EventCategory.CINEMA],
    array: true,
  })
  eventCategory: EventCategory[];

  @Column({
    type: 'enum',
    enum: AgeCategory,
    default: [AgeCategory.MIDDLE_SCHOOL],
    array: true,
  })
  ageCategory: AgeCategory[];

  @Column({ default: false })
  active: boolean;

  @Column({ type: 'text', array: true })
  images: string[];

  @OneToMany(() => Order, (order) => order.event)
  orders: Order[];

  @ManyToOne(() => Company, (company) => company.events)
  company: Company;

  @OneToOne(() => Location, {
    primary: true,
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinColumn({ name: 'location_id', referencedColumnName: 'id' })
  location: Location;
}
