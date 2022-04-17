import { Base } from 'src/infastructure/database/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Location extends Base {
  @Column()
  address: string;

  @Column()
  address_num: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  longtitude: string;

  @Column()
  latitude: string;
}
