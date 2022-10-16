<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IconBook from "./components/icons/IconBook.vue";
import IconGithub from "./components/icons/IconGithub.vue";
import IconTwitter from "./components/icons/IconTwitter.vue";
import IconHome from "./components/icons/IconHome.vue";
import IconYoutube from "./components/icons/IconYoutube.vue";
import IconVideo from "./components/icons/IconVideo.vue";
import config from "../config";

function scrollToTop() {
  window.scrollTo(0, 0)
}

</script>

<template>
  <div class="content">
    <main>
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
      <RouterView @vnode-updated="scrollToTop" />
    </main>
    <nav>
      <div class="links">
        <RouterLink to="/">
          <div class="link">
            <div class="icon">
              <IconHome> </IconHome>
            </div>
            <span>Home</span>
          </div>
        </RouterLink>
        <RouterLink v-if="config.GithubUsername" to="/github">
          <div class="link">
            <div class="icon">
              <IconGithub> </IconGithub>
            </div>
            <span>GitHub</span>
          </div>
        </RouterLink>
        <RouterLink v-if="config.BlogRSS" to="/blog">
          <div class="link">
            <div class="icon">
              <IconBook> </IconBook>
            </div>
            <span>Blog</span>
          </div>
        </RouterLink>
        <RouterLink v-if="config.BilibiliUid" to="/bangumi">
          <div class="link">
            <div class="icon">
              <IconVideo> </IconVideo>
            </div>
            <span>Bangumi</span>
          </div>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 63px;
  margin-top: 126px;

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
    justify-content: space-around;
    flex-direction: row-reverse;
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
</style>

<style scoped lang="scss">
nav {
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  .links {
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 10px 0px;
    border-radius: 30px;
    backdrop-filter: blur(24px);
    background-color: #e8e8e8c5;
    border: solid rgb(213, 213, 213) 1px;
    height: 90px;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 0px 10px;
    border-radius: 20px;
    width: 83px;
    height: 86px;

    .icon {
      height: 30rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .18s ease, width .24s ease;
    }

    &:hover {
      background: #f6f6f6;

    }

    span {
      overflow: hidden;
    }

  }

  .router-link-active .link {
    background: #f6f6f6;

    .icon {
      height: 40px;
    }
  }

}

main {
  padding: 16px;
  padding-bottom: 130px;
}


@media (max-width: 1024px) {

  header {
    margin-bottom: 25px;
    margin-top: 20px;
    flex-direction: column !important;
    text-align: center;

    .info {
      margin-left: 0;
    }
  }

  nav {
    bottom: 0;
    overflow: auto;
    white-space: pre;
    margin-right: 0;
    scrollbar-width: none;
    text-align: center;

    .links {

      border-radius: 0;
      width: 100%;
    }

    .link {
      margin: 0px;
    }
  }


}
</style>
