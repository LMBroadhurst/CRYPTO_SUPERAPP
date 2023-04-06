import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface WhitelistState {
  numberOfWhitelistedAddresses: number
}

// Define the initial state using that type
const initialState: WhitelistState = {
    numberOfWhitelistedAddresses: 0,
}

export const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState,
  reducers: {
        setNumberOfWhitelistedAddresses: (state, action) => {
            state.numberOfWhitelistedAddresses = action.payload
        }
    },
  },
)

export const { setNumberOfWhitelistedAddresses } = whitelistSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export const selectNumberOfWhitelistedAddresses = (state: RootState) => state.whitelist.numberOfWhitelistedAddresses

export default whitelistSlice.reducer