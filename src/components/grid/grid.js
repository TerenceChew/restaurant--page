import gridItem from "../gridItem/gridItem";
import img1 from "./img-1.png";
import img2 from "./img-2.png";
import img3 from "./img-3.png";

export default function grid() {
  const grid = document.createElement("div");

  grid.append(
    gridItem(img1, "Serve your customers online", "Create an eye-catching menu and get ready to start taking online orders & reservations. "),
    gridItem(img2, "Stay on top of business", "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App."),
    gridItem(img3, "Encourage repeat orders ", "Leverage data to understand your customers and create personalized offers they can't refuse.")
    );

  grid.classList.add('grid', 'flex', 'center');

  return grid;
}