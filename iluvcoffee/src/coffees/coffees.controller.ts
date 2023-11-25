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
