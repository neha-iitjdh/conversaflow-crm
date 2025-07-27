import { atom } from 'jotai';
import { User } from '@/types';

export const userAtom = atom<User | null>({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
  avatar: 'https://i.pravatar.cc/150?img=1',
});

export const sidebarOpenAtom = atom<boolean>(true);

export const dateRangeAtom = atom<{ start: Date; end: Date }>({
  start: new Date('2023-06-01'),
  end: new Date('2024-06-15'),
});