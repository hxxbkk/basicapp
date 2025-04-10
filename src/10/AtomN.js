import { atom, selector } from 'recoil';

export const AtomN = atom({
  key: 'AtomN',
  default: 0,
});

//atom 값이 바뀌면 자동적으로 바껴서 나오는 값
export const AtomN2 = selector({
  key: 'AtomN2',
  get: ({ get }) => {
    return get(AtomN) * 2;
  },
});
