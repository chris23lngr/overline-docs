import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

const Nextra = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default Nextra;
