var myTodoList = {
  template: `
    <div class="my-todo-list-container">
      {{ctrl.myTodos}}
      <h1 class="my-todo-list-title">MY TODO LIST</h1>
      <input-box on-add-item="ctrl.addItem(item)"></input-box>
      <todo-list-item 
        ng-repeat="myTodo in ctrl.myTodos"
        item-name="{{myTodo.name}}"
        item-is-done="myTodo.done"
      ></todo-list-item>
    </div>  
  `,
  controllerAs: "ctrl",
  controller: function () {
    var ctrl = this;

    ctrl.myTodos = [
      {name: "brushing my teeth", done: false},
      {name: "brushing my hair", done: true},
      {name: "taking a shower", done: false}
    ]

    ctrl.addItem = function(item) {
      ctrl.myTodos.push({
        name: item,
        done: false
      })
    }

  }
};

var todoListItem = {
  bindings: {
    itemName: "@",
    itemIsDone: "="
  },
  template: `
    <div class="todo-list-item-container">
      <span 
        class="todo-list-item"
        ng-class="{'todo-list-item-done': ctrl.itemIsDone}"
      >
        {{ctrl.itemName}}
      </span>
      <button 
        class="button" 
        ng-class="{'button-disabled': ctrl.itemIsDone}"
        ng-click="ctrl.checkOffItem()"
      >
        Done
      </button>
    </div>  
  `,
  controllerAs: "ctrl",
  controller: function () {
    var ctrl = this;

    ctrl.checkOffItem = function() {
      ctrl.itemIsDone = !ctrl.itemIsDone
    };

  }
};

var inputBox = {
  bindings: {
    onAddItem: "&"
  },
  template: `
    <div class="input-container">
      <input class="input" ng-model="ctrl.inputText"/>
      <button class="button" 
      ng-click="ctrl.onAddItem({item: ctrl.inputText})">
        Add
      </button>
    </div>  
  `,
  controllerAs: "ctrl",
  controller: function () {
    var ctrl = this;

  }
};


angular
	.module('app', [])
  .component('myTodoList', myTodoList)
  .component('todoListItem', todoListItem)
  .component('inputBox', inputBox)