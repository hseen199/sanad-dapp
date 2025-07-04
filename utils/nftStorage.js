import { NFTStorage, File } from 'nft.storage';

const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY });

export async function saveToNFTStorage(content) {
  const blob = new Blob([content], { type: 'text/plain' });
  const cid = await client.storeBlob(blob);
  return cid;
}