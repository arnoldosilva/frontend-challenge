"use client";
import Constructor from "@/Constructor";
import React from "react";
import Product from "@/components/Product";
import Loading from "@/components/Loading";
import { useLoadingStore } from "@/store/useLoadingStore";

export default function index() {
  const { loading } = useLoadingStore();
  return (
    <Constructor>
      <Product />
      {loading && <Loading />}
    </Constructor>
  );
}
