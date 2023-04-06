import { useDispatch, useSelector } from 'react-redux'
import { setWalletAddress, selectWalletAddress, selectSigner, setSigner } from '../redux/auth/authSlice'

import { ethers } from 'ethers'
import { MetaMaskInpageProvider } from '@metamask/providers';

export default function useGetSigner() {
    const dispatch = useDispatch();
    const _signer = useSelector(selectSigner);
    
    const connectSigner = async () => {
        try {
          const { ethereum } = window;
          const provider = new ethers.BrowserProvider(ethereum as MetaMaskInpageProvider)
          const signer = await provider.getSigner()
          
          console.log(_signer, signer.address)
          dispatch(setSigner(signer)) 
          dispatch(setWalletAddress(signer.address))
    
        } catch (error) {
          console.log("Error with the getSigner method: ", error)
        }
    };

    return {
        _signer,
        connectSigner
    }
}