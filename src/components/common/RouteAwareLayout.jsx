'use client';

import { usePathname } from 'next/navigation';
import Header from '@/src/components/common/Header';
import Footer from '@/src/components/common/Footer';

export default function RouteAwareLayout({ children }) {
  const pathname = usePathname();
  const hideNav = pathname?.startsWith('/checkout');

  return (
    <>
      {!hideNav && <Header />}
      {children}
      {!hideNav && <Footer />}
    </>
  );
}
