import { Injectable } from '@nestjs/common';


@Injectable()

export class BookService{
    addBook(): string {
        return "It will Add book"
      }
    
      deleteBook(): string {
        return "This will delete"
      }
    
      updateBook(): string {
        return "This will update"
      }
    
      findAll(): string {
        return "This will findAll123"
      }
}