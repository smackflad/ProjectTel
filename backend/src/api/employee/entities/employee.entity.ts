import { Company } from 'src/api/company/entities/company.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Base } from 'src/infastructure/database/entities/base.entity';
import { UserRole } from 'src/infastructure/enums/roles.enum';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Employee extends Base {
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.COMPANY_ADMIN,
  })
  role: UserRole;

  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
