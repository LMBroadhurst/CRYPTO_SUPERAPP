import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }

  interface Web3Modal {
    projectId: string,
    walletConnectVersion: number,
  }
}