import NavBar from "./Header/NavBar";
import { Slider } from "./Header/Slider";

export function Header() {
  return (
    <header className="mx-auto">
      <NavBar />
      <Slider />
    </header>
  );
}
