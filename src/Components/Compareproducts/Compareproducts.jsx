import React, { useState } from 'react'
import { useSelector } from 'react-redux'

//* CSS
import './CSS/Compareproducts.css'



function Compareproducts() {
  const [modal, setModal] = useState(false)

  const ProductDetail = useSelector(state => state.GetProductDetail.Product)
  const DataProduct = useSelector(state => state.Get_Data_Product.DataProduct)

  //* Modal Select Product for Compare
  const handleModal = () => setModal(!modal)




  return (
    <>
      <div id='manageCompare'>
        <section>
          {/* Box 1 */}
          <section id='box1'>
            <img src={ProductDetail.imgsrc} alt="image Product" width="200" height="200" />
            <ul className='list-group'>
              <li className='list-group-item mt-1'>{ProductDetail.MoshaKhasat_EN}</li>
              <li className='list-group-item'>{ProductDetail.MoshakhasatKamel}</li>
            </ul>
          </section>
          {/* Box 2 */}
          <section id='box2'>
            <section id='ManageModal'>
              <section id='selectProduct' onClick={handleModal}>Icon: Open modal</section>

              <section id={modal ? 'boxModal-on' : 'boxModal-off'}>
                <h2 id={modal ? 'icon-closeBoxModal-on' : 'icon-closeBoxModal-off'} onClick={handleModal}>X</h2>
                <section className={modal ? 'modal-on' : 'modal-off'}>
                  {
                    DataProduct.map(item => {
                      return (
                        <div key={item.id} className="mt-5 mb-5">
                          <img src={item.imgsrc} alt="Image Producs" width="250" height="250" />
                        </div>
                      )
                    })
                  }
                </section>
              </section>

            </section>



          </section>
        </section>
      </div>
    </>
  )
}


export default Compareproducts