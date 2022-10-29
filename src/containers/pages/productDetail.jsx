import { useParams } from 'react-router-dom'
import Layout from '../../hocs/Layout'
import { connect } from 'react-redux'
import { get_product,
        get_related_products
} from '../../redux/actions/product'
import { useEffect, useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import ImageGallery from '../../components/product/ImageGallery'

const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      // More images...
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // More sections...
    ],
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const ProductDetail = ({
    get_product,
    get_related_products,
    product
}) =>{
    const params = useParams()
    const productId = params.productId

    useEffect(() => {
      window.scrollTo(0,0)
      get_product(productId)
      get_related_products(productId)
      
    }, [])
    
    return (
        <Layout>
            <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ImageGallery photo={product && product.photo}/>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product && product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">$ {product && product.price}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product && product.description }}
              />
            </div>

            <div className="mt-6">
              <div>
                <h3 className="text-sm text-gray-600">Color</h3>

                <fieldset className="mt-2">
                  <legend className="sr-only">
                    Choose a color
                  </legend>
                  <div className="flex items-center space-x-3">
                    
                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                      <input type="radio" name="color-choice" value="Washed Black" className="sr-only" aria-labelledby="color-choice-0-label"/>
                      <p id="color-choice-0-label" className="sr-only">
                        Washed Black
                      </p>
                      <span aria-hidden="true" className="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-1-label"/>
                      <p id="color-choice-1-label" className="sr-only">
                        White
                      </p>
                      <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    
                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                      <input type="radio" name="color-choice" value="Washed Gray" className="sr-only" aria-labelledby="color-choice-2-label"/>
                      <p id="color-choice-2-label" className="sr-only">
                        Washed Gray
                      </p>
                      <span aria-hidden="true" className="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <p className="mt-4">
                  {
                      product && 
                      product !== null &&
                      product !== undefined && 
                      product.quantity > 0 ? (
                          <span className='text-green-500'>
                              In Stock
                          </span>
                      ) : (
                          <span className='text-red-500'>
                              Out of Stock
                          </span>
                      )
                  }
              </p>

              {/* <div className="mt-4 flex sm:flex-col1">
                {loading?<button 
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                    <Loader
                    type="Oval"
                    color="#fff"
                    width={20}
                    height={20}/>
                </button>:
                <button 
                onClick={addToCart}
                className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                  Agregar al Carrito
              </button>}

                <WishlistHeart 
                product={product}
                wishlist={wishlist}
                addToWishlist={addToWishlist}
                />

              </div> */}
            </div>
          </div>
          {/* <section className='my-5 max-w-7xl'>
            <div className="grid grid-cols-5">
                  <div className="col-span-2">
                    <div>
                      
                      <button
                          className='btn btn-primary btn-sm mb-3 ml-6 mt-2 font-sofiapro-light'
                          onClick={getReviews}
                      >
                          Mostrar todas
                      </button>
                        <div
                            className='mb-1'
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterReviews(5)}
                        >
                            <Stars rating={5.0} />
                        </div>
                        <div
                            className='mb-1'
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterReviews(4.0)}
                        >
                            <Stars rating={4.0} />
                        </div>
                        <div
                            className='mb-1'
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterReviews(3.0)}
                        >
                            <Stars rating={3.0} />
                        </div>
                        <div
                            className='mb-1'
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterReviews(2.0)}
                        >
                            <Stars rating={2.0} />
                        </div>
                        <div
                            className='mb-1'
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterReviews(1.0)}
                        >
                            <Stars rating={1.0} />
                        </div>
                    </div>
                    {
                      review && isAuthenticated ? 
                      <form onSubmit={e => updateReview(e)}>
                      <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                          Add your review
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            required
                            value={comment}
                            onChange={e=>onChange(e)}
                            placeholder={review.comment}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <select
                          name="rating"
                          className="mt-4 float-right"
                          required
                          value={rating}
                          onChange={e=>onChange(e)}
                          placeholder="0 - 5">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                      </select>
                      <button
                        type="submit"
                        className="mt-4  inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Update
                      </button>
                      </form>:

                      <form onSubmit={e => leaveReview(e)}>
                      
                      <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                          Add your review
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            required
                            value={comment}
                            onChange={e=>onChange(e)}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <select
                          name="rating"
                          className="mt-4 float-right"
                          required
                          value={rating}
                          onChange={e=>onChange(e)}
                          placeholder="0 - 5">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                      </select>
                      <button
                        type="submit"
                        className="mt-4  inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add
                      </button>
                      </form>
                    }
                  </div>
                  <div className="col-span-3">
                    {reviews && reviews.map((review,index)=>(
                      <>
                      <div className="flex">
                        <div className="mx-4 flex-shrink-0">
                        <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        </div>
                        <div>
                          <Stars rating={review.rating}/>
                          <h4 className="text-lg font-bold">{review.user}</h4>
                          <p className="mt-1">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      </>
                    ))}
                  </div>

            </div>
          </section> */}
        </div>
      </div>
    </div>
        </Layout>
    )
}
const mapStateProps = state => ({
    product: state.Products.product
})
export default connect(mapStateProps, {
get_product,
get_related_products
})(ProductDetail)