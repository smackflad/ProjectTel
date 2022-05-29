import { Company } from 'src/api/company/entities/company.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Order } from 'src/api/order/entities/order.entity';
import {
  Base,
  BaseWithoutId,
} from 'src/infastructure/database/entities/base.entity';
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

  @Column({ type: 'date', nullable: true })
  eventDate: string;

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
