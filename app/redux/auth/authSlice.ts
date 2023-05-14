import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { ethers } from 'ethers'

// Define a type for the slice state
interface AuthState {
  walletAddress: string
  signer: ethers.JsonRpcSigner | undefined
}

// Define the initial state using that type
const initialState: AuthState = {
    walletAddress: '',
    signer: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
        setWalletAddress: (state, action) => {
            state.walletAddress = action.payload
        },
        setSigner: (state, action) => {
            state.signer = action.payload
        },
        logout: (state) => {
            state.walletAddress = ''
            state.signer = undefined
        }
    },
  },
)

export const {
    setWalletAddress,
    setSigner,
    logout
} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export const selectWalletAddress = (state: RootState) => state.auth.walletAddress
export const selectSigner = (state: RootState) => state.auth.signer

export default authSlice.reducer