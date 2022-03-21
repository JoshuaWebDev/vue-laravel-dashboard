<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span><font-awesome-icon icon="fas fa-user" /></span>
            </div>

            <div class="info">
                <p class="name">John Doe</p>
                <p class="status">Online</p>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li>
                    <router-link :to="{name: 'home'}">
                        <font-awesome-icon icon="fas fa-home" />&nbsp;&nbsp;Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'products'}">
                        <font-awesome-icon icon="fas fa-box" />&nbsp;&nbsp;Produtos
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'sales'}">
                        <font-awesome-icon icon="fas fa-store" />&nbsp;&nbsp;Vendas
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'report'}">
                        <font-awesome-icon icon="fas fa-bar-chart" />&nbsp;&nbsp;Relatórios
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBarComponent',
    }
</script>

<style lang="scss">
.sidebar {
    .top {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 60px;
        padding: 25px 5px;
        width: 100%;

        .avatar {
            margin-right: 10px;

            span {
                align-items: center;
                background-color: rgba(7, 39, 109, 0.438);
                border-radius: 50px;
                color: #eee;
                display: flex;
                height: 75px;
                font-size: 36px;
                justify-content: center;
                width: 75px;
            }
        }

        .info {
            p {
                color: #eee;
                margin: 0;
            }

            .name {
                font-size: 16px;
            }

            .status {
                font-size: 12px;
            }
        }
    }

    .menu {
        margin-top: 15px;
        padding: 10px;

        ul li {
            font-size: 18px;
            font-weight: 400;
            margin: 15px 0;
            list-style-type: none;

            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
</style>