export default {
  created(el, binding) {
    //ccalled before element attributes or event listeners are applied

    if (binding.value?.color) el.style.color = binding.value.color;
    if (binding.value?.fontSize) el.style.fontSize = binding.value.fontSize;

    let totalCharacters = 25;
    if (binding.value?.totalCharacters)
      totalCharacters = binding.value.totalCharacters;

    let originalText = el.innerText;
    let originalTextSize = originalText.length;
    let adjustedText = "";

    if (originalTextSize > totalCharacters) {
      //truncate the text into totalCharacters characters and add '...'
      adjustedText = originalText.substring(0, totalCharacters - 3) + "...";
    } else {
      //keep original text
      adjustedText = originalText;
    }

    el.innerText = adjustedText;
  },
};
