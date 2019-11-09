<template>
    <div class="detail-page">
        <form @submit.prevent="submit">
            <h2 class="form-heading">날씨 정보 입력하기</h2>
            <div class="form-content">
                <div class="form-row">
                    <label for="first-name" class="form-label">평균온도 : </label>
                    <input type="text" name="avgTemp" v-model="avgTemp" id="first-name" placeholder="ex) 25" class="form-textbox input-animate-target" required>
                    <div class="input-animate"></div>
                    <div class="form-check-icon"></div>
                </div>
                <div class="form-row">
                    <label for="last-name" class="form-label">최소온도 : </label>
                    <input type="text" name="minTemp" v-model="minTemp" id="last-name" placeholder="ex) 21" class="form-textbox input-animate-target" required>
                    <div class="input-animate"></div>
                    <div class="form-check-icon"></div>
                </div>
                <div class="form-row">
                    <label for="email-address" class="form-label">최고온도 : </label>
                    <input type="text" name="maxTemp" v-model="maxTemp" id="email-address" placeholder="ex) 28" class="form-textbox input-animate-target" required>
                    <div class="input-animate"></div>
                    <div class="form-check-icon"></div>
                </div>
                <div class="form-row">
                    <label for="email-address" class="form-label">강수량 : </label>
                    <input type="text" name="rainFall" v-model="rainFall" id="rainfall" placeholder="ex) 200" class="form-textbox input-animate-target" required>
                    <div class="input-animate"></div>
                    <div class="form-check-icon"></div>
                </div>
                <div>
                    <input type="submit" value="여행지 추천받기" class="form-submit">
                </div>
            </div>
        </form>
        <h2>추천 여행지의 예측 이용객 수 : {{ spot }}</h2>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "DetailPage",
        data(){
            return {
                avgTemp : "",
                minTemp : "",
                maxTemp : "",
                rainFall : "",
                spot : ""
            }
        },
        methods: {
            submit: function () {
                console.log('hihihi')
                axios.post('http://localhost:8008/detail/input', {
                    avgTemp: this.avgTemp,
                    minTemp: this.minTemp,
                    maxTemp: this.maxTemp,
                    rainFall: this.rainFall,
                })
                    .then((res) => {
                        this.spot = res.data.name;
                        console.log(res.data)
                    }, function() {
                        console.log('failed')
                    })
            }
        }
    }
</script>

<style scoped>
    /* form elements */
    form {
        padding: 1em;
        margin: 0;
        line-height: 1.5;
        background-color: white;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        color: #333;
    }
    label {
        display: inline-block;
        font-weight: 700;
    }
    select,
    textarea,
    input {
        width: 100%;
        padding: 0.5em;
        margin: 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: #333;
    }

    input[type="submit"] {
        cursor: pointer;
    }

    /* input border bottom animation on focus */
    .input-animate {
        position: relative;
        transition: color 200ms ease-in-out;
    }
    .input-animate:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        border-bottom: solid 3px;
        color: #42b883;
        transition: width 200ms ease-in-out;
    }

    .input-animate-target {
        border: none;
    }
    .input-animate-target:focus, .input-animate-target:valid {
        outline: none;
    }
    .input-animate-target:focus ~ .input-animate:before, .input-animate-target:valid ~ .input-animate:before {
        width: 100%;
    }

    /* font awesome */
    .fa {
        font-family: FontAwesome;
        font-style: normal;
    }

    /* flex */
    .flex-cont {
        display: flex;
        align-items: center;
        height: 100%;
    }

    /* form */
    .form-cont {
        max-width: 100%;
        padding: 2em;
        border-radius: 3px;
        margin: auto;
        background-color: #eee;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.5);
    }

    .form-heading {
        margin-top: 0;
        text-align: center;
    }

    .form-row {
        position: relative;
        margin-top: 1em;
    }

    .form-label {
        margin-bottom: 0.2em;
    }

    .form-textbox:valid ~ .form-check-icon:after {
        content: "\f00c";
        position: absolute;
        right: 0.5em;
        bottom: 0.4em;
        font-family: FontAwesome;
        font-style: normal;
        color: #42b883;
    }

    .form-submit {
        display: block;
        width: 75%;
        padding: 1em;
        border: none;
        margin: 2em auto 0;
        background-color: #42b883;
        font-weight: 700;
        color: white;
        transition: opacity 200ms ease-in-out;
    }
    .form-submit:hover, .form-submit:focus {
        opacity: 0.6;
    }

    @media only screen and (max-width: 768px) {
        html,
        body {
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 640px) {
        html,
        body {
            font-size: 16px;
        }
    }

    .detail-page {
        padding-top: 11px;
        padding-left: 67px;
        padding-right: 67px;
    }

</style>
