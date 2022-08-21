<template>
  <div v-if="error">
    <p>{{ data }}</p>
  </div>
  <div v-else class="grid">
    <a v-for="v in data.list" :href="v.url" target="_blank" rel="noopener noreferrer">
      <BangumiCard :cover="v.cover" :title="v.title"></BangumiCard>
    </a>
    <BangumiCard v-if="loading" v-for="v in 3" :skeleton="true"></BangumiCard>
  </div>
</template>

<script>
import request from "umi-request";
import config from "../../config";
import BangumiCard from "../components/BangumiCard.vue";
export default {
  data() {
    return {
      data: "",
      page: 1,
      loading: true,
      error: false,
    };
  },
  mounted() {
    request(
      "/bili/x/space/bangumi/follow/list?type=1&pn=" +
        this.page +
        "&ps=15&vmid=" +
        config.BilibiliUid,
      {
        headers: {
          referer: "https://www.bilibili.com/",
        },
      }
    )
      .then((res) => {
        this.data = res.data;
        this.data.list.forEach(e => {
          e.cover = e.cover.replace("http","https")
        });
        this.loading = false;
      })
      .catch((err) => {
        this.error = true;
        this.data = err;
        console.log(err);
        this.loading = false;
      });
  },
  components: { BangumiCard },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}
a {
  color: #3d3d3d;
}
a:hover {
  color: #3d3d3d;
}
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 50% 50%;
  }
}
</style>
