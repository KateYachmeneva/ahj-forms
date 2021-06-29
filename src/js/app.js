import Tooltip from './tooltip';

const buttonEl = document.querySelector('.pop-button');
const tooltip = new Tooltip(buttonEl);

tooltip.initTooltip();
