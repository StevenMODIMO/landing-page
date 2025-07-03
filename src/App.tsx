import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
// import Cookies from "./components/Cookies";

export default function App() {
  return (
    <div>
      <div className="pt-[20px] px-24">
        <Navbar />
        <Hero />
        <Features />
        {/* <Cookies /> */}
      </div>
    </div>
  );
}
