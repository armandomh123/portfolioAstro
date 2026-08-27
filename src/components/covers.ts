export interface Cover {
  tone: 'amber' | 'clay' | 'moss';
  svg: string;
}

export const covers: Record<string, Cover> = {
  vera: {
    tone: 'amber',
    svg: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="currentColor">
        <g stroke-opacity=".09"><path d="M0 75h400M0 150h400M0 225h400 M100 0v300M200 0v300M300 0v300"/></g>
        <path stroke-opacity=".35" stroke-width="1.5" d="M22 238c24-6 34-42 60-38s40-58 74-50 62-48 94-40 44-56 70-52 48 26 78 10" stroke-linecap="round"/>
        <path stroke-width="2.5" d="M22 238C70 234 78 176 120 190c42 14 58-78 112-56 44 13 60-78 106-56 40 19 92 0 120 26" stroke="currentColor" stroke-linecap="round"/>
        <path fill="currentColor" fill-opacity=".12" d="M22 238C70 234 78 176 120 190c42 14 58-74 112-58 44 13 60-78 106-56 40 19 92 0 120 26V300H22z"/>
      </g>
    </svg>`,
  },
  norr: {
    tone: 'clay',
    svg: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="currentColor">
        <g stroke-width="1" fill="currentColor">
          <rect x="52" y="52" width="14" height="14" rx="3"/>
          <rect x="334" y="52" width="14" height="14" rx="3"/>
          <rect x="52" y="234" width="14" height="14" rx="3"/>
          <rect x="334" y="234" width="14" height="14" rx="3"/>
          <rect x="193" y="143" width="14" height="14" rx="3"/>
        </g>
        <g stroke-width="1.2" stroke-dasharray="5 6">
          <path d="M66 59c42 0 82 6 124 84 36 68 96 76 178 84"/>
          <path d="M66 59c126 4 92 66 138 74 24 40-26 108 130 101"/>
          <path d="M66 241c62-30 68-52 102-98s100 6 166-94"/>
          <path d="M341 241c-58-44-70-52-76-74-6-22 2-30-97-44"/>
        </g>
      </g>
    </svg>`,
  },
  miele: {
    tone: 'moss',
    svg: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="currentColor">
        <g stroke-width="1.5" stroke-opacity=".3">
          <path d="M64 58h300M64 92h300M64 126h300M64 160h300M64 194h300M64 228h300M64 262h300"/>
        </g>
        <path stroke-width="2.5" d="M64 26h300"/>
        <path stroke-width="1" stroke-dasharray="3 6" d="M64 144h300"/>
        <path fill="currentColor" fill-opacity=".12" d="M64 236h300v18H64z"/>
        <path stroke-width="2.5" d="M64 254h300"/>
      </g>
    </svg>`,
  },
};