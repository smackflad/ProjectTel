import { Base } from 'src/infastructure/database/entities/base.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';

export class User extends Base {
  // TODO decide if we will use username or by unique email
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;
}
