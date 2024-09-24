import {create} from 'zustand';

export const useAuthSlice = create(set => ({
  token: null,
  setToken: (token: string) => set({token}),
}));
