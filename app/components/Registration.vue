
<template>
  <Page class="geristration-page">
    <ActionBar title="">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <GridLayout rows="1, auto, *, 0">
      <GridLayout row="2">
          <Carousel height="100%" width="100%" indicatorColor="#657dff" finite="true" ios:bounce="true" showIndicator="true" verticalAlignment="top" android:indicatorAnimation="swap" color="white">
            <CarouselItem id="slide1" verticalAlignment="middle">
              <StackLayout>
                <Label class="registration-page-title" text="Cryptourrencies are cure, digital assets" horizontalAlignment="center" textWrap="true"/>
                <Label class="registration-page-subtitle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" textWrap="true" horizontalAlignment="center"/>
                <Image width="80%" height="auto" src="~/assets/images/app-logo.png" stretch="aspectFit" horizontalAlignment="center"/>
                <Label class="registration-page-subtitle" text="Just scan the code to play." horizontalAlignment="center"/>
                <Button text="Got it"
                            class="geristration-page__button"
                            textAlignment="center"
                            />
              </StackLayout>
            </CarouselItem>
            <CarouselItem id="slide1" verticalAlignment="middle">
              <StackLayout>
                <Label class="registration-page-title" text="Cryptourrencies can be traded" horizontalAlignment="center" textWrap="true"/>
                <Label class="registration-page-subtitle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" textWrap="true" horizontalAlignment="center"/>
                <Image width="80%" height="auto" src="~/assets/images/app-logo.png" stretch="aspectFit" horizontalAlignment="center"/>
                <Label class="registration-page-subtitle" text="Just scan the code to play." horizontalAlignment="center"/>
                <Button text="Makes sence"
                            class="geristration-page__button"
                            textAlignment="center"
                            />
              </StackLayout>
            </CarouselItem>
            <CarouselItem id="slide1" verticalAlignment="middle">
              <StackLayout>
                <Label class="registration-page-title" text="You control your cryptourrencies" horizontalAlignment="center" textWrap="true"/>
                <Label class="registration-page-subtitle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" textWrap="true" horizontalAlignment="center"/>
                <Image width="80%" height="auto" src="~/assets/images/app-logo.png" stretch="aspectFit" horizontalAlignment="center"/>
                <Label class="registration-page-subtitle" text="Just scan the code to play." horizontalAlignment="center"/>
                <Button text="Create a new wallet"
                            class="geristration-page__button"
                            textAlignment="center"
                            @tap="onAskForRegistration"
                            />
              </StackLayout>
            </CarouselItem>
          </Carousel>
      </GridLayout>
    </GridLayout>

  </Page>
  </template>


<script>
import Seeds from './Seeds.vue';
export default {
  methods: {
    goBack() {
      this.$navigateBack();
    },

    onAskForRegistration() {
      confirm({
        title: "Would you like to protect this walletwith password?",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        okButtonText: "Yes",
        cancelButtonText: "No"
      }).then(answer => {
        if (answer) {
          this.$navigateTo(Seeds);
        } else {
            this.goBack();
        }
      });
    }
  }
    
}
</script>

<style>
    .geristration-page {
        background-color: #2c3134;
    }

    CarouselItem {
      background: #2c3134;
    }

    ActionBar {
      background: #2c3134;
    }

    .registration-page-title {
      padding: 0 10px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .registration-page-subtitle {
      margin-top: 20px;
      font-size: 12px;
      font-weight: 300;
      color: #949494;
    }

    .geristration-page__button {
      width: 270;
      height: 45;
      margin-bottom: 40;
      color: #fff;
      font-weight: bold;
      background-color: #657dff;
      border-radius: 10;
    }

    Dialog {
      background-color: #2c3134;
    }

</style>
