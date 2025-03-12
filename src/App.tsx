import { useRef, useState } from "react";
import Section1 from "./components/section1";
import Header from "./components/header";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";

function App() {
  const [count, setCount] = useState(0);

  // Create refs for scrolling to sections
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {/* Header */}
      <Header
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
      />

      {/* Main Content */}
      <main className="block">
        <Section1 />

        <Section2 />
        <Section3 />
        <Section4 />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center space-y-4">
        <div className="card">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            count is {count}
          </button>
          <p className="text-sm">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  );
}

export default App;
