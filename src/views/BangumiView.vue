<template>
  <div>
    <div></div>
  </div>
</template>

<script>
import request from "umi-request";
import config from "../../config";
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
    let s = async () => {
      await request(
        "https://api.bilibili.com/x/space/bangumi/follow/list?type=1&pn=" +
          this.page +
          "&ps=15&vmid=" +
          config.BilibiliUid,
        {
          method: "get",
          credentials: "omit",
          headers: {
            "Referer": "https://www.bilibili.com",
          },
        }
      )
        .then((res) => {
          this.data = res;
          console.log(res);
          this.loading = false;
        })
        .catch((err) => {
          this.error = true;
          this.data = err;
          console.log(err);
          this.loading = false;
        });
    };
    s();
  },
};
</script>
