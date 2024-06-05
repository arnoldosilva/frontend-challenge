"use client";
import React from "react";
import Main from "./components/Main";
import Constructor from "./Constructor";
import Loading from "./components/Loading";
import { useLoadingStore } from "./store/useLoadingStore";

export default function Page() {
  const { loading } = useLoadingStore();
  return (
    <>
      <Constructor>
        <Main />
      </Constructor>
      {loading && <Loading />}
    </>
  );
}
