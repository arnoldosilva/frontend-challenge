"use client";
import React from "react";
import * as S from "./styles";
import { FaSearch } from "react-icons/fa";
import { saira_init } from "@/styles/global";

export default function index() {
  return (
    <S.Form>
      <S.Input
        className={saira_init.className}
        type="text"
        placeholder="Procurando por algo específico"
      />
      <S.Button>
        <FaSearch />
      </S.Button>
    </S.Form>
  );
}
