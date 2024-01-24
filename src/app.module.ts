import { BookService } from './book.service';
import { BookController } from './app.controller';
import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
  exports: []
})
export class AppModule {
  constructor()
  {
    console.log("App Module!")
  }
}
