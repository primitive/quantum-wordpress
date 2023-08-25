
import Script from 'next/script'

export default function GA() {

  const GA_ID = process.env.GA_MEASUREMENT_ID;

  console.log('GA_ID poo', GA_ID);


  // <Script src="‘https://www.googletagmanager.com/gtag/js?id=${GA_ID}‘" />
  // gtag('config', 'GA_MEASUREMENT_ID');
  // if (!GA_ID) {
  //   return null;
  // }
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CZX17CNGCF" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-CZX17CNGCF');
        `}
      </Script>
    </>
  )
}
