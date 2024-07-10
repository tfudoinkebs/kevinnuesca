import React from "react";
import { ThemeProvider } from "@/components/magicui/theme-provider";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Router from "./pages/landingpage/router";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col justify-between font-mono">
        <Header />
        <Router />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
