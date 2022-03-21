<template>
    <DashboardComponent>
        <div slot="slot-pages" class="content-pages">
            <header class="title_pages">
                <h1>Produtos</h1>
            </header>
        </div>
    </DashboardComponent>
</template>

<script>
    import DashboardComponent from '../Dashboard/DashboardComponent'

    export default {
        name: 'ProductsComponent',

        components: {
            DashboardComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped />