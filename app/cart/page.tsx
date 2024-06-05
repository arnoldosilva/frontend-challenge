"use client";
import Constructor from "@/Constructor";
import React from "react";
import Loading from "@/components/Loading";
import { useLoadingStore } from "@/store/useLoadingStore";
import Cart from "./index";

export default function index() {
  const { loading } = useLoadingStore();
  return (
    <Constructor>
      <Cart />
      {loading && <Loading />}
    </Constructor>
  );
}
