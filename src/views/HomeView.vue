<script setup lang="ts">
import { ref, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import request from "umi-request";
import config from "../../config";
import IconBook from "../components/icons/IconBook.vue";
import IconGithub from "../components/icons/IconGithub.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";
import IconHome from "../components/icons/IconHome.vue";
import IconYoutube from "../components/icons/IconYoutube.vue";
import IconVideo from "../components/icons/IconVideo.vue";

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
    <header :class="config.Style.HeaderLayout">
      <img v-if="config.Avatar" class="avatar" :src="config.Avatar" alt="avatar" />
      <div :style="{ color: config.Style.HeaderFontColor }" class="info">
        <h1>{{ config.Name }}</h1>
        <p>{{ config.Desc }}</p>
        <div class="icons">
          <a v-if="config.BlogUrl" :href="config.BlogUrl" target="_blank" title="Blog">
            <IconBook></IconBook>
          </a>
          <a v-if="config.GithubUsername" :href="'https://github.com/' + config.GithubUsername" target="_blank"
            title="Github">
            <IconGithub></IconGithub>
          </a>
          <a v-if="config.YoutubeUrl" :href="config.YoutubeUrl" target="_blank" title="Youtube">
            <IconYoutube></IconYoutube>
          </a>
          <a v-if="config.TwitterUrl" :href="config.TwitterUrl" target="_blank" title="Twitter">
            <IconTwitter></IconTwitter>
          </a>
        </div>
      </div>
    </header>
    <div class="markdown" id="home" ref="data"></div>
    <div v-if="loading" class="skeleton">
      <div style="width: 60%"></div>
      <div style="width: 90%"></div>
      <div style="width: 70%"></div>
      <div style="width: 80%"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 63px;
  margin-top: 126px;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);

  .avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    margin-left: 28px;
    width: 310px;

    h1 {
      font-size: 36px;
      font-weight: normal;
    }

    p {
      font-size: 20px;
    }

    .icons svg {
      margin-right: 8px;
    }
  }

  &.ReverseSpace {
    justify-content: space-between;
    flex-direction: row-reverse;

    .info {
      margin-left: 0px;
    }
  }

  &.VCenter {
    flex-direction: column;
    text-align: center;
  }

  &.VCenter .info {
    margin-left: 0;
  }

  &.Left {
    justify-content: flex-start;
  }

}

@media (max-width: 1024px) {
  header {
    margin-bottom: 25px;
    flex-direction: column !important;
    text-align: center;

    .info {
      margin-left: 0;
    }
  }
}
</style>

