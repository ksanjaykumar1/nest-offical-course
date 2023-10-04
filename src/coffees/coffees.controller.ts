import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
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
    return `all coffees Limit ${limit} and offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `${id} coffee update`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `${id} coffee removed`;
  }
}
