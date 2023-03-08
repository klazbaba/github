import {createContext, Dispatch, SetStateAction} from 'react';
import {User} from '../types/User';

export interface IUserContext {
  user: User;
  setUser: Dispatch<SetStateAction<never[]>>;
}

export const UserContext = createContext<IUserContext | null>(null);
