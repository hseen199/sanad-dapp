# SANAD Protocol DApp

هذا المشروع مبني باستخدام Next.js ويحتوي على:
- صفحات رئيسية وفرعية (إنشاء سند، توقيع، معلومات)
- تكامل مع Phantom Wallet
- توليد PDF ورفع إلى IPFS

## إعداد المشروع

1. تثبيت التبعيات:
   ```
   npm install
   ```

2. إعداد متغيرات البيئة في `.env.local`:
   ```
   NEXT_PUBLIC_NFT_STORAGE_KEY=7f47426b.1fde9135a6a34def81fb9626c152585d
   NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
   NEXT_PUBLIC_SNDX_MINT=2z9M1AMb7eNhJgoh48cPNMQV4BwcHmUz1YMysiYQkYU7
   ```

3. تشغيل المشروع محلياً:
   ```
   npm run dev
   ```