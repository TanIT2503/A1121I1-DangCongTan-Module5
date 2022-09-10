import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ITodo} from '../model/itodo';
import {TodoService} from '../service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: ITodo[] = [];
  todoForm = new FormControl();
  constructor( private todoService: TodoService) { }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.todoService.getAll().subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  saveTodo() {
    const todo = this.todoForm.value;
    this.todoService.saveTodo(todo).subscribe(
      () => {
      },
      () => {
        console.error();
      },
      () => {
        this.getAll();
        this.todoForm.reset();
      }
    );
  }
  toggleTodo(i: number) {
    this.todoList[i].completed = !this.todoList[i].completed;
  }
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {},
      () => {
        console.error(); },
      () => {this.getAll(); }
    );
  }
}
