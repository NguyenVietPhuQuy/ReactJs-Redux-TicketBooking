import React from 'react'
import { useSelector } from 'react-redux'

export default function Result() {
  const productSelected = useSelector(state => state.products.productSelected)
  console.log(productSelected)
  return (
    <div>
      <h3 className='mb-2'>KẾT QUẢ ĐẶT VÉ</h3>
      <div className='table'>
        <table className='w-full' >
          <thead>
            <tr className='w-full'>
              <td className='w-[50%]'>số ghế</td>
              <td className='w-[50%]'>giá tiền</td>
            </tr>
          </thead>
          <tbody >
              {productSelected.map(item=>{
                return(
                  <tr>
                    <th>{item.chairNumber}</th>
                    <th>{item.price}</th>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className='mt-2'><span className=' text-right block'>Thành Tiền:{productSelected.reduce((total,item)=>{ return( total += item.price)},0)}</span></div>
      </div>
    </div>
  )
}
