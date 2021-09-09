export function getCssColorVars() {
  for (var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if (sheet.href && sheet.href.includes("web-components-library.css")) {
      const cssVarsSet = [];
      sheet.cssRules.forEach((rule) => {
        if (rule.cssText.includes("--color")) {
          const cssVars = Object.values(rule.style).filter((value) =>
            value.includes("--")
          );
          cssVarsSet.push(...cssVars);
        }
      });
      return [...new Set(cssVarsSet)];
    }
  }
}

export function createColorListItem(color) {
  const li = document.createElement("li");
  const code = document.createElement("code");
  code.innerText = color;
  const span = document.createElement("span");
  span.style.backgroundColor = `var(${color})`;
  li.appendChild(code);
  li.appendChild(span);
  return li;
}
