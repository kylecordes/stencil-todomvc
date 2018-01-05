/*! Built with http://stenciljs.com (es5) */

App.loadStyles("todo-list","\ntodo-list.hydrated{visibility:inherit}","todo-mvc","\ntodo-mvc.hydrated{visibility:inherit}","todo-view","\ntodo-view.hydrated{visibility:inherit}");
App.loadComponents("butkeid7",function(t,e,o,i){"use strict";var l=function(){function t(){}return t.prototype.changed=function(t){this.toggledAllCompleted.emit(t.target.checked)},t.prototype.render=function(){return this.todos.length>0?e("section",{class:"main"},e("input",{id:"toggle-all",class:"toggle-all",type:"checkbox",checked:this.allCompleted,onChange:this.changed.bind(this)}),e("label",{htmlFor:"toggle-all"},"Mark all as complete"),e("div",{class:"todo-list"},this.todos.map(function(t){return e("todo-view",{todo:t})}))):e("span",null)},t}(),n=function(){function t(){this.todos=[]}return t.prototype.save=function(){},t.prototype.newTodoKeyUp=function(t){if("Enter"===t.key){var e=t.target,o=e.value.trim();o.length&&(this.todos=this.todos.concat([{title:o,completed:!1}]),this.save(),e.value="")}},t.prototype.getRemaining=function(){return this.todos.filter(function(t){return!t.completed})},t.prototype.getCompleted=function(){return this.todos.filter(function(t){return t.completed})},t.prototype.allCompleted=function(){return!this.todos.find(function(t){return!t.completed})},t.prototype.removeCompleted=function(){this.todos=this.getRemaining(),this.save()},t.prototype.toggledCompleted=function(t){var e=t.srcElement.todo,o=this.todos.slice();o[o.findIndex(function(t){return t===e})]=Object.assign({},e,{completed:!e.completed}),this.todos=o,this.save()},t.prototype.toggledAllCompleted=function(t){var e=t.detail;console.log("toggledAllCompleted",e),this.todos=this.todos.map(function(t){return Object.assign({},t,{completed:e})}),this.save()},t.prototype.updatedTitle=function(t){var e=t.srcElement.todo,o=t.detail;console.log("updatedTitle",e,o),this.save()},t.prototype.deleted=function(t){var e=t.srcElement.todo,o=this.todos.slice();o.splice(this.todos.indexOf(e),1),this.todos=o,this.save()},t.prototype.render=function(){return e("div",null,e("section",{class:"todoapp"},e("header",{class:"header"},e("h1",null,"todos"),e("input",{class:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onKeyUp:this.newTodoKeyUp.bind(this)})),e("stencil-router",null,e("stencil-route",{url:"/",exact:!0,component:"todo-list",componentProps:{todos:this.todos,allCompleted:this.allCompleted()}}),e("stencil-route",{url:"/active",component:"todo-list",componentProps:{todos:this.getRemaining(),allCompleted:this.allCompleted()}}),e("stencil-route",{url:"/completed",component:"todo-list",componentProps:{todos:this.getCompleted(),allCompleted:this.allCompleted()}})),this.todos.length>0?e("footer",{class:"footer"},e("span",{class:"todo-count"},e("strong",null,this.getRemaining().length),1===this.getRemaining().length?" item ":" items ","left"),e("ul",{class:"filters"},e("li",null,e("stencil-route-link",{url:"/",exact:!0,activeClass:"selected"},"All")),e("li",null,e("stencil-route-link",{url:"/active",activeClass:"selected"},"Active")),e("li",null,e("stencil-route-link",{url:"/completed",activeClass:"selected"},"Completed"))),this.getCompleted().length>0?e("button",{class:"clear-completed",onClick:this.removeCompleted.bind(this)},"Clear completed"):void 0):void 0),e("footer",{class:"info"},e("p",null,"Double-click to edit a todo"),e("p",null,"Created by ",e("a",{href:"http://kylecordes.com"},"Kyle Cordes")," at ",e("a",{href:"https://oasisdigital.com"},"Oasis Digital")),e("p",null,"Part of ",e("a",{href:"http://todomvc.com"},"TodoMVC"))))},t}(),s=function(){function t(){}return t.prototype.stopEditing=function(t){var e=t.target;this.updatedTitle.emit(e.value.trim()),this.editing=!1},t.prototype.toggleCompleted=function(t){t.preventDefault(),t.stopPropagation(),this.toggledCompleted.emit()},t.prototype.keyUp=function(t){var e=t.target.value.trim();"Enter"===t.key&&(e.length?this.updatedTitle.emit(e):this.deleted.emit(),this.editing=!1),"Esc"===t.key&&(this.editing=!1)},t.prototype.render=function(){var t=this;return e("li",{class:{completed:this.todo.completed,editing:this.editing}},e("div",{class:"view"},e("input",{class:"toggle",type:"checkbox",onClick:this.toggleCompleted.bind(this),checked:this.todo.completed}),e("label",{onDblClick:function(){return t.editing=!0}},this.todo.title),e("button",{class:"destroy",onClick:function(){return t.deleted.emit()}})),this.editing?e("input",{class:"edit",value:this.todo.title,onBlur:this.stopEditing.bind(this),onKeyUp:this.keyUp.bind(this)}):void 0)},t}();t["todo-list"]=l,t["todo-mvc"]=n,t["todo-view"]=s},["todo-list",[["allCompleted",1,1,3],["todos",1,1,1]],{},[["toggledAllCompleted"]]],["todo-mvc",[["todos",5,0,1]],{}],["todo-view",[["editing",5,0,1],["todo",1,1,1]],{},[["toggledCompleted"],["updatedTitle"],["deleted"]]]);;