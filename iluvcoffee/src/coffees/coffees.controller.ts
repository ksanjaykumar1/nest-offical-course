import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    // return 'All coffees';
    response.status(200).send('All coffees');
  }

  //   This signifies that we're expecting a dynamic root parameter named "id"
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return ${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
