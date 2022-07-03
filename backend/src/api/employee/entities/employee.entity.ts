import { Company } from 'src/api/company/entities/company.entity';
import { User } from 'src/api/user/entities/user.entity';
import { BaseWithoutId } from 'src/infastructure/database/entities/base.entity';
import { UserRole } from 'src/infastructure/enums/roles.enum';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Employee extends BaseWithoutId {
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.COMPANY_ADMIN,
  })
  role: UserRole;

  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  @OneToOne(() => User, {
    primary: true,
    cascade: ['insert', 'update'],
    eager: true,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;
}
