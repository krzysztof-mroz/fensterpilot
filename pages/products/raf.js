import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import rafImage from "../../public/raf1.jpg";
import rafImage2 from "../../public/raf2.jpg";
import rafImage3 from "../../public/raf3.jpg";
import rafImage4 from "../../public/raf_c80.jpg";
import rafImage5 from "../../public/raf_z90.jpg";
import rafImage6 from "../../public/raf_z90_2.jpg";
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";

function Raf() {

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
    <ProductLink linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SP" href="/products/sp" opis="Aluminium Lamellen, Unterputz Kasten" pic="/pics/producticons/vsr_sp.png"/>,
  ];

 

  return (
    <Fragment>
      <Head>
        <title>Fensterpilot Raffstore Beschattung</title>
        <meta
          name="description"
          content="Raffstoren C80 und Z90. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="raffstoren, raffstoren aus polen, selt, vorsatzrafftoren, aufsatzraffstoren"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Vorsatz Raffstoren C80 und Z90"/>
      <Rollovisualisation
        product="raf"
        camera="220,220,220"
        productName="Unterputz und Überputz Raffstoren"
      />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage}
            alt="Überputz Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage2}
            alt="Unterputz Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>


      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage3}
            alt="Unterputz Raffstore"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage4}
            alt="Überputz Raffstore C80"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </div>

      
      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={rafImage5}
            alt="Unterputz Raffstore Z90"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
        <Image
            src={rafImage6}
            alt="Unterputz Raffstore Z90 mit Dämmung"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
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

export default Raf;
