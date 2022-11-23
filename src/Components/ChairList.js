import React from 'react'
import { useSelector } from 'react-redux'
import Chair from './Chair'
function ChairList() {
  const ProductList = useSelector(state => state.products.product)
  // const dispatch = useDispatch()
  // console.log(dispatch)
  return (
    <div>
      {ProductList.map((item) => {
        return (
          <div key={item.rank} className='flex flex-row p-2 w-full items-center justify-center'>
            <div className='items-center justify-center mr-3 font-bold text-red-500'>{item.rank}</div>
            <div className='flex '>{item.chairList.map((item) => {
              return (
                <div key={item.chairNumber}>
                  <div><Chair item={item} /></div>
                </div>)
            })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ChairList
// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// class ChairList extends Component {
//   render() {
//     const{ProductList}=this.props

//     return (
//       <div>
//         {ProductList.map(item=>{
//           console.log(item.chairList)
//         return(
//           <div>
//            <div>{item.rank}</div>
//             <div>{item.chairList.map(chair=>{return <Chair chair={chair}/>})}</div>
//           </div>)
//         })}
//       </div>

//     )
//   }
// }
// const mapStateToProps = (state)=>{
//   return {
//     ProductList: state.products.product
//   }
// }
// export default connect(mapStateToProps)(ChairList)