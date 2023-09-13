import React from "react";

const sizeClasses = {
  txtIBMPlexMono2093: "font-ibmplexmono font-normal",
  txtWorkSansSemiBold2392: "font-semibold font-worksans",
  txtIBMPlexMono2093Amber700: "font-ibmplexmono font-normal",
  txtIBMPlexMono2093Pink400: "font-ibmplexmono font-normal",
  txtIBMPlexMono2093DeeppurpleA200: "font-ibmplexmono font-normal",
  txtIBMPlexMono2093Green600: "font-ibmplexmono font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
