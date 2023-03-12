<template>
    <section class="score">
        Player <span>{{ this.player }}</span> X <span>{{ this.computer }}</span> Computer
    </section>
</template>

<script>
export default {
    props: ["player", "computer"],
};
</script>

<style lang="scss">
section.score {
    border-bottom: 1px solid black;
    padding: 24px;
    font-size: 19px;
}

span {
    padding: 8px;
    font-weight: bold;
    border: 1px solid black;
}
</style>
