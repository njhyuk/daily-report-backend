import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {UserDto} from "./user.dto";

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email: email});
  }

  async create(data: UserDto): Promise<User | undefined> {
    const user = new User();
    user.email = data.email;
    user.password = data.password;
    return await this.usersRepository.save(user);
  }
}
