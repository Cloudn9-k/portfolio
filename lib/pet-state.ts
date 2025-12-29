export type PetType = 'alive' | 'ghost';

export interface PetState {
  type: PetType | null;
  startX: number | null;
  startY: number | null;
}

let state: PetState = {
  type: null,
  startX: null,
  startY: null,
};

const listeners: Set<(state: PetState) => void> = new Set();

const notify = () => {
  for (const listener of listeners) {
    listener(state);
  }
};

export const setPet = (type: PetType | null, startX: number | null = null, startY: number | null = null) => {
  state = { ...state, type, startX, startY };
  notify();
};

export const subscribe = (listener: (state: PetState) => void): (() => void) => {
  listeners.add(listener);
  listener(state);
  return () => {
    listeners.delete(listener);
  };
};

export const getSnapshot = () => {
  return state;
};