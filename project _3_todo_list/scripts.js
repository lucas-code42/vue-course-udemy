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
            } else {
                alert("Preencha o campo");
            }
            return;
        },
        
        cleanAll: function () {
            this.tasks = []
            return
        }
    }
}

Vue.createApp(app).mount("#app");