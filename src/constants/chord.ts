export interface ChordType {
  name: string;
  chart: number[][];
}

// ♭ ♯

export const chordList: ChordType[] = [
  {
    name: 'C',
    chart: [
      [0, 1, 0, 2, 3, -1],
      [0, 1, 0, 2, 3, 3],
      [3, 5, 5, 5, 3, -1],
      [8, 8, 9, 10, 10, 8],
    ],
  },
  {
    name: 'Cm',
    chart: [[3, 4, 5, 5, 3, -1]],
  },
  {
    name: 'CM7',
    chart: [[0, 0, 0, 2, 3, -1]],
  },
  {
    name: 'Cadd9',
    chart: [[0, 3, 0, 2, 3, -1]],
  },
  {
    name: 'D',
    chart: [
      [2, 3, 2, 0, -1, -1],
      [5, 7, 7, 7, 5, -1],
    ],
  },
  {
    name: 'D7',
    chart: [
      [2, 1, 2, 0, -1, -1],
      [5, 7, 5, 7, 5, -1],
    ],
  },
  {
    name: 'Dm',
    chart: [
      [1, 3, 2, 0, -1, -1],
      [5, 6, 7, 7, 5, -1],
    ],
  },
  {
    name: 'Dm7',
    chart: [
      [1, 1, 2, 0, -1, -1],
      [5, 6, 5, 7, 5, -1],
    ],
  },
  {
    name: 'D7sus4',
    chart: [
      [3, 1, 2, 0, -1, -1],
      [5, 8, 5, 7, 5, -1],
    ],
  },
  {
    name: 'E',
    chart: [
      [0, 0, 1, 2, 2, 0],
      [7, 9, 9, 9, 7, -1],
    ],
  },
  {
    name: 'Em',
    chart: [[0, 0, 0, 2, 2, 0]],
  },
  {
    name: 'Em7',
    chart: [[0, 0, 0, 0, 2, 0]],
  },
  {
    name: 'E7♭9',
    chart: [[1, 0, 1, 0, 2, 0]],
  },
  {
    name: 'F',
    chart: [[1, 1, 2, 3, 3, 1]],
  },
  {
    name: 'FM7',
    chart: [[0, 1, 2, 3, -1, -1]],
  },
  {
    name: 'G',
    chart: [
      [3, 0, 0, 0, 2, 3],
      [3, 3, 4, 5, 5, 3],
    ],
  },
  {
    name: 'GM7',
    chart: [[2, 0, 0, 0, 2, 3]],
  },
  {
    name: 'G/B',
    chart: [[3, 0, 0, 0, 2, -1]],
  },
  {
    name: 'Gadd9/B',
    chart: [[-1, -1, 2, 0, 2, -1]],
  },
  {
    name: 'Gsus4',
    chart: [[3, 1, 0, 0, 3, 3]],
  },
  {
    name: 'A',
    chart: [
      [0, 2, 2, 2, 0, -1],
      [5, 5, 6, 7, 7, 5],
    ],
  },
  {
    name: 'A7',
    chart: [
      [0, 2, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  {
    name: 'Am',
    chart: [
      [0, 1, 2, 2, 0, -1],
      [5, 5, 5, 7, 7, 5],
    ],
  },
  {
    name: 'Am7',
    chart: [
      [0, 1, 0, 2, 0, -1],
      [5, 5, 6, 5, 7, 5],
    ],
  },
  {
    name: 'B',
    chart: [
      [2, 4, 4, 4, 2, -1],
      [7, 7, 8, 9, 9, 7],
    ],
  },
  {
    name: 'B7',
    chart: [
      [2, 0, 2, 1, 2, -1],
      [2, 4, 2, 4, 2, -1],
    ],
  },
  {
    name: 'Bm7',
    chart: [[2, 3, 2, 4, 2, -1]],
  },
  {
    name: 'Bm',
    chart: [[2, 3, 4, 4, 2, -1]],
  },
  {
    name: 'B♭',
    chart: [[1, 3, 3, 3, 1, -1]],
  },
];

export const scaleArray = [
  ['E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E'],
  ['B', 'C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B'],
  ['G', 'G♯', 'A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G'],
  ['D', 'E♭', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B', 'C', 'C♯', 'D'],
  ['A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'G♯', 'A'],
  ['E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E'],
];
