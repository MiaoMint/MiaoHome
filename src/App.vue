<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IconBook from "./components/icons/IconBook.vue";
import IconGithub from "./components/icons/IconGithub.vue";
import IconTwitter from "./components/icons/IconTwitter.vue";
import IconHome from "./components/icons/IconHome.vue";
import IconYoutube from "./components/icons/IconYoutube.vue";
import IconVideo from "./components/icons/IconVideo.vue";
import config from "../config";
</script>

<template>
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

  <div class="content-background" :style="{ 'background-color': config.Style.ContentBacgroundColor }">
    <div class="content">
      <nav>
        <RouterLink to="/">
          <div class="link">
            <IconHome> </IconHome>
            <span>Home</span>
          </div>
        </RouterLink>
        <RouterLink v-if="config.GithubUsername" to="/github">
          <div class="link">
            <IconGithub> </IconGithub>
            <span>GitHub</span>
          </div>
        </RouterLink>
        <RouterLink v-if="config.BlogRSS" to="/blog">
          <div class="link">
            <IconBook> </IconBook>
            <span>Blog</span>
          </div>
        </RouterLink>
        <RouterLink v-if="config.BilibiliUid" to="/bangumi">
          <div class="link">
            <IconVideo> </IconVideo>
            <span>Bangumi</span>
          </div>
        </RouterLink>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  height: 140px;
  width: 140px;
  object-fit: cover;
  border-radius: 50%;
}

header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 63px;
  margin-top: 126px;
}

.ReverseSpace {
  justify-content: space-around;
  flex-direction: row-reverse;
}

.VCenter {
  flex-direction: column;
  text-align: center;
}

.VCenter .info {
  margin-left: 0;
}

.Left {
  justify-content: flex-start;
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

nav {
  margin-right: 36px;

  .link {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    width: 110px;
    height: 114px;
    align-items: center;
    justify-content: center;
  }

  .link span {
    font-size: 22px;
    font-weight: normal;
    letter-spacing: 0em;
    color: #3d3d3d;
  }

  .link:hover {
    background: #e8e8e8;
  }

  .router-link-active .link {
    background: #e8e8e8;
  }

  .link svg {
    margin-bottom: 10px;
    width: 40px;
    height: 40px;
  }
}

.content {
  display: flex;
  flex-direction: row;
  padding: 20px;
}

.content-background {
  border-radius: 50px 50px 0 0;
  background-color: #fff;
  padding-top: 10px;
}

main {
  width: 100%;
}

@media (max-width: 1024px) {
  .content {
    flex-direction: column;
  }

  nav {
    overflow: auto;
    height: 134px;
    white-space: pre;
    margin-right: 0;
    scrollbar-width: none;
    /* Firefox */
    text-align: center;

    &::-webkit-scrollbar {
      display: none;
      /* Chrome Safari */
    }

    a {
      display: inline-block;
    }
  }

  header {
    margin-bottom: 25px;
    margin-top: 20px;
    flex-direction: column !important;
    text-align: center;

    .info {
      margin-left: 0;
    }
  }

}
</style>
