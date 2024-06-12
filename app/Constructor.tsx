"use client";
import React, { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as S from "./styles";

export default function Constructor({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  );
}
