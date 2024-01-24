import { Controller, Delete, Get, Post, Put } from "@nestjs/common/decorators";
import { BookService } from "./book.service";

@Controller('book')

export class BookController {

  // public bookService : BookService = new BookService()

  constructor(private bookService : BookService){}
  

  @Post('/addBook')
  addBook(): string {
    return "It will Add book"
  }

  @Delete("/delete")
  deleteBook(): string {
    return "This will delete"
  }

  @Put("/update")
  updateBook(): string {
    return "This will update"
  }

  @Get("/findAll")
  findAll(): string {
    return this.bookService.findAll();
  }

}
