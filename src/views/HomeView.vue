<script setup lang="ts">
import { ref, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import request from "umi-request";
import config from "../../config";


const data = ref<HTMLDivElement>();
const loading = ref<boolean>(true);

let md = new MarkdownIt().set({ html: true, breaks: true });

onMounted(() => {
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
      // (data.value as HTMLDivElement).innerHTML = md.render(res)
      data.value!.innerHTML = md.render(res);
      loading.value = false

    })
    .catch((err) => {
      data.value!.innerHTML = err;
      loading.value = false
    });
});
</script>

<template>
<div id="home">
  <div class="markdown" id="home" ref="data"></div>
  <div v-if="loading" class="skeleton">
    <div style="width: 60%"></div>
    <div style="width: 90%"></div>
    <div style="width: 70%"></div>
    <div style="width: 80%"></div>
  </div>
</div>
</template>

