<template>
  <div>
    <div v-for="item in fetchedAsk" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['fetchedAsk']),
    },
    created() {
      this.$store.dispatch('FETCH_ASKS');
    },
  };
</script>

<style></style>
