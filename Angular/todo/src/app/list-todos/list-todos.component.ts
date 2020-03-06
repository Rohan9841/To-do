import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todos {
  constructor(
    private id: number,
    private description: string,
    private deadline: Date,
    private isCompleted: boolean
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  deleteMessage:string="";
  todos: Todos[]

  // [
  //   new Todos(1,"Learn to Dance",false,new Date),
  //   new Todos(2,"Learn to Act",false,new Date),
  //   new Todos(3,"Learn to play guitar",false,new Date),
  //   new Todos(4,"Learn to full stack",false,new Date)
  // ];
  constructor(private dataService: TodoDataService, private router: Router) { }

  ngOnInit() {
   this.refresh();
  }

  refresh(){
    this.dataService.retrieveTodos('Rohan').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id:number){
    this.dataService.removeTodos(id).subscribe(
      response => {
        console.log(response);
        this.deleteMessage = `Todo with id ${id} has been successfully deleted`;
        this.refresh();
        
      },
      error => {
        console.log(error);
      }
    )
  }

  updateTodo(id:number){
    console.log(`updated ${id}`)
    this.router.navigate(['todos',id]);
  }
}
