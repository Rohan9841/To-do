import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveTodos(username){
    return this.http.get<Todos[]>(`http://localhost:8080/api/user/${username}/getAllTodos`);
  }

  removeTodos(id:number){
    return this.http.delete(`http://localhost:8080/api/todos/delete/${id}`)
  }
}
