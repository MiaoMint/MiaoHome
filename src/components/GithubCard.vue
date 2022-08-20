<template>
  <div class="card skeleton" v-if="skeleton">
    <div style="width: 90%"></div>
    <div style="width: 70%"></div>
    <div style="width: 60%"></div>
    <div style="width: 70%"></div>
    <div class="icons">
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="card" v-else>
    <h2>{{ repo }}</h2>
    <p>{{ desc }}</p>
    <div class="mb-2 tags">
      <span v-if="forked" class="tag mb-1 fork">forked</span>
      <span class="tag mb-1" v-for="v in tags">{{ v }}</span>
    </div>
    <div class="icons">
      <div class="icon"><IconStar></IconStar> {{ starNum }}</div>
      <div class="icon"><Iconbranch></Iconbranch> {{ forkNum }}</div>
    </div>
  </div>
</template>

<script>
import IconStar from "./icons/IconStar.vue";
import Iconbranch from "./icons/Iconbranch.vue";
export default {
  props: ["tags", "repo", "desc", "starNum", "forkNum", "skeleton", "forked"],
  components: { IconStar, Iconbranch },
};
</script>

<style scoped>
.card {
  padding: 20px;
  background-color: rgb(240 240 240);
  border-radius: 20px;
  transition: 0.2s ease;
  height: calc(100% - 40px);
}

.skeleton .icons {
  display: flex;
  background-color: unset;
  animation: unset;
  background-image: unset;
}

.skeleton .icons div {
  width: 80%;
  margin-right: 10px;
}

.card h2 {
  word-break: break-all;
}

.card:hover {
  transform: scale(1.07);
}

.tag {
  padding: 5px 10px;
  background-color: rgb(255 70 70 / 12%);
  color: rgb(255 70 70);
  margin-right: 8px;
  border-radius: 20px;
  font-size: 13px;
  display: inline-block;
}
.fork {
  background-color: rgb(202 70 255 / 12%);
  color: rgb(177 70 255);
}

.tags {
  word-break: break-all;
}

.icon svg {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.icons {
  display: flex;
}
</style>
