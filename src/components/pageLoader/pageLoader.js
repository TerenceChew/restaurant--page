export default function pageLoader(rootElement, hero, grid, section, footer) {
  rootElement.append(hero(), grid(), section(), footer());
}