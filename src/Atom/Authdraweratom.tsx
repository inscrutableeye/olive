import { atom } from 'recoil'

export interface AuthDrawerState {
  open: boolean
  view: "item" | "isOpen"
}

const defaultDrawerState: AuthDrawerState = {
  open: false,
  view: 'item'
}

export const authDrawerState = atom<AuthDrawerState>({
  key: 'authDrawerState',
  default: defaultDrawerState
})