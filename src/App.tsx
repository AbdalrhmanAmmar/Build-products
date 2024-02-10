import { useState } from "react";
import logoImage from "./assets/react.svg";
import { Modal } from "./components/layout";
import ProductForm from "./components/products";
const App = ()=>{
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };


  return (
    <>
     <div className="flex justify-center items-center m-20">
          <button onClick={modalHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
     </div>
     <div>
      <img src={logoImage} alt="logo image!" style={{ width:"490px", height:"200px", border:"2px solid red",borderRadius:"12px",}} />
     </div>
    <Modal show={showModal} closeFunc={modalHandler}>

      <ProductForm />

    </Modal>
    </>
  );
}

export default App;
