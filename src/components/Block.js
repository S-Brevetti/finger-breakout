import React from "react";
import { getRange } from "../utils/utils";
import { BLOCK_MAX_DENSITY } from "../utils/game";

const colors = getRange(BLOCK_MAX_DENSITY).map(
  (i) => `rgba(26, 188, 156, ${1 / (BLOCK_MAX_DENSITY - i)})`
);

export default ({ x, y, width, height, density }) => (
  <rect
    className="block"
    fill={colors[density]}
    x={x}
    y={y}
    width={width}
    height={height}
  />
);
