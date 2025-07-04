import { create } from 'ipfs-http-client';

const ipfs = create({ url: 'https://ipfs.io' });

export async function uploadToIPFS(content) {
  const { cid } = await ipfs.add(content);
  return cid.toString();
}