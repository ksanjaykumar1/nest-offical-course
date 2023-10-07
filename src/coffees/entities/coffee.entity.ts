import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity/flavor.entity';

//Each entity class represents a sql table
// If table not present then
// it will generate a table same as class name in lower case
// for below it will generate coffee
@Entity()
export class Coffee {
  //@PrimaryGeneratedColumn() will auto generate id and auto increment
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // // flavor should store array as JSON and make this column is optionalble
  // @Column('json', { nullable: true })

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees)
  flavors: string[];
}
