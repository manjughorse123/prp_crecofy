<template>
    <main class="container-fluid flex-shrink-0 mb-4">
        <router-view />
    </main>
</template>

<script>
    import Nav from "../components/Nav.vue";
    import Refs from "../components/Refs.vue";
    import Heads from "../components/Heads.vue";

    export default {
        name: "DefaultLayout",
        components: {
            Nav,
            Refs,
            Heads,
        },
    };
</script>
