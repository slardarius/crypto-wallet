<template>
    <Page class="seeds-page">
        <ActionBar title="">
            <NavigationButton android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>

        <GridLayout rows="150, * auto" class="page" v-if="!is_show_control">

            <GridLayout row="0" class="dark" horizontalAlignment="center">
                <Label text="Please carefully write down this phrase."
                       fontSize="12" color="white" opacity="0.5">
                </Label>
            </GridLayout>

            <StackLayout verticalAlignment="top" row="1" class="seeds-page__phrases-container">
                <FlexboxLayout justifyContent="center" flexWrap="wrap" padding="35"
                               style="word-break: break-word; font-size: 18;" class="seeds-page__phrases">
                    <Label v-for="(word, index) in arr_phrases"
                           :col="index" :text="word.title" style="padding: 5; color: white;"></Label>
                </FlexboxLayout>
            </StackLayout>

            <StackLayout verticalAlignment="bottom" row="2">
                <Label horizontalAlignment="center" text="We will confirm on the next screen." textAlign="center" class="seeds-page__sub-title"></Label>
                <Button text="I have written it down" class="seeds-page__button" @tap="onShowSelectedPhrases">
                </Button>
            </StackLayout>

        </GridLayout>

        <GridLayout rows="100, * auto" v-if="is_show_control">

            <GridLayout row="0" class="dark" horizontalAlignment="center">
                <Label text="Please carefully write down this phrase."
                       fontSize="12" color="white" opacity="0.5">
                </Label>
            </GridLayout>


            <StackLayout verticalAlignment="top" row="1" class="seeds-page__phrases-container" v-if="is_show_control">
                <FlexboxLayout justifyContent="center" flexWrap="wrap" padding="35"
                               style="word-break: break-word; font-size: 18;" class="seeds-page__phrases">
                    <Label v-for="(word, index) in arr_phrases_selected"
                           :col="index" :text="word" style="padding: 5; color: white;"></Label>
                </FlexboxLayout>
            </StackLayout>

            <StackLayout verticalAlignment="top" row="2" class="seeds-page__phrases-container" v-if="is_show_control && !is_save_phrases">
                <FlexboxLayout justifyContent="center" flexWrap="wrap"
                               style="word-break: break-word; font-size: 18;" class="seeds-page__phrases seeds-page__phrases-disable-border">
                    <Button v-for="(word, index) in arr_phrases"
                            :text="word.title" :isEnabled="word.disable" class="seeds-page__button--mini" @tap="onSelectedPhrases(word, index)">
                    </Button>
                </FlexboxLayout>
            </StackLayout>

            <StackLayout verticalAlignment="bottom" row="2" v-if="is_save_phrases">
                <Label horizontalAlignment="center" text="This is correct?" textAlign="center" class="seeds-page__sub-title"> </Label>
                <Button text="Confirm" class="seeds-page__button" @tap="onStartRegistrationSeed"></Button>
                <Button text="Clear" class="seeds-page__button seeds-page__button--clear" @tap="onClear"></Button>
            </StackLayout>
        </GridLayout>

    </Page>
</template>

<script>
    import store_wallet from '../store/store-wallet';
    export default {
        name: "Seeds",
        data() {
            return {
                arr_phrases: [
                    {
                        disable: true,
                        title: 'adapt',
                    },{
                        disable: true,
                        title: 'captain',
                    },{
                        disable: true,
                        title: 'clinic',
                    },{
                        disable: true,
                        title: 'flat',
                    },{
                        disable: true,
                        title: 'that',
                    },{
                        disable: true,
                        title: 'flush',
                    },{
                        disable: true,
                        title: 'stuff',
                    },{
                        disable: true,
                        title: 'bird',
                    },{
                        disable: true,
                        title: 'lion',
                    },{
                        disable: true,
                        title: 'adaptive',
                    },{
                        disable: true,
                        title: 'week',
                    },{
                        disable: true,
                        title: 'shose',
                    },{
                        disable: true,
                        title: 'lorem',
                    },{
                        disable: true,
                        title: 'inputs',
                    },{
                        disable: true,
                        title: 'trade',
                    },
                ],
                is_show_control: false,
                is_save_phrases: false,
                arr_phrases_selected: [],
            }
        },
        methods: {
            goBack() {
                this.$navigateBack();
            },

            onClear() {
              this.arr_phrases_selected = [];
              this.arr_phrases.forEach( x=> x.disable = true );
              this.is_save_phrases = false;
            },

            onShowSelectedPhrases() {
              this.is_show_control = !this.is_show_control;
            },

            onSelectedPhrases(word, index) {
                console.log(this.arr_phrases_selected.length);
                if (this.arr_phrases_selected.length <= 11) {
                    this.arr_phrases[index].disable = false;
                    this.arr_phrases_selected.push(word.title);
                } else {
                    this.is_save_phrases = true;
                }
            },

            onStartRegistrationSeed() {
                store_wallet.dispatch('createWallet', this.arr_phrases_selected);
                console.log('start');
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

    .seeds-page__phrases-container {
        padding: 30 15;
    }
    
    .seeds-page__phrases {
        background-color: #313639;
        border-style: dot-dash;
        border-width: 2;
        border-color: #666;
    }

    .seeds-page__phrases-disable-border {
        border-width: 0;
        background: #2c3134;
    }

    .seeds-page__sub-title {
        font-size: 12;
        color: #fff;
        opacity: 0.5;
        margin-bottom: 20;
    }

    .seeds-page__button {
        width: 270;
        height: 45;
        margin-bottom: 40;
        color: #fff;
        font-weight: bold;
        background-color: #657dff;
        border-radius: 10;
    }

    .seeds-page__button--clear {
        background-color: #2c3134;
        border-width: 1;
        border-color: #666;
    }

    .seeds-page__button--mini {
        padding: 10;
        margin: 0 10 10 0;
        font-size: 12;
        font-weight: 300;
        color: #fff;
        background-color: #657dff;
    }

    .seeds-page__button--mini:disabled {
        background-color: #3c4871;
        color: #616671;
    }
</style>