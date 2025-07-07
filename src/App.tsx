import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cookies from "./components/Cookies";

export default function App() {
  return (
    <div>
      <div className="pt-[20px] px-24">
        <Navbar />
        <Hero />
        <Cookies />
      </div>
    </div>
  );
}
