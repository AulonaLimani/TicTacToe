import {
  ObjectType,
  Field,
  Int,
  InputType,
  PartialType,
} from '@nestjs/graphql';
import { Game } from '../game/game.model';

@ObjectType()
export class Players {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  player_one: string;

  @Field(() => String)
  sign_one: string;

  @Field(() => String)
  player_two: string;

  @Field(() => String)
  sign_two: string;

  @Field(() => String)
  score: string;

  @Field(() => Date)
  created_date: Date;

  @Field(() => Boolean, { nullable: true })
  loged_in?: boolean;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => [Game], { nullable: true })
  Games?: Game[];
}

@InputType()
export class PlayersCreateInput {
  @Field(() => String)
  player_one: string;

  @Field(() => String)
  sign_one: string;

  @Field(() => String)
  player_two: string;

  @Field(() => String)
  sign_two: string;

  @Field(() => String)
  score: string;

  @Field(() => Boolean, { nullable: true })
  loged_in?: boolean;

  @Field(() => String, { nullable: true })
  password?: string;
}

@InputType()
export class UpdatePlayersInput extends PartialType(PlayersCreateInput) {}

@InputType()
export class DeletePlayersInput {
  @Field(() => Int)
  id: number;
}
