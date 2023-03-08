<template>
    <div>
        <h1 v-html="this.question"></h1>

        <input type="radio" name="options" value="True" />

        <label>True</label><br />

        <input type="radio" name="options" value="False" />

        <label>False</label><br />

        <button class="send" type="button">Send</button>
    </div>
</template>

<script>
export default {
    name: "App",

    data() {
        return {
            question: null,
            incorrect_answers: null,
            correct_answer: null,
        };
    },

    computed: {
        answers() {
            var answers = JSON.parse(JSON.stringify(this.incorrect_answers)); // criando uma cópia da variavel
            answers.splice(Math.round(Math.random() * answers.length), 0, this.correct_answer); // embaralhando array com as respostas
            return answers;
        }
    },

    // life cycle hooks
    created() {
        this.axios
            .get("https://opentdb.com/api.php?amount=1&category=18")
            .then((response) => {
                this.question = response.data.results[0].question;
                this.incorrect_answers = response.data.results[0].incorrect_answers;
                this.correct_answer = response.data.results[0].correct_answer;

                console.log("1", this.question);
                console.log("2", this.incorrect_answers);
                console.log("3", this.correct_answer);

                console.log("4", response.data.results[0]);
            });
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    max-width: 960px;

    input[type="radio"] {
        margin: 12px 4px;
    }

    button.send {
        margin-top: 12px;
        height: 40px;
        max-width: 120px;
        padding: 0 16px;
        color: #ffff;
        background: #1867c0;
        border: 1px solid #1867c0;
        cursor: pointer;
    }
}
</style>
