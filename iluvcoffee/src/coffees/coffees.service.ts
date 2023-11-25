import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Shipwreck Roast 2',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id == +id);
    if (!coffee) {
      throw new HttpException(`Coffee ${id} not found `, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }
  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }
  update(id: string, createCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing
    }
  }
  remove(id: string) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing
      this.coffees = this.coffees.filter((item) => item.id != +id);
    }
    return this.coffees;
  }
}
