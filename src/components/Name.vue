<template>
  <svg class="name__svg title-font" viewBox="0 0 300 120">
    <text id="transparent" x="150" y="67">Robin</text>

    <g>
      <text id="left_fragment" x="150" y="67" mask="url(#left_mask)">
        Robin
      </text>
      <text id="right_fragment" x="150" y="67" mask="url(#right_mask)">
        Robin
      </text>
      <text id="base_text" x="150" y="67" mask="url(#right_mask_inverted)">
        Robin
      </text>
    </g>

    <mask id="left_mask">
      <polygon points="0,0 105,0 150,120 50,120" fill="white" />
    </mask>

    <mask id="right_mask">
      <polygon points="270,0 220,100 300,100" fill="white" />
    </mask>

    <mask id="right_mask_inverted">
      <rect height="120" width="300" fill="white" />
      <polygon points="0,0 105,0 150,120 50,120" fill="black" />
      <polygon points="270,0 220,100 300,100" fill="black" />
    </mask>
  </svg>
</template>

<script setup></script>

<style scoped>
.name__svg {
  height: 120px;
  width: 300px;
  fill: var(--secondary);
  font-size: 96px;
  text-anchor: middle;
  dominant-baseline: middle;

  text {
    stroke: var(--secondary);
    stroke-width: 2px;
    stroke-dasharray: 6;
    stroke-dashoffset: 0;
    animation: contour 6s linear infinite;
  }

  #transparent {
    fill: transparent;
    stroke: none;
  }

  #base_text {
    stroke: none;
  }

  #left_fragment {
    fill: var(--accent);
  }

  #right_fragment {
    fill: none;
  }
}

.dark .name__svg {
  #left_fragment {
    fill: none;
  }

  #right_fragment {
    fill: var(--accent-hover);
  }
}

@keyframes contour {
  to {
    stroke-dashoffset: 12.3;
  }
}
</style>
