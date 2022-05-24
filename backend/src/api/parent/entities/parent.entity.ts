import { Order } from 'src/api/order/entities/order.entity';
import { User } from 'src/api/user/entities/user.entity';
import { LocationWithoutId } from 'src/api/location/entities/location.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Parent extends LocationWithoutId {
  @Column()
  phone: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Order, (order) => order.parent)
  orders: Order[];

  @OneToOne(() => User, { primary: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
