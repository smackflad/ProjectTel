import { Base } from 'src/infastructure/database/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
