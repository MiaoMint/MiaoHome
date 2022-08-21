<template>
  <div class="card m-2 skeleton" v-if="skeleton">
    <div style="width: 100%; height:300px;border-radius: 10px;"></div>
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

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
