import {Entity, hasMany, model, property} from '@loopback/repository';
import {Address} from "./Address";
import {User} from "./User";
import {Volunteer} from "./Volunteer";
import {Quality} from "./Quality";

@model()
export class Request extends Entity{
  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: number;

  //*******************************
  //***** BASIC
  //*******************************

  @property()
  isActive: boolean;

  @property()
  description: string;

  @property()
  start: number;

  @property()
  end: number;

  @property()
  coordinator: User;

  @property()
  address: Address;

  //*******************************
  //***** STATISTIK
  //*******************************

  @property()
  positiveResponses: number;

  @property()
  activeHelpers: number;

  //*******************************
  //***** ASSOCIATION
  //*******************************

  @hasMany(() => Quality)
  qualities?: Quality[];

  @hasMany(() => Volunteer)
  volunteers?: Volunteer[];
}