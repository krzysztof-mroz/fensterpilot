import { Fragment, useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image'
import aelImage from "../../public/ael3_big.jpg"
import aelImage2 from "../../public/ael1.jpg"
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";


function Ael() {
    
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

  const similar = [
    <ProductLink linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  ];

  
  
  return (


    <Fragment>
      <Head>
        <title>Fensterpilot Aufsatzrollladen</title>
        <meta name='description'
              content='Aluprof Opoterm Aufsatzrollladen. 3d Visualisierung'
        />
         <meta name='keywords'
              content='rollladen, aufsatzrolladen aus polen, aluprof, opoterm'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Aufsatzrollladen" />
      <Rollovisualisation product="ael" camera="220,220,220" productName="Aufsatzrollladen Aluprof SKT Opoterm"  />
   
      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
       
         
        <Image
        src={aelImage}
        alt="Aufsatzrollladen Opoterm"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        
        
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
        src={aelImage2}
        alt="Aufsatzrollladen Opoterm"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </div>

        <div className="w-100 w-60-l  b--moon-gray pa2 silver">
        
        </div>
      </div>

      <Carousel
        show={Math.floor((size.width - 50) / 186)}
        title="Ähnliche Produkte:"
      >
        {similar}
      </Carousel>

     
     
    </Fragment>
  );
}

export default Ael;
