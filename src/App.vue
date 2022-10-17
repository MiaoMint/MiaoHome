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
  window.scrollTo(0, 0);
}

</script>

<template>
  <div class="content">
    <main>
      <RouterView @vnode-updated="scrollToTop" v-slot="{ Component }">
        <transition name="slide-fade">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </transition>
      </RouterView>
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
    padding: 8px 2px;
    border-radius: 30px;
    backdrop-filter: blur(24px);
    background-color: #e8e8e8c5;
    border: solid rgb(213, 213, 213) 1px;
    box-shadow: 3px 3px 4px 0px rgb(145 145 145 / 15%);
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 0px 8px;
    border-radius: 20px;
    width: 75px;
    height: 75px;

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
      font-size: 14px;
    }

  }

  .router-link-active .link {
    background: #f6f6f6;

    .icon {
      height: 40px;
    }
  }

}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

main {
  padding: 16px;
  padding-bottom: 130px;
}


@media (max-width: 1024px) {

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
