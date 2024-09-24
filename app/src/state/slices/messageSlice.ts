import {create} from 'zustand';

type Message = {
  id: string;
  body: string;
  date: string;
  read: number;
  address: string;
  date_sent: string;
  service_center: string;
};

interface MessageStore {
  messages: Message[];
  setMessages: (sms: Message[]) => void;
}

export const useMessageSlice = create<MessageStore>(set => ({
  messages: [],
  setMessages: (smsObject: Message[]) => set({messages: smsObject}),
}));
