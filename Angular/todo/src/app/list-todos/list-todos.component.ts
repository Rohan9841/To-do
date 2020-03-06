import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    private id:number,
    private description: string,
    private isCompleted: boolean,
    private deadline: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos = [
    new Todos(1,"Learn to Dance",false,new Date),
    new Todos(2,"Learn to Act",false,new Date),
    new Todos(3,"Learn to play guitar",false,new Date),
    new Todos(4,"Learn to full stack",false,new Date)
  ];
  constructor() { }

  ngOnInit() {
  }

}
