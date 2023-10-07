import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['choco', 'vanilla'],
    },
    {
      id: 2,
      name: 'Shipwreck Roast 2',
      brand: 'Buddy Brew',
      flavors: ['choco', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new HttpException(
        `Coffeee with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return coffee;
  }

  create(coffeeDto: any) {
    this.coffees.push(coffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id);
    if (coffee) {
      // update coffee
    }
  }

  remove(id: string) {
    const coffeIndex = this.coffees.findIndex(
      ({ id: coffeeId }) => coffeeId === +id,
    );
    if (coffeIndex >= 0) {
      this.coffees.splice(coffeIndex, 1);
      return;
    }
    throw new NotFoundException(`Coffee #${id} not found`);
  }
}
