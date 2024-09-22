import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class GameService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(id?: number) {
    if (id) {
      return await this.databaseService.game.findMany({
        where: { id },
      });
    }

    return await this.databaseService.game.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.game.findUnique({ where: { id } });
  }

  async create(gameCreateInput: Prisma.GameCreateInput) {
    return await this.databaseService.game.create({
      data: gameCreateInput,
    });
  }

  async update(id: number, gameUpdateInput: Prisma.GameUpdateInput) {
    return await this.databaseService.game.update({
      where: { id },
      data: gameUpdateInput,
    });
  }

  async remove(id: number) {
    return await this.databaseService.game.delete({ where: { id } });
  }
}
