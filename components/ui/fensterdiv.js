import {useState, useEffect } from "react";
import Carousel from "./blocks/carousel";
import ProductLink from "./blocks/productlink";
import { useRouter } from 'next/router';



function fensterdiv() {

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

  function gotoSchuecoPvc(e) {
    router.push("./schuecopvc")
  }

  function gotoAluplast(e) {
    router.push("./aluplast")
  }

  function gotoSalamander(e) {
    router.push("./salamander")
  }

  function gotoGealan(e) {
    router.push("./gealan")
  }
  function gotoKoemmerling(e) {
    router.push("./koemmerling")
  }
  function gotoaliplast(e) {
    router.push("./aliplast")
  }
  function gotoAluprof(e) {
    router.push("./aluprof")
  }
  function gotoSchuecoAlu(e) {
    router.push("./schuecoalu")
  }

  return (
    <div className="flex flex-wrap justify-around  w-100  tc mb1 mt3 ">

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoAluplast}>
        <img src="./pics/icons/aluplastfeather.png"></img>
        <h5>Aluplast Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 6 Kammer Kunststoff Fenster für gute Wärmedämmung. Breite Produktpalette.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoSalamander}>
        <img src="./pics/icons/salamanderfeather.png"></img>
        <h5>Salamander Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 6 Kammer Kunststoff Fenster mit Vision, Innovation & Qualität.
        </p>
      </div>

      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim" onMouseDown={gotoGealan}>
        <img src="./pics/icons/gealanfeather.png"></img>
        <h5>Gealan Kunststoff Fenster</h5>
        <p className="gray f6">
          5 Kammer und 6 Kammer Kunststoff Fenster für jedes Budget. Auch für Passivhaus geeignet.
        </p>
      </div>

      
      
      <div className="dn db-l w-100 w-30-l b--moon-gray ma2 pa3"> 
      <img src="./pics/icons/childwindowfeather.png"></img>
      </div>
      
      
      <div className="w-100 w-30-l ba b--moon-gray ma2 pa3 dim"  onMouseDown={gotoAluprof}>
        <img src="./pics/icons/mb86feather.png"></img>
        <h5>Aluprof Aluminium Fenster</h5>
        <p className="gray f6">
          Aluminium Fenster mit geringer Profilhöhe und hoher Gestaltungsfreiheit. 
        </p>
      </div>
     
      
    </div>
  );
}

export default fensterdiv
