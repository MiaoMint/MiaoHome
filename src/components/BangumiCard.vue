<template>
  <div class="card m-2">
    <div>
      <img :src="cover" referrerpolicy="no-referrer" :alt="title" />
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cover", "title"],
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
