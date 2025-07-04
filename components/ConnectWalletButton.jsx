'use client';
import { useEffect, useState } from 'react';
import { connectWallet } from '../utils/solana';

export default function ConnectWalletButton() {
  const [address, setAddress] = useState('');

  const handleConnect = async () => {
    const addr = await connectWallet();
    if (addr) setAddress(addr);
  };

  return (
    <div>
      <button onClick={handleConnect}>اتصال بالمحفظة</button>
      {address && <p>العنوان: {address}</p>}
    </div>
  );
}