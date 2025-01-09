import React from 'react'

const Footer = () => {
  return (
    <section className='my-20 c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>

            <p> Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>

        </div>

        <div className='flex gap-6'>
            <div className='social-icon'>
                <img src="/assets/twitter.svg" alt="facebook" className='h-1/2 w-1/2' />
            </div>
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="github" className='h-1/2 w-1/2' />
            </div>
            <div className='social-icon'>
                <img src="/assets/instagram.svg" alt="instagram" className='h-1/2 w-1/2' />
            </div>
        </div>
        <p className='text-white'> © 2025 FitVibez . All Rights Reserved</p>
    </section>
  )
}

export default Footer