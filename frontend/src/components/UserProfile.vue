<template>
    <div class="user-container">
        <div><i class="fas fa-user"></i></div>
        <div class="user-description">
            <slot name="username"></slot>  <!-- 상위 컴포넌트에서 정의할 영역 -->
            <div class="time">
                <slot name="time"></slot>  <!-- 상위 컴포넌트에서 정의할 영역 -->
                <slot name="karma"></slot>  <!-- 상위 컴포넌트에서 정의할 영역 -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
    }
</script>

<style scoped>
    .user-container{
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user {
        font-size: 2.5rem;
        padding-right: 10px;
    }
    .user-container{
        padding-left: 8px;
    }
    .time {
        font-size: 0.7rem;
    }

</style>