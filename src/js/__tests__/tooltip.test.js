import Tooltip from '../tooltip';

test('should create correct instance of tooltip', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="pop_button" data-popover-title="Test title" data-popover-content="Text Result">Click me!</button>';
  document.body.appendChild(HTML);
  const toolButton = new Tooltip(document.querySelector('.pop_button'));
  toolButton.initTooltip();
  const title = toolButton.toolContainer.querySelector('.tool_title');
  const text = toolButton.toolContainer.querySelector('.tool_text');

  expect(title.innerText).toBe('Test title');
  expect(text.innerText).toBe('Text Result');
});

test('should show popup', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="pop_button" data-popover-title="Test title" data-popover-content="Text Result">Click me!</button>';
  document.body.appendChild(HTML);
  const toolButton = new Tooltip(document.querySelector('.pop_button'));
  toolButton.initTooltip();
  const button = document.querySelector('button.pop_button');
  button.click();

  const title = document.querySelector('.tool_title');
  const text = document.querySelector('.tool_text');
  expect(title.innerText).toBe('Test title');
  expect(text.innerText).toBe('Text Result');
});

test('close popup', () => {
  const HTML = document.createElement('div');
  HTML.innerHTML = '<button class="pop_button" data-popover-title="Test title" data-popover-content="Text Result">Click me!</button>';
  document.body.appendChild(HTML);
  const toolButton = new Tooltip(document.querySelector('.pop_button'));
  toolButton.initTooltip();
  const button = document.querySelector('button.pop_button');
  button.click();
  expect(document.contains(toolButton.toolContainer)).toBeTruthy();
  button.click();
  expect(document.contains(toolButton.toolContainer)).toBeFalsy();
});
