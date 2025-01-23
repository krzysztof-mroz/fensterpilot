import Layout from '../components/ui/layout'
import Head from 'next/head';

import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
  
  

  <Layout>

<Head>
        {/* Start of Tawk.to Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/679225e53a8427326073a991/1ii9e82mj';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        ></script>
        {/* End of Tawk.to Script */}
      </Head>
   
    <Component {...pageProps} />
  </Layout>
       
    
     
   
    );
  
}

export default MyApp
