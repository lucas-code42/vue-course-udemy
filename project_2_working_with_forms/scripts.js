members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
        addNewMember: function() {
            if (this.newMember.fname && this.newMember.lname, this.newMember.instrument) {
                this.members.push(this.newMember);
                this.newMember = {} // limpa o formulario, por padrão vuejs usa 2 way data binding
            } else {
                alert("All fields must be filled")
            }
            return
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
