//0x98bd7bfb165c382505b2c4ebdf2bfee8e6bbfede
import abi from "./contracts/chai.json";
import { useState, useEffect } from "react";
import './App.css';
import Buy from "./components/buys";
import Memos from "./components/Memos";
const ethers = require("ethers")


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  // const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x931eD8bCc2a319Ad3A2Ff8dE3E07cba75C137a7F";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }
          // window.ethereum.on("chainChanged", () => {
          //   window.location.reload();
          // });

          // window.ethereum.on("accountsChanged", () => {
          //   window.location.reload();
          // });
          
          await window.ethereum.enable()
          const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
          
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
          // setAccount(account);
          setState({ provider, signer, contract });
          // } else {
          // alert("Please install metamask");
          // }
        } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
return (
    <div className="App">
        <Buy state = {state}> </Buy>
    </div>
  );
}

export default App;
