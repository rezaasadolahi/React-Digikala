import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//* Icon
import { AiOutlineCloseCircle } from "react-icons/ai"
//* CSS
import './CSS/Compareproducts.css'







function Compareproducts() {
  const [modal, setModal] = useState(false)
  const [infoItem, setInfoItem] = useState('')
  const ProductDetail = useSelector(state => state.GetProductDetail.Product)
  const DataProduct = useSelector(state => state.Get_Data_Product.DataProduct)

  //* Modal Select Product for Compare
  const handleModal = () => setModal(!modal)

  //* When click on item in modal box
  const handleItemInModal = (item) => {
    setInfoItem(item)
    setModal(!modal)
  }



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
            {
              infoItem === '' ?
                <section id='ManageModal'>
                  <section id='selectProduct' onClick={handleModal}>Icon: Open modal</section>
                  <section id={modal ? 'boxModal-on' : 'boxModal-off'}>
                    <AiOutlineCloseCircle
                      id={modal ? 'icon-closeBoxModal-on' : 'icon-closeBoxModal-off'}
                      onClick={handleModal}
                    />
                    <section className={modal ? 'modal-on' : 'modal-off'}>
                      {
                        DataProduct.map(item => {
                          return (
                            <div key={item.id} onClick={() => handleItemInModal(item)} id="items" className="mt-5 mb-5">
                              <img src={item.imgsrc} alt="Image Producs" width="200" height="200" />
                              <p>{item.MoshaKhasat_EN}</p>
                            </div>
                          )
                        })
                      }
                    </section>
                  </section>
                </section>
                :
                null
            }
            {
              infoItem !== '' ?
                <section>
                  <img src={infoItem.imgsrc} alt="image Product" width="200" height="200" />
                  <ul className='list-group'>
                    <li className='list-group-item mt-1'>{infoItem.MoshaKhasat_EN}</li>
                    <li className='list-group-item'>{infoItem.MoshakhasatKamel}</li>
                  </ul>
                </section>
                :
                null
            }
          </section>
        </section>
      </div>
    </>
  )
}


export default Compareproducts