import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field(type => String)
  Name: string;

  @Field(type => String)
  url: string;

  @Field({ nullable: true })
  Description?: string;

  @Field({ nullable: true })
  Author: string;

  @Field(type => [String])
  Ingredients: string[];

  @Field(type => [String])
  Method: string[];
}