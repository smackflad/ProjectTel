import { Company } from 'src/api/company/entities/company.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Order } from 'src/api/order/entities/order.entity';
import { Base } from 'src/infastructure/database/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Event extends Location {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column('int')
  ammount: number;

  // TODO add images

  // TODO add category

  @OneToMany(() => Order, (order) => order.event)
  orders: Order[];

  @ManyToOne(() => Company, (company) => company.events)
  company: Company;

  // @OneToOne(() => LocationWithId)
  // @JoinColumn()
  // location: LocationWithId;
}
