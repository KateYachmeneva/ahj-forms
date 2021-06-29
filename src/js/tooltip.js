export default class Tooltip {
  constructor(container) {
    this.button = container;
    if (!(container instanceof HTMLElement)) {
      throw new Error('передайте элемент HTML');
    }
    this.showTooltip = this.showTooltip.bind(this);
  }

  initTooltip() {
    this.drawTooltip();

    this.button.addEventListener('click', this.showTooltip);
  }

  drawTooltip() {
    this.toolContainer = document.createElement('div');
    this.toolContainer.classList.add('tool_container');
    const toolTitle = document.createElement('div');
    toolTitle.classList.add('tool_title');
    toolTitle.innerText = this.button.dataset.popoverTitle;
    const toolText = document.createElement('div');
    toolText.classList.add('tool_text');
    toolText.innerText = this.button.dataset.popoverContent;
    this.toolContainer.append(toolTitle, toolText);
  }

  showTooltip() {
    if (document.body.contains(this.toolContainer)) {
      this.toolContainer.remove();
      return;
    }
    this.button.after(this.toolContainer);
    const coords = this.button.getBoundingClientRect();
    this.toolContainer.style.left = `${window.scrollX + coords.left + this.button.offsetWidth / 2 - this.toolContainer.offsetWidth / 2}px`;
    this.toolContainer.style.top = `${window.scrollY + coords.top - this.toolContainer.offsetHeight - 5}px`;
  }
}
