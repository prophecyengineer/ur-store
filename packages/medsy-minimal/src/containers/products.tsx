import React from 'react';
import ItemCard from 'components/item-card';
import { useSearch } from 'contexts/search/use-search';
import { useSearchable } from 'helpers/use-searchable';
import NotFound from 'assets/icons/not-found';

const Products = React.forwardRef(
  ({ items }: any, ref: React.RefObject<HTMLDivElement>) => {
    const { searchTerm } = useSearch();
    const searchableItems = useSearchable(items, searchTerm, (item) => [
      item.name,
    ]);
    return (
      <div className="w-full my-10 lg:mt-60px px-4 md:px-35px" ref={ref}>
        {searchableItems.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xxl:grid-cols-3">
            {searchableItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col items-center pt-10px md:pt-40px lg:pt-20px pb-40px">
            <NotFound width="100%" />
            <h3 className="text-24px text-gray-900 font-bold mt-35px mb-0 text-center">
              No product found :(
            </h3>
          </div>
        )}
      </div>
    );
  }
);

export default Products;
