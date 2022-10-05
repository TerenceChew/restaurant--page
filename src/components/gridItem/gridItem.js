import arrow from './arrow-right-thin.svg';

export default function gridItem(inputImg, inputTitle, inputSubTitle) {
  const item = document.createElement('div');
  const img = new Image();
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const subTitle = document.createElement('p');
  const buttonContainer = document.createElement('div');
  const button = document.createElement('button');
  const arrowIcon = document.createElement('img');

  img.src = inputImg;
  title.innerText = inputTitle;
  subTitle.innerText = inputSubTitle;
  button.innerText = 'Start Now';
  arrowIcon.src = arrow;
  button.tabIndex = '-1';
  buttonContainer.tabIndex = '0';

  buttonContainer.classList.add('btn-container', 'flex', 'center');
  container.classList.add('grid-item-container', 'flex-column');
  item.classList.add('grid-item', 'flex-column', 'center');

  buttonContainer.append(button, arrowIcon);
  container.append(title, subTitle, buttonContainer);
  item.append(img, container);
  
  return item;
}