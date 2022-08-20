<template>
  <div v-if="error">
    <p>{{ data }}</p>
  </div>
  <div v-else>
    <div v-if="loading" class="skeleton">
      <div style="width: 60%"></div>
      <div style="width: 90%"></div>
      <div style="width: 70%"></div>
      <div style="width: 80%"></div>
    </div>
    <div v-else v-for="v in data" class="mb-4">
      <a :href="v.link" target="_blank">
        <h3>
          {{ v.title }} <span style="font-size: 0.2em"> - {{ v.pubDate }}</span>
        </h3>
        <p>{{ v.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import x2js from "x2js";
import request from "umi-request";

export default {
  data() {
    return {
      xml: "",
      data: "",
      loading: true,
      error: false,
    };
  },
  mounted() {
    let xml2js = new x2js();
    request
      .get("https://blog.ohman.top/feed/")
      .then((res) => {
        this.data = xml2js.xml2js(res).rss.channel.item;
        console.log(this.data);
        this.loading = false;
      })
      .catch((err) => {
        this.error = true;
        this.data = err;
        this.loading = false;
      });
  },

  methods: {
    getData() {},
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
