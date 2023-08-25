import Script from "next/script";

export default function GA() {

  const GA_ID = process.env.GA_MEASUREMENT_ID;

  if (GA_ID) {
    console.log("GA_ID is there", GA_ID);

    return (
      <>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CZX17CNGCF" /> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_ID}');
        `}
        </Script>
      </>
    );
  }
  // Type 'boolean' is not assignable to type 'ReactElement<any, any>'.
  else {
    console.log("GA_ID false");
    return null;
  }
}
