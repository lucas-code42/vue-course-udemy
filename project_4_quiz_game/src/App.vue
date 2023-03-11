<template>
    <div>
        <template v-if="this.question">
            <h1 v-html="this.question"></h1>

            <template v-for="(answer, index) in this.answers" :key="index">
                <input
                    :disabled="this.answer_submited"
                    type="radio"
                    name="options"
                    :value="answer"
                    v-model="this.chosen_answer"
                />
                <label v-html="answer"></label><br />
            </template>

            <button
                v-if="!this.answer_submited"
                @click="this.submit()"
                class="send"
                type="button"
            >
                Send
            </button>

            <section class="result" v-if="this.answer_submited">
                <h4
                    v-if="this.chosen_answer === this.correct_answer"
                    v-html="
                        '&#9989; You got it! The corret answer is' +
                        this.correct_answer
                    "
                ></h4>
                <h4
                    v-if="this.chosen_answer != this.correct_answer"
                    v-html="
                        '&#10060; You got it wrong! the corret answer is' +
                        this.correct_answer
                    "
                ></h4>
                <button class="send" type="button" @click="this.getNewQuestion">
                    Next question
                </button>
            </section>
        </template>
    </div>
</template>

<script>
import  ScoreBoard  from "/components/ScoreBoard.vue";

export default {
    

    name: "App",

    data() {
        return {
            question: null,
            incorrect_answers: null,
            correct_answer: null,
            chosen_answer: null,
            answer_submited: null,
        };
    },

    methods: {
        submit() {
            if (!this.chosen_answer) {
                alert("Pick one of the options");
            } else {
                this.answer_submited = true;
                if (this.chosen_answer === this.correct_answer) {
                    console.log("Acertou miseravi");
                } else {
                    console.log("Errou miseravi");
                }
            }
        },

        getNewQuestion() {
            this.answer_submited = null;
            this.chosen_answer = null;
            this.question = null;
            
            this.axios
                .get("https://opentdb.com/api.php?amount=1")
                .then((response) => {
                    this.question = response.data.results[0].question;
                    this.incorrect_answers =
                        response.data.results[0].incorrect_answers;
                    this.correct_answer =
                        response.data.results[0].correct_answer;

                    console.log("1", this.question);
                    console.log("2", this.incorrect_answers);
                    console.log("3", this.correct_answer);

                    console.log("4", response.data.results[0]);
                });
        },
    },

    computed: {
        answers() {
            var answers = JSON.parse(JSON.stringify(this.incorrect_answers)); // criando uma cópia da variavel
            answers.splice(
                Math.round(Math.random() * answers.length),
                0,
                this.correct_answer
            ); // embaralhando array com as respostas
            return answers;
        },
    },

    // life cycle hooks
    created() {
        this.getNewQuestion();
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
