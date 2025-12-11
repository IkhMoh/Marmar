"use client";

import { Provider } from "react-redux";
import React from "react";
import { store } from "@/store/store";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
    
      <ThemeProvider>{children} </ThemeProvider>
    </Provider>
  );
};

export default Providers;
