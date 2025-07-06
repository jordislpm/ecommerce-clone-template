import CategoryList from "../components/share/CategoryList"
import ProductList from "../components/share/ProductList"
import Slider from "../components/share/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-8">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList categoryId="1"/>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
           <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList categoryId="1"/>
      </div>

    </div>
  )
}

export default HomePage