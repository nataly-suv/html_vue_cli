<template>
  <button @click="activeButton(button), CHECK_BUTTON_TAG(button.name)">
    {{ button.name }}
  </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "ProjectButtons",
  props: ["button"],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    activeButton(button) {
      this.$emit("activeButtonEmit", button);
    },

    ...mapMutations(['CHECK_BUTTON_TAG'])


  },
};
</script>

<style lang="scss" module>

</style>
