<script setup>
import GithubCard from "../components/GithubCard.vue";
</script>

<template>
  <div v-if="error">
    <p>{{ data }}</p>
  </div>
  <div v-else class="github-grid">
    <div v-if="loading" v-for="v in [1, 2, 3]" class="m-1">
      <GithubCard :skeleton="true"></GithubCard>
    </div>
    <div v-for="v in data" class="m-1">
      <a :href="v.html_url" target="_blank">
        <GithubCard
          :tags="v.topics"
          :repo="v.name"
          :desc="v.description"
          :starNum="v.stargazers_count"
          :forkNum="v.forks_count"
          :forked="v.fork"
        ></GithubCard>
      </a>
    </div>
  </div>
</template>
<script>
import request from "umi-request";
import config from "../../config";
export default {
  data() {
    return {
      data: [],
      error: false,
      loading: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      request
        .get(
          "https://api.github.com/users/" + config.GithubUsername + "/repos?sort=pushed"
        )
        .then((res) => {
          this.data = res;
          this.loading = false;
        })
        .catch((err) => {
          this.error = true;
          this.data = err;
          console.log(err);
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped>
.github-grid {
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
  .github-grid {
    grid-template-columns: 100%;
  }
}
</style>
