<template>
  <!-- 

   -->
  <footer :class="[$style.footer, $style.center]">
    <!-- левая часть -->
    <div :class="$style.left">
      <div :class="$style.left__logo">
        <img
          :class="$style.left__logo_img"
          src="/img/header-logo.svg"
          alt="foto"
        />
        <p :class="$style.left__logo_textLogo">Interno</p>
      </div>

      <div :class="$style.left__text">
        It is a long established fact that a reader will be distracted lookings.
      </div>
      <div :class="$style.left__links">
        <a href="#"><img src="/img/footer-twit.svg" alt="" /></a>
        <a href="#"><img src="/img/footer-in.svg" alt="" /></a>
      </div>
    </div>

    <!-- центральная часть -->
    <div :class="$style.middle">
      <p :class="$style.middle__title">Pages</p>
      <a href="#" :class="$style.middle__text">Home</a>
      <a href="#" :class="$style.middle__text">Project</a>
      <a href="#" :class="$style.middle__text">Blog</a>
    </div>
    <!-- правая часть -->
    <div :class="$style.rigth">
      <p :class="$style.rigth__title">Contact</p>
      <p :class="$style.rigth__text">
        55 East Birchwood Ave. Brooklyn, New York 11201
      </p>
      <p :class="$style.rigth__text">contact@interno.com</p>
      <p :class="$style.rigth__text">(123) 456 - 7890</p>
    </div>
  </footer>
  <!-- 

    -->
</template>

<script>
export default {
  name: "FooterComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" module>
.center {
  padding-right: calc(50% - 600px);
  padding-left: calc(50% - 600px);
}

.footer {
  margin-top: 96px;
  margin-bottom: 134px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.left {
  // левая часть
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__logo {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    &_img {
      width: 34px;
      height: 34px;
    }

    &_textLogo {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      color: rgba(41, 47, 54, 1);
    }
  }

  &__text {
    max-width: 390px;
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__links {
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    gap: 54px;
  }
} // левая часть

.middle {
  //центральная часть
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
  }

  &__text:hover {
    color: rgba(205, 162, 116, 1);
  }
} //центральная часть

.rigth {
  //правая часть
  max-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
} //правая часть

//
//
</style>
