"use client";

import Script from "next/script";
import { useState } from "react";

export default function WebflowScripts() {
  const [step, setStep] = useState(0);

  return (
    <>
      <Script
        src="/js/webflow.schunk.74913c4b4b4ccfa6.js"
        strategy="afterInteractive"
        onLoad={() => setStep(1)}
      />
      {/* {step >= 1 && (
        <Script
          src="/js/webflow.schunk.c11452b75fe04dcc.js"
          strategy="afterInteractive"
          onLoad={() => setStep(2)}
        />
      )} */}
      {/* {step >= 2 && (
        <Script
          src="/js/webflow.schunk.4913f0d9ee368d76.js"
          strategy="afterInteractive"
          onLoad={() => setStep(3)}
        />
      )}
      {step >= 3 && (
        <Script
          src="/js/webflow-script-1.js"
          strategy="afterInteractive"
          onLoad={() => {
            window.dispatchEvent(new Event("webflow:scripts-ready"));
          }}
        />
      )} */}
    </>
  );
}

