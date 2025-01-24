import Link from "next/link";

function footer() {
    return (

        <div className="flex flex-wrap justify-center  w-100 pa2 tc  ">
         
          <div className="w-100 ba b--moon-gray pa2">
          <img
              className="mh4 mb4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_aluplast.png"
            ></img>
            <img
              className="mh4 mb4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_salamander.png"
            ></img>
             <img
              className="mh4 mb4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_gealan.png"
            ></img>
        
            <img
              className="mh4 mv4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_aluprof.png"
            ></img>
             <img
              className="mh4 mv4 mv1-l ph3 db dib-l center"
              src="/pics/logos/logo_aliplast.png"
            ></img>
           
           
            
          </div>

          <div className="w-100 w-30-l  ma2 pa3">
            <h5 className="gray">Fenster und Hebe Schiebe</h5>
            <p className="gray f6">
              <Link href="/fenster">
                <a className="f6 fw4 no-underline db   ph3">Fenster</a>
              </Link>

              <Link href="/salamander">
                <a className="f6 fw4 no-underline db   ph3">Salamander Kunststoff Fenster</a>
              </Link>

              <Link href="/aluplast">
                <a className="f6 fw4 no-underline db   ph3">Aluplast Kunststoff Fenster</a>
              </Link>

              <Link href="/gealan">
                <a className="f6 fw4 no-underline db   ph3">Gealan Kunststoff Fenster</a>
              </Link>

            
              <Link href="/aluprof">
                <a className="f6 fw4 no-underline db   ph3">Aluprof Aluminium Fenster</a>
              </Link>
             
              <Link href="/products/mb70">
                <a className="f6 fw4 no-underline  db  ph3">Aluprof MB 70 HI</a>
              </Link>
              <Link href="/products/mb86">
                <a className="f6 fw4 no-underline  db  ph3">Aluprof MB 86 SI</a>
              </Link>
             

            </p>
          </div>

          <div className="w-100 w-30-l  ma2 pa3">
            <h5 className="gray">Türen und Beschattung</h5>
            <p className="gray f6">


            <Link href="/tueren">
                <a className="f6 fw4 no-underline  db  ph3">Haustüren</a>
              </Link>
             
              <Link href="/products/ael">
                <a className="f6 fw4 no-underline  db  ph3">Aufsatzrollladen Aluprof</a>
              </Link>
              <Link href="/products/sk">
                <a className="f6 fw4 no-underline  db  ph3">Vorsatzrollladen eckig SK</a>     
              </Link>
              <Link href="/products/sko">
                <a className="f6 fw4 no-underline  db  ph3">Vorsatzrollladen halbrund SKO</a>     
              </Link>
              <Link href="/products/skp">
                <a className="f6 fw4 no-underline  db  ph3">Vorsatzrollladen viertelrund SKP</a>     
              </Link>
              <Link href="/products/sp">
                <a className="f6 fw4 no-underline  db  ph3">Vorsatzrollladen unterputz SP</a>     
              </Link>
              <Link href="/products/raf">
                <a className="f6 fw4 no-underline  db  ph3">Vorsatzraffstoren</a>     
              </Link>
              
              <Link href="/beschattung">
                <a className="f6 fw4 no-underline  db  ph3">Beschattung</a>
              </Link>

              <Link href="/rolllaeden">
                <a className="f6 fw4 no-underline  db  ph3">Rollläden</a>
              </Link>
              <Link href="/raffstoren">
                <a className="f6 fw4 no-underline  db  ph3">Raffstoren</a>
              </Link>
              <Link href="/screenrolls">
                <a className="f6 fw4 no-underline  db  ph3">Screen Rolls</a>
              </Link>



              
            </p>
          </div>


          <div className="w-100 w-30-l  ma2 pa3">
            <h5 className="gray">Sonstiges</h5>
            <p className="gray f6">
              <Link href="/aufmass">
                <a className="f6 fw4 no-underline db   ph3">Aufmaß</a>
              </Link>
              <Link href="/howworking">
                <a className="f6 fw4 no-underline db   ph3">
                  Wie funktioniert es?
                </a>
              </Link>
              <Link href="/aboutus">
                <a className="f6 fw4 no-underline  db  ph3">Über uns</a>
              </Link>
              <Link href="/kontakt">
                <a className="f6 fw4 no-underline  db  ph3">Kontakt</a>
              </Link>
              <Link href="/impressum">
                <a className="f6 fw4 no-underline  db  ph3">Impressum</a>
              </Link>
              <Link href="/beratung">
                <a className="f6 fw4 no-underline  db  ph3">Beratung</a>
              </Link>
              
              <Link href="/montage">
                <a className="f6 fw4 no-underline  db  ph3">Montage</a>
              </Link>
            </p>
          </div>

       
          <div className="tl w-100">
            <p className="gray f7">© 2021 - 2025. Alle Abbildungen, Texte, Filme und 3d Modelle sind urheberrechtlich geschützt. Bei Interesse für die Benutzng bitten wir um Kontakt. </p>
          </div>
        </div>
        );
}

export default footer;