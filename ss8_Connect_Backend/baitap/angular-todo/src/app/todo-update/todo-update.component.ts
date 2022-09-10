import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ITodo} from '../model/itodo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  editTodo = new FormControl();
  todo: ITodo = {};
  id: number;
  constructor(private todoService: TodoService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.todoService.findById(this.id).subscribe((todo) => {
        this.todo = todo;
      });
    });
  }

  updateTodo() {
    const contentValue = this.editTodo.value;
    const todo: ITodo = {
      id: this.id,
      content: contentValue,
      completed: false
    };
    this.todoService.updateTodo(todo.id, todo);
  }
}
