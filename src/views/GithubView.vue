<script setup lang="ts">
import { ref, onMounted } from "vue";
import GithubCard from "../components/GithubCard.vue";
import request from "umi-request";
import config from "../../config";

const data = ref<any>()
const error = ref<boolean>(false)
const loading = ref<boolean>(true)

onMounted(() => {
    request
        .get(
            "https://api.github.com/users/" + config.GithubUsername + "/repos?sort=pushed"
        )
        .then((res) => {
            data.value = res;
            loading.value = false;
        })
        .catch((err) => {
            error.value = true;
            data.value = err;
            console.log(err);
            loading.value = false;
        });
})

</script>

<template>
    <div v-if="error">
        <p>{{ data }}</p>
    </div>
    <div v-else class="grid">
        <div v-for="v in data" class="m-1">
            <a :href="v.html_url" target="_blank">
                <GithubCard :tags="v.topics" :repo="v.name" :desc="v.description" :starNum="v.stargazers_count"
                    :forkNum="v.forks_count" :forked="v.fork" :archived="v.archived"></GithubCard>
            </a>
        </div>
        <div v-if="loading" v-for="v in 3" class="m-1">
            <GithubCard :skeleton="true"></GithubCard>
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
        grid-template-columns: 100%;
    }
}
</style>
