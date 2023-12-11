document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector("z-navigation-tabs");
  tabs?.addEventListener("selected", ({detail: selectedTab}) => {
    const controlledPanel = tabs.querySelectorAll('[role="tab"]')?.[selectedTab]?.getAttribute("aria-controls");
    const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
    panels.forEach((panel) => (panel.hidden = true));
    const panelToActivate = panels.find((panel) => panel.id === controlledPanel);
    if (panelToActivate) {
      panelToActivate.hidden = false;
    }
  });
});
