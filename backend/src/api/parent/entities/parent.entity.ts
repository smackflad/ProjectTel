import { Order } from 'src/api/order/entities/order.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseWithoutId } from 'src/infastructure/database/entities/base.entity';

@Entity()
export class Parent extends BaseWithoutId {
  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ type: 'date', nullable: true })
  birthDate: string;

  @Column({ default: false })
  initialized: boolean;

  @Column({ nullable: true })
  card: string;

  @Column({ nullable: true, default: 0 })
  balance: number;

  @OneToMany(() => Order, (order) => order.parent)
  orders: Order[];

  @OneToOne(() => User, {
    primary: true,
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
