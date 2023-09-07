<template>
  <div :class="$style.box">
    <!--  -->
    <ProjectBanner />

    <!-- кнопки -->
    <div :class="$style.center">
      <div :class="$style.buttons">
        <div
          v-for="button in buttons"
          :key="button.id"          
          :class="
            curretntIndex === button.id ? $style.button__active : $style.button
          "
          @click="CHECK_BUTTON_TAG(button.name), ACTIVE_BUTTON(button.id)"
        >
          {{ button.name }}

        </div>
      </div>
    </div>



    <!-- проекты -->
    <div :class="[$style.center, $style.projects]">
      <div v-for="project in selectedTag" :key="project.id">
        <div :class="$style.projects__sub_content">
          <img :src="project.img" alt="foto" />
          <p :class="$style.projects__sub_title">{{ project.title }}</p>
          <p :class="$style.projects__sub_section">{{ project.section }}</p>
        </div>
      </div>
    </div>
    <!--  -->

    <!--  -->
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import ProjectBanner from "../blocks/ProjectBanner.vue";

export default {
  components: { ProjectBanner },
  name: "BlogPage",

  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapMutations(["CHECK_BUTTON_TAG", "ACTIVE_BUTTON"]),
  },

  computed: {
    ...mapState(["projects", 'buttons', 'currentButtonTag', 'curretntIndex']),
    ...mapGetters(["selectedTag"]),
  },
};
</script>

<style lang="scss" module>
.center {
  padding-right: calc(50% - 600px);
  padding-left: calc(50% - 600px);
}
.box {
  margin-top: 45px;
  margin-bottom: 200px;
}

.buttons {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  gap: 10px;

  &__activ {
    background: #cda274;
  }
}

.button {
  display: flex;
  padding: 26px 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  border: 1px solid #cda274;
  background: white;
  //   background: #cda274;
  box-sizing: border-box;

  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;

  &__active {
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    border: 1px solid #cda274;

    background: #cda274;
    box-sizing: border-box;

    color: white;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
  }
}

.projects {
  margin-top: 61px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  &__sub {
    display: flex;
    flex-direction: column;

    &_content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
    }

    &_title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
    }
    &_section {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
}
</style>

<!-- проекты -->
<!-- внешняя обертка на 2 столбца -->
<!-- <div :class="[$style.center, $style.projects]"> -->
<!-- обертка для распределения статей внутри 1-ого столбца -->
<!-- <div :class="$style.projects__sub">
        <div v-for="(project, index) in projects" :key="project.id">
          <div v-if="!(index % 2)" :class="$style.projects__sub_content">
            <img :src="project.img" alt="foto" />
            <p :class="$style.projects__sub_title">{{ project.title }}</p>
            <p :class="$style.projects__sub_section">{{ project.section }}</p>
          </div>
        </div>
      </div> -->

<!-- обертка для распределения статей внутри 2-ого столбца -->
<!-- <div :class="$style.projects__sub">
        <div v-for="(project, index) in projects" :key="project.id">
          <div v-if="index % 2" :class="$style.projects__sub_content">
            <img :src="project.img" alt="foto" />
            <p :class="$style.projects__sub_title">{{ project.title }}</p>
            <p :class="$style.projects__sub_section">{{ project.section }}</p>
          </div>
        </div>
      </div>
    </div> -->

<!-- простая смена цвета у кнопки -->
<!-- <div :class="$style.buttons">
  <div
    v-for="(button, index) in buttons"
    :key="index"
    :class="
      curretntIndexTwo === index ? $style.button__active : $style.button
    "   
    @click="changeColor(index)"    
  >
    {{ button.name }}
  </div>
</div>

data:
curretntIndexTwo: null,

methids

changeColor(index) {
      this.curretntIndexTwo = index
    }, -->
