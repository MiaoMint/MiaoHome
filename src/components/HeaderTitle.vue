<template>
    <header>
        <slot></slot>
    </header>
</template>
<style scoped>
header {
    margin-left: 8px;
    margin-top: 150px;
}

@media (max-width: 1024px) {
    header{
        margin-top: 80px;
    }
}

</style>