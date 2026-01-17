import { connectWallet } from "./web3.js";
import { depositTokens, borrowTokens, repayLoan, getLoanBalance } from "./lending.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  const balance = await getLoanBalance();
  document.getElementById("status").innerText =
    "Wallet connected. Loan balance: " + balance;
};

document.getElementById("depositBtn").onclick = async () => {
  const amount = document.getElementById("amountInput").value;
  await depositTokens(amount);
  alert("Tokens deposited");
};

document.getElementById("borrowBtn").onclick = async () => {
  const amount = document.getElementById("amountInput").value;
  await borrowTokens(amount);
  alert("Tokens borrowed");
};

document.getElementById("repayBtn").onclick = async () => {
  const amount = document.getElementById("amountInput").value;
  await repayLoan(amount);
  alert("Loan repaid");
};
