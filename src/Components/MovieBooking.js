import Result from './Result'
import React from 'react'
import ChairList from './ChairList'


 function MovieBooking() {
  return (
    <div className='container p-9'>
        <h2 className='text-center mt-3 font-bold'>Booking movies</h2>
        <div className='grid grid-cols-6 gap-4 text-center'>    
            <div className='col-span-4 my-8 text-xl shadow-xl'>
                <div className='bg-gradient-to-r from-zinc-400  via-orange-400 hover:bg-gradient-to-l to-emerald-200 
                 hover:ease-in duration-1000 text-white rounded-t-2xl text-3xl justify-center block items-center '>
                    screen
                </div>
                <ChairList/>
            </div>
            <div className='col-span-2 my-8 text-xl'>
                <Result/>
            </div>
        </div>
    </div>
  )
}

export default MovieBooking
