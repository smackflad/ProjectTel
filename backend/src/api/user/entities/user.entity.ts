import { Base } from 'src/infastructure/database/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  // TODO decide if we will use username or by unique email
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
