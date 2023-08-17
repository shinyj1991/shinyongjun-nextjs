export interface ChordType {
  [key: string]: {
    composition: string[];
    chartList: number[][];
  };
}

// [ => ♭
// ] => ♯

export const kindOfChord = [
  '',
  '6',
  '7',
  '9',
  'M7',
  'sus2',
  'sus4',
  '7sus4',
  'dim',
  'm',
  'm6',
  'm7',
  'add9',
];

export const chordSymbolList = [
  'C',
  'C]',
  'D',
  'E[',
  'E',
  'F',
  'F]',
  'G',
  'G]',
  'A',
  'B[',
  'B',
];

export const pitchList = [
  'C',
  ['C]', 'D['],
  'D',
  ['D]', 'E['],
  'E',
  'F',
  ['F]', 'G['],
  'G',
  ['G]', 'A['],
  'A',
  ['A]', 'B['],
  'B',
];

export const scaleArray = [
  ['E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E'],
  ['B', 'C', 'C]', 'D', 'E[', 'E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B'],
  ['G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E', 'F', 'F]', 'G'],
  ['D', 'E[', 'E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D'],
  ['A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E', 'F', 'F]', 'G', 'G]', 'A'],
  ['E', 'F', 'F]', 'G', 'G]', 'A', 'B[', 'B', 'C', 'C]', 'D', 'E[', 'E'],
];

export const newChordList: ChordType = {
  C: {
    composition: ['C', 'E', 'G'],
    chartList: [
      [0, 1, 0, 2, 3, -1],
      [0, 1, 0, 2, 3, 3],
      [3, 5, 5, 5, 3, -1],
      [8, 8, 9, 10, 10, 8],
    ],
  },
  C6: {
    composition: ['C', 'E', 'G', 'A'],
    chartList: [],
  },
  C7: {
    composition: ['C', 'E', 'G', 'B['],
    chartList: [
      [0, 1, 3, 2, 3, -1],
      [3, 5, 3, 5, 3, -1],
      [8, 8, 9, 8, 10, 8],
    ],
  },
  C9: {
    composition: ['C', 'E', 'G', 'B[', 'D'],
    chartList: [],
  },
  CM7: {
    composition: ['C', 'E', 'G', 'B'],
    chartList: [[0, 0, 0, 2, 3, -1]],
  },
  Csus2: {
    composition: ['C', 'D', 'G'],
    chartList: [],
  },
  Csus4: {
    composition: ['C', 'F', 'G'],
    chartList: [[1, 1, 0, 3, 3, -1]],
  },
  C7sus4: {
    composition: ['C', 'F', 'G', 'B['],
    chartList: [],
  },
  Cdim: {
    composition: ['C', 'E[', 'F]', 'A'],
    chartList: [],
  },
  Cm: {
    composition: ['C', 'E[', 'G'],
    chartList: [
      [3, 4, 5, 5, 3, -1],
      [8, 8, 8, 10, 10, 8],
    ],
  },
  Cm6: {
    composition: ['C', 'E[', 'G', 'A'],
    chartList: [],
  },
  Cm7: {
    composition: ['C', 'E[', 'G', 'B['],
    chartList: [[3, 4, 3, 5, 3, -1]],
  },
  Cadd9: {
    composition: ['C', 'E', 'G', 'D'],
    chartList: [[0, 3, 0, 2, 3, -1]],
  },
  'C]': {
    composition: ['C]', 'F', 'G]'],
    chartList: [
      [4, 6, 6, 6, 4, -1],
      [9, 9, 10, 11, 11, 9],
    ],
  },
  'C]6': {
    composition: ['C]', 'F', 'G]', 'B['],
    chartList: [],
  },
  'C]7': {
    composition: ['C]', 'F', 'G]', 'B'],
    chartList: [],
  },
  'C]9': {
    composition: ['C]', 'F', 'G]', 'B', 'E['],
    chartList: [],
  },
  'C]M7': {
    composition: ['C]', 'F', 'G]', 'C'],
    chartList: [],
  },
  'C]sus4': {
    composition: ['C]', 'F]', 'G]'],
    chartList: [],
  },
  'C]7sus4': {
    composition: ['C]', 'F]', 'G]', 'B'],
    chartList: [],
  },
  'C]dim': {
    composition: ['C]', 'E', 'G', 'B['],
    chartList: [],
  },
  'C]m': {
    composition: ['C]', 'E', 'G]'],
    chartList: [
      [4, 5, 6, 6, 4, -1],
      [9, 9, 9, 11, 11, 9],
    ],
  },
  'C]m6': {
    composition: ['C]', 'E', 'G]', 'B['],
    chartList: [],
  },
  'C]m7': {
    composition: ['C]', 'E', 'G]', 'B'],
    chartList: [
      [4, 5, 4, 6, 4, -1],
      [9, 9, 10, 9, 11, 9],
    ],
  },
  'C]add9': {
    composition: ['C]', 'F', 'G]', 'E['],
    chartList: [],
  },
  D: {
    composition: ['D', 'F]', 'A'],
    chartList: [
      [2, 3, 2, 0, -1, -1],
      [5, 7, 7, 7, 5, -1],
    ],
  },
  D6: {
    composition: ['D', 'F]', 'A', 'B'],
    chartList: [],
  },
  D7: {
    composition: ['D', 'F]', 'A', 'C'],
    chartList: [
      [2, 1, 2, 0, -1, -1],
      [5, 7, 5, 7, 5, -1],
    ],
  },
  D9: {
    composition: ['D', 'F]', 'A', 'C', 'E'],
    chartList: [],
  },
  DM7: {
    composition: ['D', 'F]', 'A', 'C]'],
    chartList: [],
  },
  Dsus4: {
    composition: ['D', 'G', 'A'],
    chartList: [],
  },
  D7sus4: {
    composition: ['D', 'G', 'A', 'C'],
    chartList: [
      [3, 1, 2, 0, -1, -1],
      [5, 8, 5, 7, 5, -1],
    ],
  },
  Ddim: {
    composition: ['D', 'F', 'G]', 'B'],
    chartList: [],
  },
  Dm: {
    composition: ['D', 'F', 'A'],
    chartList: [
      [1, 3, 2, 0, -1, -1],
      [5, 6, 7, 7, 5, -1],
    ],
  },
  Dm6: {
    composition: ['D', 'F', 'A', 'B'],
    chartList: [],
  },
  Dm7: {
    composition: ['D', 'F', 'A', 'C'],
    chartList: [
      [1, 1, 2, 0, -1, -1],
      [5, 6, 5, 7, 5, -1],
    ],
  },
  Dadd9: {
    composition: ['D', 'F]', 'A', 'E'],
    chartList: [],
  },
  'E[': {
    composition: ['E[', 'G', 'B['],
    chartList: [],
  },
  'E[6': {
    composition: ['E[', 'G', 'B[', 'C'],
    chartList: [],
  },
  'E[7': {
    composition: ['E[', 'G', 'B[', 'C]'],
    chartList: [],
  },
  'E[9': {
    composition: ['E[', 'G', 'B[', 'C]', 'F'],
    chartList: [],
  },
  'E[M7': {
    composition: ['E[', 'G', 'B[', 'D'],
    chartList: [],
  },
  'E[sus4': {
    composition: ['E[', 'G]', 'B['],
    chartList: [],
  },
  'E[7sus4': {
    composition: ['E[', 'G]', 'B[', 'C]'],
    chartList: [],
  },
  'E[dim': {
    composition: ['E[', 'F]', 'A', 'C'],
    chartList: [],
  },
  'E[m': {
    composition: ['E[', 'F]', 'B['],
    chartList: [],
  },
  'E[m6': {
    composition: ['E[', 'F]', 'B[', 'C'],
    chartList: [],
  },
  'E[m7': {
    composition: ['E[', 'F]', 'B[', 'C]'],
    chartList: [],
  },
  'E[add9': {
    composition: ['E[', 'G', 'B[', 'F'],
    chartList: [],
  },
  E: {
    composition: ['E', 'G]', 'B'],
    chartList: [
      [0, 0, 1, 2, 2, 0],
      [7, 9, 9, 9, 7, -1],
    ],
  },
  E6: {
    composition: ['E', 'G]', 'B', 'C]'],
    chartList: [],
  },
  E7: {
    composition: ['E', 'G]', 'B', 'D'],
    chartList: [],
  },
  E9: {
    composition: ['E', 'G]', 'B', 'D', 'F]'],
    chartList: [],
  },
  EM7: {
    composition: ['E', 'G]', 'B', 'E['],
    chartList: [],
  },
  Esus4: {
    composition: ['E', 'A', 'B'],
    chartList: [],
  },
  E7sus4: {
    composition: ['E', 'A', 'B', 'D'],
    chartList: [],
  },
  Edim: {
    composition: ['E', 'G', 'B[', 'C]'],
    chartList: [],
  },
  Em: {
    composition: ['E', 'G', 'B'],
    chartList: [[0, 0, 0, 2, 2, 0]],
  },
  Em6: {
    composition: ['E', 'G', 'B', 'C]'],
    chartList: [],
  },
  Em7: {
    composition: ['E', 'G', 'B', 'D'],
    chartList: [[0, 0, 0, 0, 2, 0]],
  },
  Eadd9: {
    composition: ['E', 'G]', 'B', 'F]'],
    chartList: [[0, 0, 1, 4, 2, 0]],
  },
  F: {
    composition: ['F', 'A', 'C'],
    chartList: [[1, 1, 2, 3, 3, 1]],
  },
  F6: {
    composition: ['F', 'A', 'C', 'D'],
    chartList: [],
  },
  F7: {
    composition: ['F', 'A', 'C', 'E['],
    chartList: [],
  },
  F9: {
    composition: ['F', 'A', 'C', 'E[', 'G'],
    chartList: [],
  },
  FM7: {
    composition: ['F', 'A', 'C', 'E'],
    chartList: [[0, 1, 2, 3, -1, -1]],
  },
  Fsus4: {
    composition: ['F', 'B[', 'C'],
    chartList: [],
  },
  F7sus4: {
    composition: ['F', 'B[', 'C', 'E['],
    chartList: [],
  },
  Fdim: {
    composition: ['F', 'G]', 'B', 'D'],
    chartList: [],
  },
  Fm: {
    composition: ['F', 'G]', 'C'],
    chartList: [],
  },
  Fm6: {
    composition: ['F', 'G]', 'C', 'D'],
    chartList: [],
  },
  Fm7: {
    composition: ['F', 'G]', 'C', 'E['],
    chartList: [],
  },
  Fadd9: {
    composition: ['F', 'A', 'C', 'G'],
    chartList: [],
  },
  'F]': {
    composition: ['F]', 'B[', 'C]'],
    chartList: [[2, 2, 3, 4, 4, 2]],
  },
  'F]6': {
    composition: ['F]', 'B[', 'C]', 'E['],
    chartList: [],
  },
  'F]7': {
    composition: ['F]', 'B[', 'C]', 'E'],
    chartList: [],
  },
  'F]9': {
    composition: ['F]', 'B[', 'C]', 'E', 'G]'],
    chartList: [],
  },
  'F]M7': {
    composition: ['F]', 'B[', 'C]', 'F'],
    chartList: [],
  },
  'F]sus4': {
    composition: ['F]', 'B', 'C]'],
    chartList: [],
  },
  'F]7sus4': {
    composition: ['F]', 'B', 'C]', 'E'],
    chartList: [],
  },
  'F]dim': {
    composition: ['F]', 'A', 'C', 'E['],
    chartList: [],
  },
  'F]m': {
    composition: ['F]', 'A', 'C]'],
    chartList: [],
  },
  'F]m6': {
    composition: ['F]', 'A', 'C]', 'E['],
    chartList: [],
  },
  'F]m7': {
    composition: ['F]', 'A', 'C]', 'E'],
    chartList: [],
  },
  'F]add9': {
    composition: ['F]', 'B[', 'C]', 'G]'],
    chartList: [],
  },
  G: {
    composition: ['G', 'B', 'D'],
    chartList: [
      [3, 0, 0, 0, 2, 3],
      [3, 3, 4, 5, 5, 3],
    ],
  },
  G6: {
    composition: ['G', 'B', 'D', 'E'],
    chartList: [],
  },
  G7: {
    composition: ['G', 'B', 'D', 'F'],
    chartList: [],
  },
  G9: {
    composition: ['G', 'B', 'D', 'F', 'A'],
    chartList: [],
  },
  GM7: {
    composition: ['G', 'B', 'D', 'F]'],
    chartList: [[2, 0, 0, 0, 2, 3]],
  },
  Gsus4: {
    composition: ['G', 'C', 'D'],
    chartList: [[3, 1, 0, 0, 3, 3]],
  },
  G7sus4: {
    composition: ['G', 'C', 'D', 'F'],
    chartList: [],
  },
  Gdim: {
    composition: ['G', 'B[', 'C]', 'E'],
    chartList: [],
  },
  Gm: {
    composition: ['G', 'B[', 'D'],
    chartList: [],
  },
  Gm6: {
    composition: ['G', 'B[', 'D', 'E'],
    chartList: [],
  },
  Gm7: {
    composition: ['G', 'B[', 'D', 'F'],
    chartList: [],
  },
  Gadd9: {
    composition: ['G', 'B', 'D', 'A'],
    chartList: [
      [-1, -1, 2, 0, 2, 3],
      [3, 0, 2, 0, -1, 3],
    ],
  },
  'G]': {
    composition: ['G]', 'C', 'E['],
    chartList: [],
  },
  'G]6': {
    composition: ['G]', 'C', 'E[', 'F'],
    chartList: [],
  },
  'G]7': {
    composition: ['G]', 'C', 'E[', 'F]'],
    chartList: [],
  },
  'G]9': {
    composition: ['G]', 'C', 'E[', 'F]', 'B['],
    chartList: [],
  },
  'G]M7': {
    composition: ['G]', 'C', 'E[', 'G'],
    chartList: [],
  },
  'G]sus4': {
    composition: ['G]', 'C]', 'E['],
    chartList: [],
  },
  'G]7sus4': {
    composition: ['G]', 'C]', 'E[', 'F]'],
    chartList: [],
  },
  'G]dim': {
    composition: ['G]', 'B', 'D', 'F'],
    chartList: [],
  },
  'G]m': {
    composition: ['G]', 'B', 'E['],
    chartList: [],
  },
  'G]m6': {
    composition: ['G]', 'B', 'E[', 'F'],
    chartList: [],
  },
  'G]m7': {
    composition: ['G]', 'B', 'E[', 'F]'],
    chartList: [],
  },
  'G]add9': {
    composition: ['G]', 'C', 'E[', 'B['],
    chartList: [],
  },
  A: {
    composition: ['A', 'C]', 'E'],
    chartList: [
      [0, 2, 2, 2, 0, -1],
      [5, 5, 6, 7, 7, 5],
    ],
  },
  A6: {
    composition: ['A', 'C]', 'E', 'F]'],
    chartList: [],
  },
  A7: {
    composition: ['A', 'C]', 'E', 'G'],
    chartList: [
      [0, 2, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  A9: {
    composition: ['A', 'C]', 'E', 'G', 'B'],
    chartList: [],
  },
  AM7: {
    composition: ['A', 'C]', 'E', 'G]'],
    chartList: [],
  },
  Asus2: {
    composition: ['A', 'B', 'E'],
    chartList: [],
  },
  Asus4: {
    composition: ['A', 'D', 'E'],
    chartList: [],
  },
  A7sus4: {
    composition: ['A', 'D', 'E', 'G'],
    chartList: [],
  },
  Adim: {
    composition: ['A', 'C', 'E[', 'F]'],
    chartList: [],
  },
  Am: {
    composition: ['A', 'C', 'E'],
    chartList: [
      [0, 1, 2, 2, 0, -1],
      [5, 5, 5, 7, 7, 5],
    ],
  },
  Am6: {
    composition: ['A', 'C', 'E', 'F]'],
    chartList: [],
  },
  Am7: {
    composition: ['A', 'C', 'E', 'G'],
    chartList: [
      [0, 1, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  Aadd9: {
    composition: ['A', 'C]', 'E', 'B'],
    chartList: [],
  },
  'B[': {
    composition: ['B[', 'D', 'F'],
    chartList: [[1, 3, 3, 3, 1, -1]],
  },
  'B[6': {
    composition: ['B[', 'D', 'F', 'G'],
    chartList: [],
  },
  'B[7': {
    composition: ['B[', 'D', 'F', 'G]'],
    chartList: [],
  },
  'B[9': {
    composition: ['B[', 'D', 'F', 'G]', 'C'],
    chartList: [],
  },
  'B[M7': {
    composition: ['B[', 'D', 'F', 'A'],
    chartList: [],
  },
  'B[sus4': {
    composition: ['B[', 'E[', 'F'],
    chartList: [],
  },
  'B[7sus4': {
    composition: ['B[', 'E[', 'F', 'G]'],
    chartList: [],
  },
  'B[dim': {
    composition: ['B[', 'C]', 'E', 'G'],
    chartList: [],
  },
  'B[m': {
    composition: ['B[', 'C]', 'F'],
    chartList: [[1, 2, 3, 3, 1, -1]],
  },
  'B[m6': {
    composition: ['B[', 'C]', 'F', 'G'],
    chartList: [],
  },
  'B[m7': {
    composition: ['B[', 'C]', 'F', 'G]'],
    chartList: [],
  },
  'B[add9': {
    composition: ['B[', 'D', 'F', 'C'],
    chartList: [],
  },
  B: {
    composition: ['B', 'E[', 'F]'],
    chartList: [
      [2, 4, 4, 4, 2, -1],
      [7, 7, 8, 9, 9, 7],
    ],
  },
  B6: {
    composition: ['B', 'E[', 'F]', 'G]'],
    chartList: [],
  },
  B7: {
    composition: ['B', 'E[', 'F]', 'A'],
    chartList: [
      [2, 0, 2, 1, 2, -1],
      [2, 4, 2, 4, 2, -1],
    ],
  },
  B9: {
    composition: ['B', 'E[', 'F]', 'A', 'C]'],
    chartList: [],
  },
  BM7: {
    composition: ['B', 'E[', 'F]', 'B['],
    chartList: [],
  },
  Bsus4: {
    composition: ['B', 'E', 'F]'],
    chartList: [[0, 0, 4, 4, 2, -1]],
  },
  B7sus4: {
    composition: ['B', 'E', 'F]', 'A'],
    chartList: [],
  },
  Bdim: {
    composition: ['B', 'D', 'F', 'G]'],
    chartList: [],
  },
  Bm: {
    composition: ['B', 'D', 'F]'],
    chartList: [],
  },
  Bm6: {
    composition: ['B', 'D', 'F]', 'G]'],
    chartList: [[2, 3, 4, 4, 2, -1]],
  },
  Bm7: {
    composition: ['B', 'D', 'F]', 'A'],
    chartList: [[2, 3, 2, 4, 2, -1]],
  },
  Badd9: {
    composition: ['B', 'E[', 'F]', 'C]'],
    chartList: [],
  },
};