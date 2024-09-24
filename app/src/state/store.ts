import {create} from 'zustand';
import {useAuthSlice} from './slices/authSlice';
import {useMessageSlice} from './slices/messageSlice';

export interface Store {
  auth: ReturnType<typeof useAuthSlice>;
  sms: ReturnType<typeof useMessageSlice>;
}

export const useStore = create<Store>(() => ({
  auth: useAuthSlice,
  sms: useMessageSlice,
}));
