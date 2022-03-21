<template>
    <div class="my_card">
        <div class="content top">
            <h3>{{ type }}</h3>
            <p class="percent">
                <font-awesome-icon icon="fas fa-arrow-up" />&nbsp;&nbsp;{{ percent }}
            </p>
        </div>

        <div class="content footer">
            <span>
                <font-awesome-icon :icon="['fas ', icon]" />
            </span>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'CardsComponent',
        props: {
            type: String,
            percent: String,
            icon: String,
            qtd: String,
        }
}
</script>

<style lang="scss">
    @import '@/assets/scss/_main';

    .my_card {
        background-color: $purple-dark;
        border-radius: 7px;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 15px;

        .content {
            display: flex;
            justify-content: space-around;
        }

        .top {
            .percent {
                color: $lightgreen;
            }
        }

        .footer {
            span {
                font-size: 40px;
            }

            .qtd {
                font-size: 30px;
                margin: 0;
            }
        }
    }
</style>