document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("z-navigation-tabs")?.addEventListener("selected", (event) => {
    const controlledPanel = event.target.closest("[aria-controls]")?.ariaControls;
    const panels = Array.from(document.querySelectorAll("[role=tabpanel]"));
    panels.forEach((panel) => (panel.hidden = true));
    const panelToActivate = panels.find((panel) => panel.id === controlledPanel);
    if (panelToActivate) {
      panelToActivate.hidden = false;
    }
  });
});
