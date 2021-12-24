<template>
  <div>
    <p>title: {{ this.$store.state.item.title }}</p>
    <p>user: {{ this.$store.state.item.user }}</p>
  </div>
</template>

<script>
  export default {
    created() {
      const itemId = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', itemId);
    },
  };
</script>

<style></style>
