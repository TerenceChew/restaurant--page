export default function section() {
  const section = document.createElement('section');
  const title = document.createElement('h1');
  const titleSpan = document.createElement('span');
  const div = document.createElement('div');
  const subTitle = document.createElement('p');
  const button = document.createElement('button');

  titleSpan.innerText = 'WiXX';
  subTitle.innerText = 'Feed Your Business';
  button.innerText = 'Start Now'

  title.classList.add('flex', 'center');
  section.classList.add('section', 'flex-column', 'center');

  title.append(titleSpan, 'Restaurants');
  section.append(title, div, subTitle, button);

  return section;
}