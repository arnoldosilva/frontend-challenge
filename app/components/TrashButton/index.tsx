import { FaTrash } from "react-icons/fa";

import React from "react";
import { themeColors } from "@/styles/COLORS";

export default function index() {
  return (
    <div>
      <FaTrash size={20} color={themeColors.warning} />
    </div>
  );
}
