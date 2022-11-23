import React from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeSelected } from './Action/HandleAction'


export default function Chair(props) {
    const {chairNumber ,booking} =props.item
    const selectedProduct = useSelector(state => state.products.productSelected)
    const dispatch = useDispatch()
    const handleChangeSeat = (item)=>{
      const action = ChangeSelected(item)
      dispatch(action)
    }
  return (
    <div>
       <button className= 
       {clsx('font-semibold btn shadow w-16 m-0.5 hover:bg-black hover:text-white hover:font-semibold',
       {'bg-green-400 hover:bg-green-400':booking},
       {'booked bg-yellow-300':selectedProduct.find(select=> select.chairNumber ===chairNumber)}
       )} disabled={booking} 
       onClick={()=>{handleChangeSeat(props.item)}}
       >{chairNumber}</button>
    </div>
  )
}
