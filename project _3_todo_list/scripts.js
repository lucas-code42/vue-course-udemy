const app = {

    data() {
        return {
            tasks: [],
            newTask: {
                name: "",
                doned: false
            }
        }
    },

    methods: {
        addNewTask: function () {
            if (this.newTask.name && this.newTask.doned === false) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    name: null,
                    doned: false
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