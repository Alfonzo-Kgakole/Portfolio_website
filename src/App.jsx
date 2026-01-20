import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <section id="Homepage">Hero</section>
      <section id="About">about</section>
      <section>parallax</section>
      <section id="Services">services</section>
      <section id="Portfolio">portfolio</section>
      <section>portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">contact</section>
    </>
  );
};

export default App;
