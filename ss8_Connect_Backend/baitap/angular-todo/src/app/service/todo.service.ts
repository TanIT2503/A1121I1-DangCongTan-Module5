import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ITodo} from '../model/itodo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) { }
  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]> (this.API_URL);
  }

  saveTodo(contentAdd: string): Observable<void> {
    const todo: ITodo = {
      content: contentAdd,
      completed: false
    };
    return this.http.post<void>(this.API_URL, todo);
  }

  findById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(this.API_URL + '/' + id);
  }
  updateTodo(id: number, todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`${this.API_URL}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<ITodo>{
    return this.http.delete<ITodo>(`${this.API_URL}/${id}`);
  }
}
