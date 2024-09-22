import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { DatabaseModule } from 'src/database/database.module';
import { PlayersResolver } from './players.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [PlayersService, PlayersResolver],
})
export class PlayersModule {}
