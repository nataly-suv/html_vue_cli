<template>
  <div :class="[$style.center, $style.box]">
    <!--  -->
    <h1>Trying</h1>

    <!-- кнопки -->
    <div :class="$style.button_box">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        :class="$style.button"
        @click="checkButtonTag(button)"
      >
        {{ button.name }}
      </div>
    </div>

    <!-- проекты -->
    <div
      v-for="project in filterProject"
      :key="project.id"
      :class="$style.text"
    >
      {{ project }}
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "SomeTry",

  data() {
    return {
      currentButtonTag: "",
      buttons: [
        { id: 1, name: "Tag_1" },
        { id: 2, name: "Tag_2" },
        { id: 3, name: "Tag_3" },
      ],

      projects: [
        { id: 1, name: "кухня", tag: "Tag_1" },
        { id: 2, name: "спальня", tag: "Tag_2" },
        { id: 3, name: "ванна", tag: "Tag_3" },
        { id: 4, name: "кухня", tag: "Tag_1" },
        { id: 5, name: "спальня", tag: "Tag_2" },
        { id: 6, name: "ванна", tag: "Tag_3" },
      ],
    };
  },
  methods: {
    checkButtonTag(button) {
      this.currentButtonTag = button.name;
    },
  },

  computed: {
    filterProject() {
      if (this.currentButtonTag === "") {
        return this.projects;
      } else {
        return this.projects.filter(
          (project) => project.tag === this.currentButtonTag
        );
      }
    },
  },

  mounted() {},
};
</script>

<style lang="scss" module>
.center {
  padding-right: calc(50% - 600px);
  padding-left: calc(50% - 600px);
}

.box {
  margin-top: 200px;
  margin-bottom: 200px;
}

.button {
  width: 100px;
  padding: 26px 0;

  border-radius: 18px;
  border: 1px solid #cda274;
  background: white;
  box-sizing: border-box;

  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}
.button_box {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-top: 30px;
}

.text {
  font-size: 22px;
}
</style>
