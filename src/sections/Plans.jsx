import React, { Suspense } from 'react'
import { plans } from '../constants/index.js'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Components/CanvasLoader.jsx'
import DemoComp from '../Components/DemoComp.jsx'
const Plans = () => {

  const [currNum, setCurrNum] = useState(0) ;
  const currPlan = plans[currNum] ;

  const handleNavigation = (direction) =>{
    if(direction === 'previous'){
      if(currNum === 0){
        setCurrNum(3) ;
      }else{
        setCurrNum(currNum-1) ;
      }
        
    }
    else{
      if(currNum === 3){
        setCurrNum(0) ;
      }else{
        setCurrNum(currNum+1) ;
      }  
    }

  }

  return (
    <section id={'plans'}>
        <p className='head-text mx-10'>Our Plans </p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={plans[currNum].spotlight} alt='spotlight' className="w-full h-96 object-cover rounded-xl" />
                </div>

                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl' style={currPlan.logoStyle}>
                  <img src={currPlan.logo} alt='logo' className='w-10 h-10 shadow-sm' />
                </div>

                <div className="flex flex-col gap-5 text-white-600 my-5">
                  <p className="text-white text-2xl font-semibold animatedText">{currPlan.title}</p>

                  <p className="animatedText">{currPlan.desc}</p>
                  <p className="animatedText">{currPlan.subdesc}</p>
                </div>

                <div className="flex items-center justify-between mt-7">

                  <button className='arrow-btn' onClick={()=>{handleNavigation('previous')}}>
                    <img src="/assets/left-arrow.png" alt="left-arrow" />
                  </button>

                  <button className='arrow-btn' onClick={()=>{handleNavigation('next')}}>
                    <img src='/assets/right-arrow.png' alt='right-arrow' />
                  </button>

                </div>
            </div>

            <div className='border border-black-300 bg-black-200 h-96 rounded-lg md:h-full'>

              <Canvas>

                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10 , 10 , 5]} />
                <Center>
                  <Suspense fallback={CanvasLoader}>
                    <group scale={2} position={[0 , -3 , 0]} rotation={[0 , -0.10 , 0]}>
                      <DemoComp 
                        texture = {currPlan.texture}
                      />
                    </group>  
                  </Suspense>                
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
              </Canvas>

            </div>
        </div>
    </section>
  )
}

export default Plans