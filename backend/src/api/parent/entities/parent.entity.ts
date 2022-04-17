import { Order } from 'src/api/order/entities/order.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Base } from 'src/infastructure/database/entities/base.entity';
import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Parent extends Base {
  @OneToMany(() => Order, (order) => order.parent)
  orders: Order[];

  // TODO Billing address?

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
