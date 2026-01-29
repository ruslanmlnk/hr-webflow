import Script from "next/script";
import "./globals.css";
import WebflowScripts from "../components/home-2/WebflowScripts";
import SmoothScroll from "../components/SmoothScroll";

const webflowCurrencySettings = `window.__WEBFLOW_CURRENCY_SETTINGS={"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}","hideDecimalForWholeNumbers":false};`;

export const metadata = {
  title: "HRLoom Agency — Ваш надійний партнер у пошуку талантів",
  description: "Професійне рекрутингове агентство HRLoom Agency. Допомагаємо бізнесу знаходити найкращих спеціалістів — від масового найму до Executive Search. Знайдіть свій ідеальний кадр з нами.",
  keywords: ["рекрутинг", "пошук персоналу", "HRLoom Agency", "кадрове агентство", "HR консалтинг", "найм співробітників", "Executive Search"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "HRLoom Agency — Рекрутингове агентство",
    description: "Ефективний пошук персоналу для вашого бізнесу. Ми знайдемо тих, хто допоможе вам зростати.",
    url: "https://hrloom.agency",
    siteName: "HRLoom Agency",
    locale: "uk_UA",
    type: "website",
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
      className="w-mod-js"
    >
      <head>
        {/* Preconnect для швидшого завантаження шрифтів */}
        <link href="https://fonts.googleapis.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://ajax.googleapis.com" rel="dns-prefetch" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Webflow скрипти - оптимізовано */}
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