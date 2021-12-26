<template>
  <div>
    <ul class="list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="ask-title">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <!-- {{ item.user }} -->
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
