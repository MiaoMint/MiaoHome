<script setup lang="ts">

import { ref, onMounted } from "vue";
import { extractFromXml } from '@extractus/feed-extractor'
import request from "umi-request";
import config from "../../config";
import HeaderTitle from "../components/HeaderTitle.vue";
import IconBook from "../components/icons/IconBook.vue";

const data = ref<any>()
const loading = ref<boolean>(true);
const error = ref<boolean>(false);

onMounted(() => {
    request
        .get(config.BlogRSS)
        .then((res) => {
            data.value = (extractFromXml(res) as any).entries;
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
    <div id="blog">
        <HeaderTitle>
            <h1><a :href="config.BlogUrl" target="_blank" rel="noopener noreferrer"><span>
                        <IconBook />
                    </span></a> Blog</h1>
        </HeaderTitle>
        <div v-if="error">
            <p>{{ data }}</p>
        </div>
        <div v-else>
            <div v-for="v in data" class="m-1 mb-4">
                <a :href="v.link" target="_blank">
                    <h2>
                        {{ v.title }}
                    </h2>
                    <p>{{ v.description }}</p>
                    <p style="font-size: 14px">{{ v.published.substring(0,10) }}</p>
                </a>
            </div>
            <div v-if="loading" class="skeleton m-1">
                <div style="width: 60%"></div>
                <div style="width: 90%"></div>
                <div style="width: 70%"></div>
                <div style="width: 80%"></div>
            </div>
        </div>
    </div>
</template>
  
<style scoped lang="scss">
a:hover {
    text-decoration: underline;
}
h2, p{
    word-break: break-all;
}
</style>
  