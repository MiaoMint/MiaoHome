<script setup>
import { RouterLink, RouterView } from "vue-router";
import IconBook from "./components/icons/IconBook.vue";
import IconGithub from "./components/icons/IconGithub.vue";
import IconTwitter from "./components/icons/IconTwitter.vue";
import IconHome from "./components/icons/IconHome.vue";
import IconYoutube from "./components/icons/IconYoutube.vue";
</script>

<template>
  <header>
    <img
      class="avatar"
      src="https://q1.qlogo.cn/g?b=qq&k=G1ibIlnicR8Ij4CZO3BF6cVA&s=640"
      alt="avatar"
    />
    <div class="info">
      <h1>MiaoMint</h1>
      <p>👋 hi! 这里是MiaoMint的主页</p>
      <div class="icons">
        <a href="https://blog.ohman.top" target="_blank" title="Blog"><IconBook></IconBook></a>
        <a href="https://github.com/miaomint" target="_blank" title="Github"><IconGithub></IconGithub></a>
        <a href="https://www.youtube.com/channel/UCEDJlXVGVHClXL_ihWsAfKw" target="_blank" title="Youtube"><IconYoutube></IconYoutube></a>
        <!-- <a title="Twitter"><IconTwitter></IconTwitter></a> -->
      </div>
    </div>
  </header>
  <div class="content">
    <nav>
      <RouterLink to="/">
        <div class="link">
          <IconHome> </IconHome>
          <span>Home</span>
        </div>
      </RouterLink>
      <RouterLink to="/github">
        <div class="link">
          <IconGithub> </IconGithub>
          <span>GitHub</span>
        </div>
      </RouterLink>
      <RouterLink to="/blog">
        <div class="link">
          <IconBook> </IconBook>
          <span>Blog</span>
        </div>
      </RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
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
.info {
  margin-left: 28px;
}
.info h1 {
  font-size: 36px;
  font-weight: normal;
}
.info p {
  font-size: 20px;
}
.info .icons svg {
  margin-right: 8px;
}

nav {
  margin-right: 36px;
}

nav .link {
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

nav .link span {
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 0em;
  color: #3d3d3d;
}

nav .router-link-active .link {
  background: #e8e8e8;
}

nav .link svg {
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
}

.content {
  display: flex;
  flex-direction: row;
  padding: 20px;
}

main {
  background-color: #fff;
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
    scrollbar-width: none; /* Firefox */
    text-align: center;
  }
  nav::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  nav a {
    display: inline-block;
  }
  header {
    margin-bottom: 25px;
    margin-top: 30px;
    flex-direction: column;
    text-align: center;
  }
  header .info {
    margin-left: 0;
  }
}
</style>
