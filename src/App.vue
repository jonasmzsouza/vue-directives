<template>
  <div>
    <p>without the directive</p>
    <p
      v-customizeText="{ color: 'red', fontSize: '200%', totalCharacters: 15 }"
    >
      My first custom directive
    </p>
    <p v-customizeText="textSetting">Teste</p>
    <div
      v-position:absolute="75"
      v-customizeText="{ color: 'green', totalCharacters: 100 }"
    >
      Hello, I am an argument and value binding
    </div>
    <span>Code A: </span><input type="text" /><span
      v-information:simple.singleClickMouse.autoExit="
        'You will find code A on the front of the equipment.'
      "
    >
      i</span
    >
    <br />
    <span>Code B: </span><input type="text" /><span
      v-information:highlighted.doubleClickMouse.autoExit="
        'You will find the B code on the back of the device, under the protective cover.'
      "
    >
      i</span
    >
    <hr />
    <h1 v-color-background-customizeText="'green'">
      Custom directive registered locally (in component)
    </h1>
  </div>
</template>

<script>
import colorBackgroundText from "@/directives/colorBackgroundText";

export default {
  name: "App",
  directives: {
    colorBackgroundText: colorBackgroundText,
  },
  data: () => ({
    textSetting: {
      color: "blue",
      fontSize: "300%",
      totalCharacters: 4,
    },
  }),
};
</script>

<style></style>
