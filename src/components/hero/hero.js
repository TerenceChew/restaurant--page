import exampleWebsite from './example-website.png';

export default function hero() {
  const hero = document.createElement('div');
  const header = document.createElement('div');
  const heading = document.createElement('h1');
  const headingSpan = document.createElement('span');
  const button1 = document.createElement('button');
  const heroText = document.createElement('h1');
  const subHeroText = document.createElement('p');
  const button2 = document.createElement('button');
  const img = document.createElement('img');

  headingSpan.innerText = 'WiXX';
  button1.innerText = 'Start Now';
  heroText.innerText = 'Take your restaurant online today';
  subHeroText.innerText = 'Grow your business with a commission-free ordering solution';
  button2.innerText = 'Start Now';
  img.src = exampleWebsite;

  heading.classList.add('flex', 'center');
  header.classList.add('header', 'flex');
  hero.classList.add('hero', 'flex-column', 'center');

  heading.append(headingSpan, ' Restaurants');
  header.append(heading, button1);
  hero.append(header, heroText, subHeroText, button2, img);

  return hero;
}


// https://www.wix.com/html5en/restaurant-website?utm_source=google&gclid=Cj0KCQjwkOqZBhDNARIsAACsbfKe4WBbePihchAokGp52tiXowBQMm9rz7wMR2B6FICz0ElonrjfxQwaAvkdEALw_wcB&utm_campaign=600218046%5E132890469062&experiment_id=restaurant+websites%5Ee%5E592939279659%5E&utm_medium=cpc