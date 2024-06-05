"use client";
import React from "react";

import * as S from "./styles";
import { themeColors } from "@/styles/COLORS";
import { LineWave } from "react-loader-spinner";

export default function index() {
  return (
    <S.Container>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color={themeColors.white}
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor={themeColors.white}
        middleLineColor={themeColors.primary}
        lastLineColor={themeColors.warning}
      />
    </S.Container>
  );
}
