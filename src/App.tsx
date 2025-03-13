import Section1 from "./components/section1";
import Header from "./components/header";
import Section2 from "./components/section2/section2";
// import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section7";
import Section8 from "./components/section8/section8";
import Footer from "./components/footer/footer";

function App() {
  // Create refs for scrolling to sections

  // const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="block">
        <Section1 />

        <Section2 />
        {/* <Section3 /> */}
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
