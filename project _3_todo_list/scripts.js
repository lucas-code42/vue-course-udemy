const app = {

    data() {
        return {
            tasks: [],
            newTask: {
                name: "",
                done: false
            }
        }
    },

    methods: {
        addNewTask: function () {
            if (this.newTask.name && this.newTask.done === false) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    name: null,
                    done: false
                };
                localStorage.setItem("todos", JSON.stringify(this.tasks));
            } else {
                alert("Preencha o campo");
            }
            return;
        },
        
        cleanAll: function () {
            this.tasks = []
            return
        }
    },

    // life cycle Hooks --> ciclo de vida da aplicação
    created() {
        if (localStorage.getItem("todos")) {
            this.tasks = JSON.parse(localStorage.getItem("todos"));
        } else {
            this.tasks = [];
        }

        console.log(this.tasks);
    }

    
    // beforeCreate() {
    //     console.log("beforeCreate");
    // },
    
    // created() {
    //     console.log("created");
    // },

    // beforeUpdate() {
    //     console.log("beforeUpdate");
    // }
    
}

Vue.createApp(app).mount("#app");