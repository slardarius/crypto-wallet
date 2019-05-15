<template>
    <Page class="seeds-page">
        <ActionBar title="">
            <NavigationButton android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>

        <GridLayout rows="100 * auto" class="page">

            <GridLayout row="0" class="dark" horizontalAlignment="center">
                <Label text="Please carefully write down this phrase."
                       fontSize="12" color="white" opacity="0.5">
                </Label>
            </GridLayout>

            <StackLayout verticalAlignment="top" row="1" class="dark">
                <FlexboxLayout justifyContent="center" flexWrap="wrap" padding="35"
                               style="word-break: break-word; font-size: 18;">
                    <Label v-for="(word, index) in arr_phrases"
                           :col="index" :text="word" style="padding: 5; color: white;"></Label>
                </FlexboxLayout>
            </StackLayout>

            <StackLayout verticalAlignment="bottom" row="2">
                <Label text="We will confirm on the next screen." class="small-text"></Label>
                <Button text="I have written it down">
                </Button>
            </StackLayout>

        </GridLayout>

        <!--<StackLayout class="seeds-page__container">-->
            <!--&lt;!&ndash;&ndash;&gt;-->
            <!--<StackLayout class="seeds-page__title">-->
                <!--<Label text="Please carefully write down this phrase"/>-->
            <!--</StackLayout>-->
            <!--&lt;!&ndash;&ndash;&gt;-->
            <!--<StackLayout>-->
                <!--<FlexboxLayout class="seeds-page__container-phrases" flexWrap="wrap" justifyContent="space-around">-->
                    <!--<StackLayout v-for="phrase in arr_phrases" class="seeds-page__phrases-stack" width="70" height="20px">-->
                        <!--<Label :text="phrase" class="seeds-page__phrases-text"/>-->

                    <!--</StackLayout>-->
                <!--</FlexboxLayout>-->
            <!--</StackLayout>-->
            <!--&lt;!&ndash;&ndash;&gt;-->
            <!--<StackLayout>-->
                <!--<Label v-for="phrase in arr_phrases" :text="phrase" class="seeds-page__phrases-text"/>-->
            <!--</StackLayout>-->
            <!--&lt;!&ndash;&ndash;&gt;-->
        <!--</StackLayout>-->

    </Page>
</template>

<script>
    export default {
        name: "Seeds",
        data() {
            return {
                arr_phrases: ['adapt', 'captain', 'clinic', 'flat', 'that', 'flush', 'stuff', 'bird', 'lion', 'adaptive']
            }
        },
        methods: {
            goBack() {
                //
                this.$navigateBack();
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background: #2c3134;
    }

    .seeds-page {
        background-color: #2c3134;
    }

    .seeds-page__container {
        background-color: red;
    }

    .seeds-page__title {
        font-size: 12px;
        font-weight: 300;
        color: #949494;
        height: 150;
    }

    .seeds-page__container-phrases {
        width: 300;
        height: 300;
        background-color: yellowgreen;
    }

    .seeds-page__phrases-stack {
        padding: 10;
        background-color: aqua;
    }

    .seeds-page__phrases-text {
        font-size: 18px;
        font-weight: 300;
        color: #949494;
    }
</style>