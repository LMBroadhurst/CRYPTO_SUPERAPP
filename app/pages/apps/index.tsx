import React from "react";
import Header from "@/components/apps/Header";
import UniswapV1View from "@/components/apps/uniswapv1/UniswapV1View";
import Footer from "@/components/global/Footer";

type OwnProps = {};

const Index: React.FC<OwnProps> = () => {

    // TODO: Work out code that is required and what can be abstracted 

//     const [walletConnected, setWalletConnected] = useState(false)

//   const dispatch = useDispatch()
//   const { _signer, connectSigner } = useGetSigner()

//   const getProvider = async (): Promise<ethers.BrowserProvider | undefined> => {
//     try {
//       const { ethereum } = window;
//       return new ethers.BrowserProvider(ethereum as MetaMaskInpageProvider);

//     } catch (error) {
//       console.log("Error with the getProvider method: ", error)
//     }
//   }


//   const addAddressToWhitelist = async (event: any) => {
//     event.preventDefault()

//     try {
//       await connectSigner()
//       const contract = new ethers.Contract(WHITELIST_CONTRACT_ADDRESS, ABI.abi, _signer)
//       const tx = await contract.addAddressToWhitelist()
//       await tx.wait()
//       await getNumberOfWhitelisted();

//     } catch (error) {
//       console.log("Error with the addAddressToWhitelist method: ", error)
//     }
//   };

//   const getNumberOfWhitelisted = async () => {

//     try {
//       const provider = await getProvider()

//       const contract = new ethers.Contract(WHITELIST_CONTRACT_ADDRESS, ABI.abi, provider)
//       const numberOfWhitelisted = await contract.numberOfAddressesWhitelisted()
//       console.log("numberOfWhitelisted", numberOfWhitelisted.toString())

//       dispatch(setNumberOfWhitelistedAddresses(numberOfWhitelisted.toString()))

//     } catch (error) {
//       console.log("Error with the getNumberOfWhitelisted method: ", error)
//     }
//   };

//   const checkIfAddressInWhitelist = async () => {
//     try {
//       await connectSigner()

//       if (!_signer) {
//         throw new Error("Signer is not defined");
//       }

//       const whitelistContract = new ethers.Contract(WHITELIST_CONTRACT_ADDRESS, ABI.abi, _signer);
//       const address: string = await _signer.getAddress();
//       const _joinedWhitelist = await whitelistContract.whitelistedAddresses(address);
//       console.log("joinedWhitelist", _joinedWhitelist);

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const connectWallet = async () => {
//     try {
//       await connectSigner();
//       await checkIfAddressInWhitelist();
//       await getNumberOfWhitelisted();
//       setWalletConnected(true)
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     if (!walletConnected) {
//       connectWallet();
//     }
//   }, [])




    return (
        <main className={'flex flex-col justify-between h-screen'}>
            <Header />
            <UniswapV1View />
            <Footer />
        </main>
    );
}

export default Index;