import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as S from "./styles";

export default function Page() {
  return (
    <S.Container>
      <Header />
      <Main />
      <Footer />
    </S.Container>
  );
}
