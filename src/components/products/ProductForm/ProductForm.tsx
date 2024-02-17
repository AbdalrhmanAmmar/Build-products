import Button from "../../common/Button"



const ProductForm = ()=>{
  return (
    <>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">ADD A NEW PRODUCT</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Title</label>
          <input type="text" id="productName" className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Product Description</label>
          <input type="text" id="productDescription" className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="productImageUrl" className="block text-sm font-medium text-gray-700">Product Image URL</label>
          <input type="text" id="productImageUrl" className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Product Price</label>
          <input type="number" id="quantity" className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select id="category" className="mt-1 p-2 block w-full rounded-md border border-gray-300">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
        </div>
        <div className="flex">
         <Button Color="indigo" className="mr-4">Submit</Button><Button Color="red"> Cancel </Button>
       </div>
      </form>
    </div>
    </>
  )
}

export default ProductForm