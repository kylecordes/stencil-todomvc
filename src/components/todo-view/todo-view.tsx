import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

// The import is just an interface - it doesn't generate any code, therefore it
// doesn't require thinking about how/where shared code between components
// should be shipped.
import { Todo } from '../../todo';

@Component({
  tag: 'todo-view',
  styleUrl: 'todo-view.scss'
})
export class TodoView {

  @Prop() todo: Todo;
  @State() editing: boolean;
  @Event() toggledCompleted: EventEmitter; // I'd much prefer EventEmitter<T>
  @Event() updatedTitle: EventEmitter;
  @Event() deleted: EventEmitter;

  stopEditing(ev: KeyboardEvent) {
    const el = ev.target as HTMLInputElement; // Wish the typedefs did this for me.
    this.updatedTitle.emit(el.value.trim());
    this.editing = false;
  }

  toggleCompleted(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.toggledCompleted.emit();
  }

  // I found myself wanting to @Listen(), but it can't target a specific element.
  // This code seems too tedious as is.
  keyUp(ev: KeyboardEvent) {
    const el = ev.target as HTMLInputElement;
    const val = el.value.trim();
    if (ev.key === 'Enter') { // Could Stencil ship key code constants?
      if (val.length) {
        this.updatedTitle.emit(val);
      } else {
        this.deleted.emit();
      }
      this.editing = false;
    }
    if (ev.key === 'Esc') {
      this.editing = false;
    }
  }

  render() {
    return (
      <li class={{ completed: this.todo.completed, editing: this.editing }} >
        <div class='view'>
          <input class='toggle' type='checkbox'
            onClick={this.toggleCompleted.bind(this)}
            checked={this.todo.completed} />
          <label onDblClick={() => this.editing = true}>{this.todo.title}</label>
          <button class='destroy' onClick={() => this.deleted.emit()}></button>
        </div>

        {this.editing ?
          <input class='edit'
            value={this.todo.title}
            onBlur={this.stopEditing.bind(this)}
            onKeyUp={this.keyUp.bind(this)} />
          : undefined}
      </li>
    );
  }
}
