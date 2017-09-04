import { Component } from '@stencil/core';

// This component redirects right away - it is here to work around a router bug:
// https://github.com/ionic-team/stencil-router/issues/7

@Component({
  tag: 'todo-welcome'
})
export class TodoWelcome {
  render() {
    return (
      <stencil-router-redirect url='/all' />
    );
  }
}
