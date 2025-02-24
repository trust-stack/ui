export const INPUT_FILLED = {
    brc: 'transparent',
    btc: 'transparent',
    blc: 'transparent',
    bbc: '$outline',
    bc: '$surfaceVariant',
    bbrr: 0,
    bblr: 0,
    focusStyle: {
        bw: '$0.5',
    },
} as const;

export const INPUT_OUTLINED = {
    bc: 'transparent',
    brc: '$outline',
    btc: '$outline',
    bbc: '$outline',
    blc: '$outline',
    borderWidth: 1,
    borderRadius: '$shape.corner_xs',
    focusStyle: {
        bw: '$0.5',
    },
} as const;
