export type InfoLetter = {
  letter: string
  result: 'absent' | 'present' | 'correct' | null
}

const correctSample: InfoLetter[] = [
  {
    letter: 'W',
    result: 'correct',
  },
  {
    letter: 'E',
    result: null,
  },
  {
    letter: 'A',
    result: null,
  },
  {
    letter: 'R',
    result: null,
  },
  {
    letter: 'Y',
    result: null,
  },
]

const presentSample: InfoLetter[] = [
  {
    letter: 'P',
    result: null,
  },
  {
    letter: 'I',
    result: 'present',
  },
  {
    letter: 'L',
    result: null,
  },
  {
    letter: 'L',
    result: null,
  },
  {
    letter: 'S',
    result: null,
  },
]

const absentSample: InfoLetter[] = [
  {
    letter: 'V',
    result: null,
  },
  {
    letter: 'A',
    result: null,
  },
  {
    letter: 'G',
    result: null,
  },
  {
    letter: 'U',
    result: 'absent',
  },
  {
    letter: 'E',
    result: null,
  },
]

export { absentSample, correctSample, presentSample }
