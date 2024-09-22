import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GameService } from './game.service';
import {
  Game,
  CreateGameInput,
  UpdateGameInput,
  DeleteGameInput,
} from './game.model';

@Resolver()
export class GameResolver {
  constructor(private readonly gameService: GameService) {}

  @Query(() => [Game])
  async getGames(
    @Args('id', { type: () => Int, nullable: true }) id?: number,
  ): Promise<Game[]> {
    return await this.gameService.findAll(id);
  }

  @Query(() => Game, { nullable: true })
  async getGame(@Args('id', { type: () => Int }) id: number): Promise<Game> {
    return await this.gameService.findOne(id);
  }

  @Mutation(() => Game)
  async createGame(
    @Args('createGameInput') createGameInput: CreateGameInput,
  ): Promise<Game> {
    return await this.gameService.create(createGameInput);
  }

  @Mutation(() => Game)
  async updateGame(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateGameInput') updateGameInput: UpdateGameInput,
  ): Promise<Game> {
    return await this.gameService.update(id, updateGameInput);
  }

  @Mutation(() => Game)
  async deleteGame(
    @Args('deleteGameInput') deleteGameInput: DeleteGameInput,
  ): Promise<Game> {
    return await this.gameService.remove(deleteGameInput.id);
  }
}
