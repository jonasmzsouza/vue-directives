export default {
  created(el, binding) {
    //console.log(el, binding.arg, binding.modifiers, binding.value)
    let func = null;

    if (binding.arg == undefined || binding.arg === "simple") {
      func = function () {
        let informationSpan = document.createElement("span");
        informationSpan.style.position = "absolute";
        informationSpan.style.background = "#ddd";
        informationSpan.style.padding = "2px";
        informationSpan.innerText = binding.value;

        el.appendChild(informationSpan);

        informationSpan.addEventListener("click", (event) => {
          event.stopPropagation();
          informationSpan.remove();
        });

        if (binding.modifiers["autoExit"]) {
          setTimeout(() => {
            informationSpan.remove();
          }, 3000);
        }
      };
    }

    if (binding.arg === "highlighted") {
      func = function () {
        let informationDivContainer = document.createElement("div");
        let informationDiv = document.createElement("div");
        informationDiv.innerText = binding.value;

        informationDivContainer.style.with = "100%";
        informationDivContainer.style.height = "100%";
        informationDivContainer.style.display = "flex";
        informationDivContainer.style.flexDirection = "row";
        informationDivContainer.style.alignItems = "center";
        informationDivContainer.style.justifyContent = "center";
        informationDivContainer.style.background = "#ccc";
        informationDivContainer.style.position = "absolute";
        informationDivContainer.style.top = "0";
        informationDivContainer.style.zIndex = "10";

        informationDiv.style.padding = "30px";
        informationDiv.style.background = "#fba";

        informationDivContainer.appendChild(informationDiv);

        el.appendChild(informationDivContainer);

        informationDivContainer.addEventListener("click", (event) => {
          event.stopPropagation();
          informationDivContainer.remove();
        });

        if (binding.modifiers["autoExit"]) {
          setTimeout(() => {
            informationDivContainer.remove();
          }, 3000);
        }
      };
    }

    if (binding.modifiers["singleClickMouse"]) {
      el.addEventListener("click", func);
    }

    if (binding.modifiers["doubleClickMouse"]) {
      el.addEventListener("dblclick", func);
    }
  },
};
