<template>
  <div><h1>Hello World</h1></div>
</template>

<script>
import x2js from "x2js";
import request from "umi-request";

export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    let xml2js = new x2js();
    this.data = xml2js.xml2js(this.getData())
    console.log(this.data);
  },

  methods: {
    getData() {
      request
        .get("https://blog.ohman.top/feed/")
        .then((res) => {
          this.loading = false;
          return res;
        })
        .catch((err) => {
          this.loading = false;
          return err;
        });
    },
  },
};
</script>
