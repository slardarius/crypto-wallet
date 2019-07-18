<template>
    <Page class="home-page" actionBarHidden="true">
        <GridLayout #background
                    scaleX="1.4"
                    scaleY="1.4"
                    class="background"
                    (loaded)="startBackgroundAnimation(background)">
    </GridLayout>
        <StackLayout>
            <StackLayout class="home-panel">
                <GridLayout rows="*" height="400px">
                    <RadPieChart allowAnimation="true" row="0">
                        <PieSeries v-tkPieSeries selectionMode="DataPoint"
                            expandRadius="0.4" outerRadiusFactor="0.7" :items="pieSource"
                            valueProperty="Amount" legendLabel="Brand" />
                    </RadPieChart>
                </GridLayout>
            </StackLayout>

            <StackLayout height="200px">
                    <ScrollView orientation="horizontal">
                        <Label v-for="(item, index) in pieSource" :text="item.Brand" textWrap="true" :key="index"/>
                    </ScrollView>
            </StackLayout>
        </StackLayout>
            
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadCartesianChart from "nativescript-ui-chart/vue";
    Vue.use(RadCartesianChart);
    export default {
        name: 'Home',
        data() {
            return {
                pieSource: [{
                        Brand: "Audi",
                        Amount: 10
                    },
                    {
                        Brand: "Mercedes",
                        Amount: 76
                    },
                    {
                        Brand: "Fiat",
                        Amount: 60
                    },
                    {
                        Brand: "BMW",
                        Amount: 24
                    },
                    {
                        Brand: "Crysler",
                        Amount: 40
                    }
                ]
            }
        }
    }
</script>

<style>
    .home-page {
        width: 100%;
        background-color: #2c3134;
    }

    .description-label {
        margin-bottom: 15;
    }

</style>