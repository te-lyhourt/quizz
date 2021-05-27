<template v-html="html">
    <div>
        <navbar style="background:black"></navbar>
        <sidebar></sidebar>
    </div>
</template>
<script>
import navbar from '@/components/navbar.vue'
import sidebar from './sidebar.vue'

export default {
    components:{
        navbar,
        sidebar,
    }
}
</script>
<style >
</style>