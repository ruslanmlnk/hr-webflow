import Script from "next/script";
import "./globals.css";
import WebflowScripts from "../components/home-2/WebflowScripts";
import SmoothScroll from "../components/SmoothScroll";

const webflowIxStyles = `@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1783743b-37c5-b9b8-652d-e10224129c09"] {-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1ed52d35-1d76-824f-c4f4-5a30d704f7dd"] {-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1783743b-37c5-b9b8-652d-e10224129c09"] {-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1ed52d35-1d76-824f-c4f4-5a30d704f7dd"] {-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="1783743b-37c5-b9b8-652d-e10224129c09"] {-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="1ed52d35-1d76-824f-c4f4-5a30d704f7dd"] {-webkit-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}`;

const webflowFontLoader = `WebFont.load({google:{families:["Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","Inter:regular,500,600"]}});`;

const webflowModScript = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;

const webflowCurrencySettings = `window.__WEBFLOW_CURRENCY_SETTINGS={"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}","hideDecimalForWholeNumbers":false};`;

export const metadata = {
  title: "Home 2 - JobBoard",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      data-wf-page="64943f2a36915879aa1daee3" 
      data-wf-site="64943f2936915879aa1dae17"
      className="scroll-smooth"
    >
      <head>
        {/* Preconnect для швидшого завантаження шрифтів */}
        <link href="https://fonts.googleapis.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://ajax.googleapis.com" rel="dns-prefetch" />
        
        {/* Inline критичні стилі */}
        <style dangerouslySetInnerHTML={{ __html: webflowIxStyles }} />
        
        {/* Webflow скрипти - оптимізовано */}
        <Script 
          id="webfont-loader" 
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" 
          strategy="afterInteractive"
        />
        
        <Script id="webflow-font-loader" strategy="afterInteractive">
          {webflowFontLoader}
        </Script>
        
        <Script id="webflow-mods" strategy="beforeInteractive">
          {webflowModScript}
        </Script>
        
        <Script id="webflow-currency" strategy="afterInteractive">
          {webflowCurrencySettings}
        </Script>
      </head>
      
      <body>
        <SmoothScroll />
        {children}
        
        <Script 
          src="/js/jquery.js" 
          strategy="afterInteractive"
        />
        <WebflowScripts />
      </body>
    </html>
  );
}