"use client"; // If using Next.js App Router (for Next.js 13+)

import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js"; // Replace with your actual Elfsight script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="elfsight-app-e8774c62-d88f-49ca-bcbf-576a294c1050" data-elfsight-app-lazy></div> 
  // <div className="elfsight-app-731163eb-89a9-4f01-87ee-c1a4d6ffdcb2" data-elfsight-app-lazy></div>
  // Replace with the appropriate div if needed
};

export default ElfsightWidget;
