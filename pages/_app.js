import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";



export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  'use client;'
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
