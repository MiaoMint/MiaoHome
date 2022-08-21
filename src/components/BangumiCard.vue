<template>
  <div class="card m-2 skeleton" v-if="skeleton">
    <div class="img"></div>
    <div style="width: 70%"></div>
  </div>
  <div v-else class="card m-2">
    <div>
      <img :src="cover" referrerpolicy="no-referrer" :alt="title" />
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cover", "title", "skeleton"],
};
</script>

<style scoped>
.card {
  border-radius: 0 5px 0 5px;
}

.skeleton .img {
  height: 300px;
  border-radius: 10px;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .skeleton .img {
    height: 200px;
  }
}
</style>
