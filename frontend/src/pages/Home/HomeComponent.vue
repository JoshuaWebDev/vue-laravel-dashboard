<template>
    <DashboardComponent>
        <div slot="slot-pages" class="content-pages">
            <header class="title_pages">
                <h1>Visão Geral</h1>
            </header>

            <div class="row">
                <div class="col-12 col-md-3">
                    <CardsComponent
                        :type="'Clientes'"
                        :percent="'7%'"
                        :icon="'fa-user-group'"
                        :qtd="'5000'"
                    />
                </div>

                <div class="col-12 col-md-3">
                    <CardsComponent
                        :type="'Produtos'"
                        :percent="'12%'"
                        :icon="'fa-box'"
                        :qtd="'350'"
                    />
                </div>

                <div class="col-12 col-md-3">
                    <CardsComponent
                        :type="'Serviços'"
                        :percent="'3%'"
                        :icon="'fa-sack-dollar'"
                        :qtd="'278'"
                    />
                </div>

                <div class="col-12 col-md-3">
                    <CardsComponent
                        :type="'Relatórios'"
                        :percent="'25%'"
                        :icon="'fa-chart-column'"
                        :qtd="'38'"
                    />
                </div>
            </div>
        </div>
    </DashboardComponent>
</template>

<script>
    import DashboardComponent from '../Dashboard/DashboardComponent'
    import CardsComponent from '../../components/CardsComponent'

export default {
    components: {
        DashboardComponent,
        CardsComponent
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />