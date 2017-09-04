import { Component, Prop, Event, EventEmitter } from '@stencil/core';

import { Todo } from '../../todo';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.scss'
})
export class TodoList {

  @Prop() todos: Todo[];
  @Prop() allCompleted: boolean;
  @Event() toggledAllCompleted: EventEmitter;

  changed(e: HTMLSelectElement) {
    this.toggledAllCompleted.emit(e.target.checked);
  }

  render() {
    return this.todos.length > 0 ?
      <section class='main'>
        <input id='toggle-all' class='toggle-all' type='checkbox'
          checked={this.allCompleted}
          onChange={this.changed.bind(this)} />
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <div class='todo-list'>
          {this.todos.map(todo => <todo-view todo={todo} />)}
        </div>
      </section>
      : <span></span>;
  }
}
