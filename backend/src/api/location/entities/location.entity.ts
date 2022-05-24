import { BaseWithoutId } from './../../../infastructure/database/entities/base.entity';
import { Base } from 'src/infastructure/database/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export abstract class Location extends Base {
  @Column()
  address: string;

  @Column()
  addressNum: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @Column({ nullable: true })
  longtitude: string;

  @Column({ nullable: true })
  latitude: string;
}

export abstract class LocationWithoutId extends BaseWithoutId {
  @Column()
  address: string;

  @Column()
  addressNum: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @Column({ nullable: true })
  longtitude: string;

  @Column({ nullable: true })
  latitude: string;
}
