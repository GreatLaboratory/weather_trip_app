<template>
    <div v-if="item">
        <section>
            <user-profile>
                <router-link  slot="username" :to="`/user/${item.user}`">{{ item.user }}</router-link>
                <div slot="time">{{ 'Posted ' + item.time_ago }}</div>
            </user-profile>
        </section>
        <section>
            <h2>{{ item.title }}</h2>
        </section>
        <section>
            <div v-html="item.content"></div>
        </section>
    </div>
    <p v-else>데이터 로딩 중....</p>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import UserProfile from "@/components/UserProfile";

    export default {
        name: "ItemView",
        components: {UserProfile},
        computed: {
            ...mapState([
                'item'
            ])
        },
        methods: {
            ...mapActions([
                'FETCH_ITEM'
            ])
        },
        created() {
            const itemId = this.$route.query.id;
            this.FETCH_ITEM(itemId)
        },

    }
</script>

<style scoped>

</style>