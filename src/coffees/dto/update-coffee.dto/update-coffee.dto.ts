import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

// PartialType accpet class and
// returns the class with all its properties set as optional
// Partial inherits all the decorators applied to the properperties
// and adds the additonal property @IsOptional() to all the properties
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
