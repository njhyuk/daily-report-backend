import {Entity, Column, ObjectIdColumn, ObjectID} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;
}
