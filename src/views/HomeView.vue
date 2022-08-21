<template>
  <div v-if="loading" class="skeleton">
    <div style="width: 60%"></div>
    <div style="width: 90%"></div>
    <div style="width: 70%"></div>
    <div style="width: 80%"></div>
  </div>
  <div v-else v-html="data"></div>
</template>

<script>
import MarkdownIt from "markdown-it";
import request from "umi-request";
import config from "../../config";
export default {
  data() {
    return {
      data: "",
      loading: true,
    };
  },
  mounted() {
    let md = new MarkdownIt().set({ html: true, breaks: true });
    request
      .get(
        config.HomeMd == "Github"
          ? "https://raw.githubusercontent.com/" +
              config.GithubUsername +
              "/" +
              config.GithubUsername +
              "/master/readme.md"
          : config.HomeMd
      )
      .then((res) => {
        this.data = md.render(res);
        this.loading = false;
      })
      .catch((err) => {
        this.data = err;
        this.loading = false;
      });
  },
};
</script>
