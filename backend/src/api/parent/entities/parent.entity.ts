import { Order } from 'src/api/order/entities/order.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Parent extends Location {
  @Column()
  phone: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Order, (order) => order.parent)
  orders: Order[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
