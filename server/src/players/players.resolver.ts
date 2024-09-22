import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlayersService } from './players.service';
import {
  Players,
  PlayersCreateInput,
  UpdatePlayersInput,
  DeletePlayersInput,
} from './players.model';

@Resolver()
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) {}

  @Query(() => [Players])
  async getPlayers(
    @Args('id', { type: () => Int, nullable: true }) id?: number,
  ): Promise<Players[]> {
    return await this.playersService.findAll(id);
  }

  @Query(() => Players, { nullable: true })
  async getPlayer(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Players> {
    return await this.playersService.findOne(id);
  }

  @Query(() => Players, { nullable: true })
  async login(
    @Args('id', { type: () => Int }) id: number,
    @Args('password', { nullable: true }) password?: string,
  ): Promise<Players> {
    return await this.playersService.login(id, password);
  }

  @Mutation(() => Players)
  async createPlayers(
    @Args('playersCreateInput') playersCreateInput: PlayersCreateInput,
  ): Promise<Players> {
    return await this.playersService.create(playersCreateInput);
  }

  @Mutation(() => Players)
  async updatePlayers(
    @Args('id', { type: () => Int }) id: number,
    @Args('playersUpdateInput') playersUpdateInput: UpdatePlayersInput,
  ): Promise<Players> {
    return await this.playersService.update(id, playersUpdateInput);
  }

  @Mutation(() => Boolean)
  async onWin(
    @Args('id', { type: () => Int }) id: number,
    @Args('score') score: string,
    @Args('board') board: string,
  ): Promise<boolean> {
    return await this.playersService.onWin(id, score, board);
  }

  @Mutation(() => Players)
  async register(
    @Args('id', { type: () => Int }) id: number,
    @Args('password') password: string,
  ): Promise<Players> {
    return await this.playersService.register(id, password);
  }

  @Mutation(() => Players)
  async deletePlayers(
    @Args('deletePlayersInput') deletePlayersInput: DeletePlayersInput,
  ): Promise<Players> {
    return await this.playersService.remove(deletePlayersInput.id);
  }
}
