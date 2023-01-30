import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoSrtvice: TodoService){

    }
    @Get()
    getTodos() {
    return this.todoSrtvice.getTodos();
    }

    @Post()
    postTodo(@Body("title") title:string, @Body("subtitle") subtitle:string){
       this.todoSrtvice.addTodo(title, subtitle)
    }


    @Delete("/:id")
    deleteTodoById(@Param("id") id:string){
        console.log(`id: ${id}`)
        return this.todoSrtvice.removeTodoById(id);
    }
}
