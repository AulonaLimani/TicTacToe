import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PlayersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(id?: number) {
    if (id)
      return await this.databaseService.players.findMany({
        where: { id },
        orderBy: { id: 'desc' },
      });

    return await this.databaseService.players.findMany();
  }

  async create(playersCreateInput: Prisma.PlayersCreateInput) {
    return await this.databaseService.players.create({
      data: playersCreateInput,
    });
  }

  async findOne(id: number) {
    return await this.databaseService.players.findUnique({
      where: { id },
      include: { Games: true },
    });
  }

  async login(id: number, password?: string) {
    const player = await this.findOne(id);
    if (player.password !== password && player.loged_in) {
      return null;
    }
    return player;
  }

  async update(id: number, playersUpdateInput: Prisma.PlayersUpdateInput) {
    return await this.databaseService.players.update({
      where: { id },
      data: playersUpdateInput,
    });
  }

  async onWin(id: number, score: string, board: string) {
    await this.update(id, { score });
    await this.databaseService.game.create({ data: { players_id: id, board } });
    return true;
  }

  async register(id: number, password: string) {
    return await this.update(id, { password, loged_in: true });
  }

  async remove(id: number) {
    return await this.databaseService.players.delete({ where: { id } });
  }
}
