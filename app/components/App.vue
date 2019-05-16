<template>
    <Page class="preview-page" actionBarHidden="true">
        <GridLayout rows="350, * ">
            <FlexboxLayout
                        row="0"
                        flexDirection="column"
                        class="preview-page__container-image"
                        verticalAlignment="bottom"
                        horizontalAlignment="center"
                        alignItems="center"
                        >
                <Image src="~/assets/images/app-logo.png" stretch="none" loadMode="async" class="preview-page__image"/>
                <Label class="preview-page__text" text="Take control of your money," width="300"/>
                <Label class="preview-page__text" text="get started with ryptocurrencies." width="300"/>
            </FlexboxLayout>
            <FlexboxLayout
                        row="1"
                        flexDirection="column"
                        verticalAlignment="bottom"
                        horizontalAlignment="center">
                    <Button text="Get started"
                            class="preview-page__button"
                            textAlignment="center"
                            @tap="onRouteToRegistration"
                            />
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script >
import Registration from './Registration.vue';
import Seeds from './Seeds.vue';
  export default {
    components: { Registration, Seeds },
    data() {
      return {}
    },
    methods: {
        onRouteToRegistration() {
            this.$navigateTo(Registration);
        },
    },
    mounted() {
        setTimeout(() => {
           this.$navigateTo(Seeds);
        }, 300);

    }
  }
</script>
<style>
    .preview-page {
        width: 100%;
        background-color: #2c3134;
    }

    .preview-page__container-image {
        width: 100%;
    }

    .preview-page__text {
        text-align: center;
        font-size: 18px;
        color: #fff;
    }

    .preview-page__button {
        width: 270;
        height: 45;
        margin-bottom: 40;
        color: #fff;
        font-weight: bold;
        background-color: #657dff;
        border-radius: 10;
    }
</style>
