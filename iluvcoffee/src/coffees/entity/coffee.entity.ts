import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;

  // array is stored as json
  // by setting nullable to true, we make flavors as optional
  @Column('json', { nullable: true })
  flavors: string[];
}
