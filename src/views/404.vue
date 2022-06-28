<template>
    <TopHeader />
    <div class="content">Not Found</div>

</template>

<script>
import TopHeader from '@/components/TopHeader'

export default {
    name: 'page-not-found',
    components: { TopHeader }
}
</script>

<style scoped>
.content {
    text-align: center;
    font-size: 72px;
    padding-top: 100px;
}
</style>