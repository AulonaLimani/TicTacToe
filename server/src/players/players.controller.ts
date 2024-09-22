import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { Prisma } from '@prisma/client';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createPlayersInput: Prisma.PlayersCreateInput) {
    return this.playersService.create(createPlayersInput);
  }

  @Get()
  findAll(@Query('id') id?: string) {
    return this.playersService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() playersUpdateInput: Prisma.PlayersUpdateInput,
  ) {
    return this.playersService.update(+id, playersUpdateInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
