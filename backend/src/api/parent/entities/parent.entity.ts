import { Order } from 'src/api/order/entities/order.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseWithoutId } from 'src/infastructure/database/entities/base.entity';

@Entity()
export class Parent extends BaseWithoutId {
  @Column()
  phone: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date' })
  birthDate: string;

  @OneToMany(() => Order, (order) => order.parent)
  orders: Order[];

  @OneToOne(() => User, { primary: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
