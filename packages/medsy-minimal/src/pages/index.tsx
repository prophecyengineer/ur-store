import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import HeroBlock from 'containers/banner/hero-block';
import Products from 'containers/products';
import InstagramReview from 'containers/instagram-review';
import { getProducts } from 'helpers/get-products';
import { useRefScroll } from 'helpers/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';

export default function Home({ products }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();

  useEffect(() => {
    if (searchTerm) return scroll();
  }, [scroll, searchTerm]);

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>Medsy</title>
      </Head>

      <HeroBlock />
      <Products items={products} ref={elRef} />
      <InstagramReview />
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
