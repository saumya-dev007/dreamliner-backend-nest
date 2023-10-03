import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistSchema } from 'src/models/artist/artist.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'artist_lists', schema:ArtistSchema}])],
  controllers: [ArtistController],
  providers: [ArtistService]
})
export class ArtistModule {}
