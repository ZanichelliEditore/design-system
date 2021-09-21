export function getCssColorVars() {
  const styleSheet = [...document.styleSheets].find((sheet) =>
    sheet.href?.includes("web-components-library")
  );

  const themeVariables = [...styleSheet.cssRules]
    .filter(
      (rule) =>
        // only take the declarations for :root and containing `--color`
        rule.selectorText === ":root" &&
        Object.values(rule.style).some((decl) => decl.startsWith("--color"))
    )
    .map((rule) => Object.values(rule.style))
    .flat()
    .filter((i) => i);
  // return removing duplicates
  return [...new Set(themeVariables)];
}
