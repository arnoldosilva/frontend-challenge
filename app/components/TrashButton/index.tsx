import { FaTrash } from "react-icons/fa";

import React from "react";
import { themeColors } from "@/styles/COLORS";
import { useCartStore } from "@/store/useCartStore";

interface Props {
  itemId: string;
}

export default function index({ itemId }: Props) {
  const { removeItem } = useCartStore();
  return (
    <div>
      <FaTrash
        size={20}
        color={themeColors.warning}
        onClick={() => removeItem(itemId)}
      />
    </div>
  );
}
