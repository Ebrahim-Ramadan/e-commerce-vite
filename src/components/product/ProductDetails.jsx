import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { getProductRecommendations } from '~/utils'
import { GridTileImage } from '../grid/tile'
import { Gallery } from './gallery'
import { ProductDescription } from './product-description'

export const ProductDetails = () => {
    const { id } = useParams();
  return (
    <div>
         <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.map((image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
    </div>
  )
}


async function RelatedProducts() {
    const relatedProducts = await getProductRecommendations();
  
    if (!relatedProducts.length) return null;
  
    return (
      <div className="py-8">
        <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
        <ul className="flex w-full gap-4 overflow-x-auto pt-1">
          {relatedProducts.map((product) => (
            <li
              key={product['id']}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <a
                className="relative h-full w-full"
                href={`/product/${product['id']}`}
                prefetch={true}
              >
                <GridTileImage
                  alt={product['title']}
                  label={{
                    title: product.title,
                    amount: '57',
                    currencyCode: 'EGP'
                  }}
                  src={product['thumbnailUrl']}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  