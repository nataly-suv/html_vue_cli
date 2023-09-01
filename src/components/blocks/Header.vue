<template>
  <!-- 

         -->
  <header :class="[$style.header, $style.center]">
    <!-- левая часть  -->
    <div :class="$style.header__left">
      <img :class="$style.header__left_img" src="/img/header-logo.svg" alt="" />
      <p :class="$style.header__left_text">Interno</p>
    </div>
    <!-- правая часть -->
    <div :class="$style.header__right">
      <a href="#" :class="$style.header__right_text">Home</a>
      <a href="#" :class="$style.header__right_text">Project</a>
      <a href="#" :class="$style.header__right_text">Blog</a>
    </div>
  </header>

  <!-- 

         -->
</template>

<script>
export default {
  name: "HeaderComponent",

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

// HEADER
.header {
  margin-top: 61px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;

  //   левая часть Header
  &__left {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &__img {
      width: 34px;
      height: 34px;
    }

    &_text {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      color: rgba(41, 47, 54, 1);
    }
  }
  // правая часть Header
  &__right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 30px;

    &_text {
      color: #292f36;
      text-align: center;
      font-family: Jost;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }

    &_text:hover {
      color: rgba(205, 162, 116, 1);
    }
  }
} // header
</style>
