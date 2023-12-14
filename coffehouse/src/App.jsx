import Hero from "./components/Hero";
import HeroContainer from "./components/HeroContainer";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero>
        <HeroContainer className={`px-[16px] py-[80px]`} />
      </Hero>
    </div>
  );
}

export default App;
