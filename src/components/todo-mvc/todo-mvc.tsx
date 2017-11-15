import { Component, State, Listen } from '@stencil/core';

import { Todo } from '../../todo';

// Disabled because of a strange error:
// const STORAGE_KEY = 'todomvc-items-stencil';

@Component({
  tag: 'todo-mvc',
  styleUrl: 'todo-mvc.scss'
})
export class TodoMvc {

  @State() todos: Todo[];

  constructor() {
    // this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    this.todos = [];
  }

  private save() {
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  }

  newTodoKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      const el = ev.target as HTMLInputElement;
      const val = el.value.trim();
      if (val.length) {
        this.todos = [...this.todos, {
          title: val,
          completed: false
        }];
        this.save();
        el.value = '';
      }
    }
  }

  getRemaining() {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompleted() {
    return this.todos.filter(todo => todo.completed);
  }

  allCompleted() {
    return !this.todos.find(todo => !todo.completed);
  }

  removeCompleted() {
    this.todos = this.getRemaining();
    this.save();
  }

  // This bit is less than ideal, coming from Angular, which has uniform
  // handling of built in DOM events and custom events. So far in Stencil, you
  // must use JSX to capture built in events, you must use Listen for custom
  // events, except for certain DOM events you also Listen for. However, staying
  // close to the underlying platform might mean we are stuck with this
  // nonuniformity.

  @Listen('toggledCompleted')
  toggledCompleted(e: CustomEvent) {
    const todo: Todo = e.srcElement['todo'];
    // Replacing instead of mutating is a pain. I miss Elm and CLJS; but I hate
    // to bring on an immutability library to a small web component.
    const newTodos = [...this.todos];
    const index = newTodos.findIndex(needle => needle === todo);
    newTodos[index] = { ...todo, completed: !todo.completed };
    this.todos = newTodos;
    this.save();
  }

  @Listen('toggledAllCompleted')
  toggledAllCompleted(e: CustomEvent) {
    const value = e.detail;
    console.log('toggledAllCompleted', value);
    this.todos = this.todos.map(todo => ({ ...todo, completed: value }));
    this.save();
  }

  @Listen('updatedTitle')
  updatedTitle(e: CustomEvent) {
    const todo: Todo = e.srcElement['todo'];
    const title: string = e.detail;
    console.log('updatedTitle', todo, title);
    this.save();
  }

  @Listen('deleted')
  deleted(e: CustomEvent) {
    const todo: Todo = e.srcElement['todo'];
    const newTodos = [...this.todos];
    newTodos.splice(this.todos.indexOf(todo), 1);
    this.todos = newTodos;
    this.save();
  }

  render() {
    return (
      <div>

        <section class='todoapp'>
          <header class='header'>
            <h1>todos</h1>
            <input class='new-todo'
              placeholder='What needs to be done?' autoFocus
              onKeyUp={this.newTodoKeyUp.bind(this)}
            />
          </header>

          <stencil-router>
            <stencil-route url='/' exact={true}
              component='todo-list'
              componentProps={{ todos: this.todos, allCompleted: this.allCompleted() }}
            />
            <stencil-route url='/active'
              component='todo-list'
              componentProps={{ todos: this.getRemaining(), allCompleted: this.allCompleted() }}
            />
            <stencil-route url='/completed'
              component='todo-list'
              componentProps={{ todos: this.getCompleted(), allCompleted: this.allCompleted() }}
            />
          </stencil-router>

          {this.todos.length > 0 ?
            <footer class='footer'>
              <span class='todo-count'>
                <strong>{this.getRemaining().length}</strong>
                {this.getRemaining().length === 1 ? ' item ' : ' items '}
                left</span>
              <ul class='filters'>
                <li>
                  <stencil-route-link url='/' exact={true} activeClass='selected'>All</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url='/active' activeClass='selected'>Active</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url='/completed' activeClass='selected'>Completed</stencil-route-link>
                </li>
              </ul>
              {this.getCompleted().length > 0 ?
                <button class='clear-completed'
                  onClick={this.removeCompleted.bind(this)} >Clear completed</button>
                : undefined}
            </footer>
            : undefined}
        </section>

        <footer class='info'>
          <p>Double-click to edit a todo</p>
          <p>Created by <a href='http://kylecordes.com'>Kyle Cordes</a> at <a href='https://oasisdigital.com'>Oasis Digital</a></p>
          <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}
