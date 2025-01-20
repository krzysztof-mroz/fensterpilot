import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import spImage from "../../public/sp1.jpg";
import spImage2 from "../../public/sp2.jpg";
import spImage3 from "../../public/sp3.jpg";
import spImage4 from "../../public/sp4.jpg";
import HeaderDiv from "../../components/ui/headerdiv";
import Rollovisualisation from "../../components/ui/rollovisualisation";
import Carousel from "../../components/ui/blocks/carousel";
import ProductLink from "../../components/ui/blocks/productlink";

function Sp() {

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
    <ProductLink linktext="Vorsatz Rollläden SK" href="/products/sk" opis="Aluminium Lamellen, eckiger Kasten" pic="/pics/producticons/vsr_sk.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKP" href="/products/skp" opis="Aluminium Lamellen, viertelrunder Kasten" pic="/pics/producticons/vsr_skp.png"/>,
    <ProductLink linktext="Vorsatz Rollläden SKO" href="/products/sko" opis="Aluminium Lamellen, halbrunder Kasten" pic="/pics/producticons/vsr_sko.png"/>,
    <ProductLink linktext="Vorsatz Raffstoren" href="/products/raf" opis="C80 oder Z90, Unterputz, Überputz" pic="/pics/producticons/raf.png"/>,
    <ProductLink linktext="Aufsatz Rollläden" href="/products/ael" opis="Aluminium Lamellen, Motorsteuerung" pic="/pics/producticons/ael.png"/>,
  ];

 
  return (
    <Fragment>
      <Head>
        <title>Fensterpilot Unterputz Vorsatzrollladen SP</title>
        <meta
          name="description"
          content="Aluprof Unterputz Vorsatzrollladen SP. 3d Visualisierung"
        />
        <meta
          name="keywords"
          content="rollladen, vorsatzrollladen aus polen, aluprof, sp, unterputz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDiv title="Unterputz Vorsatzrollladen SP" />
      <Rollovisualisation
        product="sp"
        camera="220,220,220"
        productName="Unterputz Vorsatzrollladen Aluprof SP"
      />

      <div className="flex flex-wrap justify-around mb3 w-100 tc">
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={spImage}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={spImage2}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
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
            src={spImage3}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="w-100 w-50-l mt1 mt5-l pa3">
          <Image
            src={spImage4}
            alt="Unterputz Vorsatzrollladen Aluprof SP"
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

export default Sp;
