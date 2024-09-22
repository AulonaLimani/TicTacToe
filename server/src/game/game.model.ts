import {
  ObjectType,
  Field,
  Int,
  InputType,
  PartialType,
} from '@nestjs/graphql';
import { Players } from './../players/players.model';

@ObjectType()
export class Game {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  players_id?: number;

  @Field(() => String)
  board: string;

  @Field(() => Players, { nullable: true })
  players?: Players;
}

@InputType()
export class CreateGameInput {
  @Field(() => Int, { nullable: true })
  players_id?: number;

  @Field(() => String)
  board: string;
}

@InputType()
export class UpdateGameInput extends PartialType(CreateGameInput) {}

@InputType()
export class DeleteGameInput {
  @Field(() => Int)
  id: number;
}
