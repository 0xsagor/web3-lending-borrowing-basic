import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const lendingAddress = "0xYourLendingContract";
const abi = [];

export async function depositTokens(amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(lendingAddress, abi, signer);
  await contract.deposit(amount);
}

export async function borrowTokens(amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(lendingAddress, abi, signer);
  await contract.borrow(amount);
}

export async function repayLoan(amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(lendingAddress, abi, signer);
  await contract.repay(amount);
}

export async function getLoanBalance() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(lendingAddress, abi, signer);
  return await contract.balanceOf(signer.address);
}
