import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {UserDto} from "./user.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }
}
