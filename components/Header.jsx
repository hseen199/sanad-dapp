import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <Link href="/">الرئيسية</Link>
      <Link href="/create-bond">إنشاء سند</Link>
      <Link href="/verify">توقيع السند</Link>
      <Link href="/about">من نحن</Link>
      <Link href="/team">الفريق</Link>
      <Link href="/roadmap">خارطة الطريق</Link>
      <Link href="/contact">تواصل معنا</Link>
    </nav>
  );
}