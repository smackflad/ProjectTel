import { Base } from 'src/infastructure/database/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  // TODO decide if we will use username or by unique email
  @Column({ nullable: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
