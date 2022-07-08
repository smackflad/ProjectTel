import { Parent } from 'src/api/parent/entities/parent.entity';
import { Base } from 'src/infastructure/database/entities/base.entity';
import { Event } from 'src/api/event/entities/event.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Order extends Base {
  @Column('int')
  ammount: number;

  // @ManyToOne(() => Parent, (parent) => parent.orders, { nullable: false })
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  @Column('uuid')
  parentId: string;

  @ManyToOne(() => Event, (event) => event.orders)
  event: Event;
}
