import { UserDto } from './user.dto';
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() userDto: UserDto): string {
    try {
      // Process the user data, e.g., save it to the database
      // If something goes wrong, throw an exception
      if (true) {
        throw new Error('some error');
      }
      return `User ${userDto.username} created successfully`;
    } catch (error) {
      throw new HttpException('User creation failed', HttpStatus.BAD_REQUEST);
    }
  }
}
