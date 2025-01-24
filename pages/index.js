import { Fragment } from "react";
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import image1 from "/public/mb86_db703_FP.png";
import image2 from "/public/fenster_aussen_anthr.jpg";
import Description from "../components/ui/description";
import HeaderDiv from "../components/ui/headerdiv";
import WarumDiv from "../components/ui/warumdiv";
import ActionDiv from "../components/ui/actiondiv";
import Visualisation from "../components/ui/visualisation";
import ProductLink from "../components/ui/blocks/productlink";
import Carousel from "../components/ui/blocks/carousel"
import CustomerReview from "../components/ui/referenz";
import Prodnavi from "../components/ui/prodnavi";



import "react-multi-carousel/lib/styles.css";




function StartPage() {

  const size = useWindowSize();

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
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




// components/WindowInfo.js
const WindowInfo = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-100 w-50-l pa2">
        <p className="lh-copy">
          Unsere <span className="b">Kunststoff- und Aluminiumfenster</span> zählen zu den gefragtesten auf dem Markt. Sie überzeugen durch exzellente <span className="b">Wärmedämmung</span>, erkennbar an niedrigen U-Werten, sowie durch ihre <span className="b">Langlebigkeit</span> und <span className="b">Wartungsfreiheit</span>. Bei uns finden Sie genau das, was Sie benötigen – ob Sie nun alte Fenster ersetzen oder ein Energiesparhaus errichten möchten. Mit unserer Unterstützung sichern Sie sich garantiert die <span className="b">KfW-Förderung</span>.
        </p>
        <p className="lh-copy">
          Zusätzlich zu Fenstern führen wir verschiedene <span className="b">Haustüren</span> aus Kunststoff und Aluminium. Wählen Sie aus <span className="b">Eingangstüren, Nebeneingangstüren</span>, Doppelflügeltüren, Haustüren mit Seitenteil, die nach innen oder außen öffnen, sowie Kellertüren oder Schiebetüren für die Terrasse. Unsere <span className="b">Hebeschiebe- und PSK-Türen</span>, inklusive Aufmaß und Montage vor Ort, werden Sie begeistern.
        </p>
      </div>
      <div className="w-100 w-50-l pa2">
        <p className="lh-copy">
          Unser Sortiment umfasst hochwertige <span className="b">Salamander</span>, <span className="b">Aluplast</span> und <span className="b">Gealan</span> in Kunststoffausführung sowie <span className="b">Aluprof, Aliplast </span> und <span className="b">Reynaers</span> in Aluminium. Auf wunsch gibte es bei uns auch die <span className="b">Holzfenster</span>. Ob bodentiefe Fenster, Fenster mit Sprossen, Kellerfenster oder Schiebefenster – bei uns werden Sie fündig. Wir bieten eine Vielzahl an Sichtschutzgläsern und Farboptionen, wie Anthrazit, DB 703, Mahagoni und viele mehr.
        </p>
        <p className="lh-copy">
          Entdecken Sie auch unsere günstigen <span className="b">Fenster aus Polen</span>. Informieren Sie sich über unsere Auswahl an Fenster- und Türgriffen, flachen Türschwellen, auch für Schiebetüren, sowie über <span className="b">einbruchsichere Fenster und Türen</span>. Wir übernehmen gerne den Einbau, das Abdichten und das Einstellen Ihrer Fenster. Begleiten Sie uns auf dieser wundervollen Reise durch die Welt der Fenster und Türen.
        </p>
      </div>
    </div>
  );
};



 
  return (


    <Fragment>
      <Head>
        <title>Salamander Aluplast Gealan Aluprof Fenster aus Polen kaufen, Kunststoff und Alu</title>
        <meta name='description'
              content='Erreichen Sie garantiert bis 70% bessere Wärmedämmung mit Salamander, Aluplast, und Aluprof Fenster / Türen aus Polen, mit Montage.'
        />
         
        <link rel="icon" href="/favicon.ico" />

       

      </Head>
      
      <HeaderDiv title="Kunststoff und Alu Fenster" subtitle="mit Aufmaß vor Ort und Montage" />
      {/* <Prodnavi /> */}
     
      
      <Visualisation profil = "Aluprof MB 86 SI" showProfiles = "yes" />    
  
  <Description />
 
  <WindowInfo />
  <CustomerReview />



  <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image1} alt="Aluminium Fenster Aluprof" />
        </div>
        <div className="w-100 w-40-l ma2 mt5-l">
          <Image src={image2} alt="Kunststoff Fenster anthrazitgrau" />
        </div>
      </div>

     
      
     <WarumDiv />
      <ActionDiv /> 
    </Fragment>
  );
}

export default StartPage;
