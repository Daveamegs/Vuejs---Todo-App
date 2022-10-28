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
        localStorage.setItem("todos", JSON.stringify(this.todos));
        // alert("todo added successfully");
      } else {
        alert("Cannot add empty todo");
      }
    },
  },
  created() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : this.todos;
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
};

Vue.createApp(todoApp).mount("#app");
