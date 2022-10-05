import pageLoader from "./components/pageLoader/pageLoader";
import hero from "./components/hero/hero";
import grid from "./components/grid/grid";
import section from "./components/section/section";
import footer from "./components/footer/footer";
import './style.css';

const root = document.querySelector('#content');

pageLoader(root, hero, grid, section, footer);