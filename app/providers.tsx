"use client";
import React, { useEffect, PropsWithChildren } from "react";
import GlobalStyles from "@/styles/global";
import { fetchProducts } from "./services/fetchProducts";

const createProviders = ({ children }: PropsWithChildren) => {
  const data = async () => await fetchProducts();

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default createProviders;
