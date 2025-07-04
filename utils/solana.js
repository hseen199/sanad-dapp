import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));

export async function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    const resp = await window.solana.connect();
    return resp.publicKey.toString();
  } else {
    alert('Please install Phantom Wallet');
    return null;
  }
}