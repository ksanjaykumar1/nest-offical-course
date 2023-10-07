import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  // {each: true} indicated the expected values are array of strings
  @IsString({ each: true })
  readonly flavors: string[];
}
