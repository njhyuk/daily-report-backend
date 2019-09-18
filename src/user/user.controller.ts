import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }
}
