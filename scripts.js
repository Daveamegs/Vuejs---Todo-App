const todoApp = {
  data() {
    return {
      todos: [],
      addNewTodos: {
        done: false,
      },
    };
  },
  methods: {
    addTodos: function () {
      if (this.addNewTodos.todoName) {
        this.todos.push(this.addNewTodos);
        this.addNewTodos = {
          done: false,
        };
        alert("todo added successfully");
      } else {
        alert("Cannot add empty todo");
      }
    },
  },
};

Vue.createApp(todoApp).mount("#app");
