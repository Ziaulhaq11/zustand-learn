import { create } from "zustand";

type ICounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
  fetchTodos: () => Promise<void>;
};

export const useCounterStore = create<ICounterStore>((set) => ({
  //Its a custom hook
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  fetchTodos: async () => {
    const response = await fetch("http://fetchTodosUrl.com");
    const todosData = await response.json();
    set((state) => ({ count: (state.count = todosData.length) }));
  },
}));
