import React from 'react';
// import 'react-spring-modal/dist/index.css';
import 'rc-collapse/assets/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'react-multi-carousel/lib/styles.css';

import 'assets/styles/index.css';
import { CartProvider } from 'contexts/cart/cart.provider';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import { StickyProvider } from 'contexts/sticky/sticky.provider';
import { SearchProvider } from 'contexts/search/use-search';
import 'typeface-open-sans';

export default function CustomApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <StickyProvider>
        <DrawerProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </DrawerProvider>
      </StickyProvider>
    </SearchProvider>
  );
}
