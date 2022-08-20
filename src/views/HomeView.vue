<template>
  <div v-if="loading" class="skeleton">
    <div style="width: 60%;"></div>
    <div style="width: 90%;"></div>
    <div style="width: 70%;"></div>
    <div style="width: 80%;"></div>
  </div>
  <div v-else v-html="data"></div>
</template>

<script>
import MarkdownIt from "markdown-it";
import request from "umi-request";
export default {
  data() {
    return {
      data: "",
      md: null,
      loading: true,
    };
  },
  created() {
    this.md = new MarkdownIt().set({ html: true, breaks: true });
  },
  mounted() {
    request
      .get("/home.md")
      .then((res) => {
        this.data = this.md.render(res);
        console.log(this.data);
        this.loading = false;
      })
      .catch((err) => {
        this.data = err;
        console.log(err);
        this.loading = false;
      });
  },
};
</script>
