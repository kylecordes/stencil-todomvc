exports.config = {
  bundles: [
    { components: ['todo-welcome', 'todo-mvc', 'todo-list', 'todo-view'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
