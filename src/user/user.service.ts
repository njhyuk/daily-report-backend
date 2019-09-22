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

  private static encryptor() {
    return require('bcrypt');
  }

  static async makePassword(value: string): Promise<string | undefined> {
    const saltRounds = 10;
    return UserService.encryptor().hash(value, saltRounds);
  }

  async checkUser(user: User, password: string): Promise<boolean | undefined> {
    return UserService.encryptor().compare(password, user.password);
  }

  async create(data: UserDto): Promise<User | undefined> {
    const user = new User();
    user.email = data.email;
    user.password = await UserService.makePassword(data.password);
    return await this.usersRepository.save(user);
  }
}
