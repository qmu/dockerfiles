<template>
  <button>{{ text }}</button>
</template>

<style scoped>
  button {
    color: green;
    border-radius: 5px;
    font-size: 18px;
    line-height: 1.5;
    padding: 0 10px;
  }
</style>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'my-button',
    props: {
      text: {
        type: String,
        default: 'Hello Vue'
      }
    },
    watch: {
    },
    computed: {
      ...mapGetters([
      ]),
    },
    components: {
    },
    methods: {
    },
    data() {
      return {
      };
    },
  };
</script>
