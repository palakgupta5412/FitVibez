import React from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
  return (
    <section id={'reviews'} className='c-space my-20 '>
        <h3 className='head-text '>Hear from our clients</h3>

        <div className='client-container '>
            {clientReviews.map(({id , name , review , img})=>(
                <div key={id} className='rounded-xl bg-black-300'>
                    <div>
                        <p className='client-review py-0 text-white'>{review}</p>
                    </div>
                    <div className='flex items-center gap-2 pb-5 pl-5'>
                        <img src={img} alt={name} className='w-16 h-16 rounded-full' />
                        <p className='client-name text-white sm:mr-6 md:mr-14 lg:mr-60'>{name}</p>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <p className='flex text-white place-items-right mt-10'>...See More</p>
    </section>
  )
}
export default Clients