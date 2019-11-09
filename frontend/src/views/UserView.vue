<template>
    <div>
        <user-profile>
            <div slot="username">{{ user.id}}</div>
            <span slot="time">{{ 'Joined ' + user.created}}, </span>
            <span slot="karma">Karma : {{ user.karma}}</span>
        </user-profile>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import UserProfile from "@/components/UserProfile";
    export default {
        name: "UserView",
        components: {UserProfile},
        methods: {
            ...mapActions([
                'FETCH_USER'
            ])
        },
        computed: {
            ...mapState([
                'user'
            ])
        },
        created() {
            const userName = this.$route.params.id;
            this.FETCH_USER(userName)
        },
    }
</script>

<style scoped>

</style>