import { TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public loading: boolean = true;
  public searchString: string = '';
  constructor(public TodosService: TodosService) {}

  ngOnInit() {
    this.TodosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number) {
    // this.onToggle.emit(id);
    this.TodosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.TodosService.removeTodo(id);
  }
}
