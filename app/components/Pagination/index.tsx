"use client";
import { useFilterStore } from "@/store/useFilterStore";
import { useProductsStore } from "@/store/useProductsStore";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Products from "@/components/Main/ListProducts";
import _ from "lodash";
import * as S from "./styles";

interface PaginationProps {
  index: number;
}

const Pagination = () => {
  const { products: filtered, filter } = useFilterStore();
  const { products } = useProductsStore();
  const [page, setPage] = useState(1);

  useLayoutEffect(() => {
    setPage(1);
  }, [filter, filtered]);

  const pages = useCallback(() => {
    if (filtered.length > 0) {
      return _.chunk(filtered, 12);
    } else {
      return _.chunk(products, 12);
    }
  }, [products, filtered]);

  const PaginationButton = ({ index }: PaginationProps) => (
    <div key={index}>
      <S.Button
        onClick={() => {
          setPage(index + 1);
        }}
        selected={index + 1 === page}
      >
        {index + 1}
      </S.Button>
    </div>
  );

  const renderPagination = useCallback(
    () => pages().map((p, index) => <PaginationButton index={index} />),
    [products, filtered, filter, page]
  );

  const Render = useMemo(() => {
    return (
      <>
        <S.Container>{renderPagination()}</S.Container>
        <Products products={pages()[page - 1]} />
        <S.Container>{renderPagination()}</S.Container>
      </>
    );
  }, [filtered, products, page]);

  return Render;
};

export default Pagination;
