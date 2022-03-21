<template>
    <div class="navbar">
        <div class="logo">
            <h3>
                <span>
                    <font-awesome-icon icon="fas fa-share-alt-square" />
                </span>
                &nbsp;&nbsp;SIG - Sistema Integrado de Gerenciamento
            </h3>
        </div>
        <a href="#" @click.prevent="logout" class="logout"><font-awesome-icon icon="fa-solid fa-sign-out" /> Sair</a>
    </div>
</template>

<script>
    export default {
        name: 'NavBarComponent',
        methods: {
            logout() {
                this.$router.push({name: 'login'})
            }
        }
    }
</script>

<style lang="scss">
    .navbar {
        .logo {
            color: #fff;

            span {
                font-size: 1.5em;
            }

            h3 {
                align-items: center;
                display: flex;
            }
        }

        .logout {
            color: #fff;
            text-decoration: none;
        }
    }
</style>