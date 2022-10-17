<script setup lang="ts">
import { ref, onMounted } from "vue";
import request from "umi-request";
import config from "../../config";
import BangumiCard from "../components/BangumiCard.vue";
import HeaderTitle from "../components/HeaderTitle.vue";
import IconVideo from "../components/icons/IconVideo.vue";


const data = ref<any>();
const loading = ref<boolean>(true);
const error = ref<boolean>(false);

onMounted(() => {
    request(
        "/bili/x/space/bangumi/follow/list?type=1&pn=" +
        1 +
        "&ps=15&vmid=" +
        config.BilibiliUid,
        {
            headers: {
                referer: "https://www.bilibili.com/",
            },
        }
    )
        .then((res) => {
            data.value = res.data.list;
            data.value.forEach((e: { cover: string; }) => {
                e.cover = e.cover.replace("http", "https")
            });
            loading.value = false;
        })
        .catch((err) => {
            error.value = true;
            data.value = err;
            loading.value = false;
        });
})
</script>

<template>

    <div id="bangumi">
        <HeaderTitle>
            <h1><a :href="'https://space.bilibili.com/' + config.BilibiliUid" target="_blank"
                    rel="noopener noreferrer"><span>
                        <IconVideo />
                    </span></a> Bangumi</h1>
        </HeaderTitle>
        <div v-if="error">
            <p>{{ data }}</p>
        </div>
        <div v-else class="grid">
            <a v-for="v in data" :href="v.url" target="_blank" rel="noopener noreferrer">
                <BangumiCard :cover="v.cover" :title="v.title"></BangumiCard>
            </a>
            <BangumiCard v-if="loading" v-for="v in 3" :skeleton="true"></BangumiCard>
        </div>
    </div>

</template>
  
<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
}

a {
    color: #3d3d3d;

    &:hover {
        color: #3d3d3d;
    }
}

@media (max-width: 1024px) {
    .grid {
        grid-template-columns: 50% 50%;
    }
}
</style>
  