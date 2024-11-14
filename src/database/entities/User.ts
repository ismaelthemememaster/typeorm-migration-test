/** @packages */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  username: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  usertype: string;

  @Column()
  sheeplevel: string;
}
