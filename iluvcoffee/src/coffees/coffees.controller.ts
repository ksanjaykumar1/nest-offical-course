import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `All coffees limit ${limit} ${offset}`;
  }

  //   This signifies that we're expecting a dynamic root parameter named "id"
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return ${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates ${id} coffee`;
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return `This action removes ${id} coffee`;
  }
}
