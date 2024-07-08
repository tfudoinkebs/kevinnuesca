import React from "react";
import { ThemeProvider } from "@/components/magicui/theme-provider";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Router from "./pages/landingpage/router";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col justify-between font-mono">
        <Router />
        <div className="fixed flex h-full w-full flex-col">
          <div className="flex justify-between">
            <Header />
          </div>
        </div>
        <Footer className />
      </div>
    </ThemeProvider>
  );
};

export default App;
