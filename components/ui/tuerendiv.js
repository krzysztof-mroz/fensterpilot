import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";
import { useRouter } from "next/router";

function tuerendiv() {

  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: 1536 > window.innerWidth ? window.innerWidth : 1536,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  

  const router = useRouter();

  function gotoVeyna(e) {
    // router.push("./schuecopvc")
  }
  function gotoPerito(e) {}
  function gotoVeynaAlu(e) {}
  function gotoAluprof(e) {}

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">
      

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        onMouseDown={gotoVeyna}
      >
        <img src="./pics/icons/kunststoff_tuer.png"></img>
        <h5>Eingesetzte Türfüllungen</h5>
        <p className="gray f6">
          Kunststoff- und Aluminium Füllungen für Haustüren. Verschiedene Modelle und Farben.
        </p>
      </div>

      <div className="dn db-l w-100 w-30-l b--moon-gray ma2 pa3">
        <img src="./pics/icons/doorfeather.png"></img>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        
      >
        <img src="./pics/icons/alu_tuer.png"></img>
        <h5>Despiro Aluminium Türfüllungen</h5>
        <p className="gray f6">
         Flügelüberdeckende Aluminium Türfüllungen für Haustüren. Aluprof Despiro
        </p>
      </div>

      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        
      >
        <img src="./pics/icons/neben_tuer.png"></img>
        <h5>Kunststoff Nebeneingangstüren</h5>
        <p className="gray f6">
        Einfache und günstige Nebeneingangstüren, Kunststoff und Aluminium.
        </p>
      </div>
      <div
        className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"
        
      >
        <img src="./pics/icons/glas_tuer.png"></img>
        <h5>Glas Türfüllungen</h5>
        <p className="gray f6">
          Glas Türfüllungen für ein etwas anderes Design. 
        </p>
      </div>
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim">
        <img src="./pics/icons/musterecke.png"></img>
        <h5>Neueste Technologie</h5>
        <p className="gray f6">
          Flügelüberdeckende Technologie für beste Wärmedämmung und Design.
        </p>
      </div>
    
    </div>
  );
}

export default tuerendiv;
