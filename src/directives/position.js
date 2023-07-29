export default {
  created(el, binding) {
    const possiblePositions = ["relative", "fixed", "absolute"];

    if (possiblePositions.includes(binding.arg)) {
      el.style.position = binding.arg;
      el.style.top = `${binding.value}px`;
    }
  },
};
