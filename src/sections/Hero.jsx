import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Gym  from '../Components/Gym'    
import CanvasLoader from '../Components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Headphone from '../Components/Headphone'
import Ball from '../Components/Ball'
import Dumbbells from '../Components/Dumbbells'
import Rings from '../Components/Rings'
import ReactLogo from '../Components/ReactLogo'
import HeroCam from '../Components/HeroCam'
import Ex1 from '../Components/ex1' 
const Hero = () => {


    
    //Media Query for the screen size of mobile ; 
    const isMobile = useMediaQuery({maxWidth : 768}) 
    const isTablet = useMediaQuery({minWidth : 768 , maxWidth : 1024})
  return (
    <section className="min-h-screen w-full outline-blue-500 flex flex-col relative">
        <div className='flex flex-col w-full mx-auto sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm-text-5xl font-medium text-red-500 text-center font-generalsans'>Work Out Anywhere , Anytime , On any device <span className='waving-hand'>💪🏼</span></p>
            <p className='text-gray_gradient hero_tag'> STRENGTH, CARDIO, YOGA, HIIT, DANCE AND MORE </p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 40]} ></PerspectiveCamera>
                    <HeroCam isMobile={isMobile}>
                        <Gym 
                    //These three below are default setting for when we open on laptop but we 
                    //need to adjust acc to the creen size as well , so we will use media query
                        // scale = {1.10} 
                            scale = {isMobile ? 0.4 : isTablet ? 0.6 : 1}
                            position = { [ 1 , isMobile ? 2 : -4.5 , 3.5]}
                            rotation = { [ 0.2 , -0.8 , 0 ]}
        
                        />
                        
                        
                    </HeroCam>
                    <group>
                    
                        <Headphone 
                            className = "waving-hand"
                            position={[25.3 , 6.5 , 0.1]}
                            scale={0.64}
                            rotation = {[0.4 , -1 , 6.2]}
                        />
                        <Rings  
                            position={[ -78 , 14 , -56 ]}
                            scale={3}
                            rotation = {[ 2 , 1.2 , 1.8]}
                        />
                        <Ball 
                            position={[24.1 , -5.3 , -2.3]}
                            scale={11.84}
                            rotation = {[ 8.2 , -2.8, 6.8]}
                        />
                        <ReactLogo  
                            position={[-1600 , -500 , -2000]}
                            scale={70}
                            rotation = {[0 , 0 , 6]}// No rotation (or adjust as needed)
                            // position={[-1610 , -570 , -2005]}
                            // scale={[0.39 , 0.39 , 0.5]}
                            // rotation = {[0 , 0 , -Math.PI/2]}
                            // position={[x.positionX , x.positionY , x.positionZ]}
                            // scale={x.scale}
                            // rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
                        />
                    </group>
                    <ambientLight intensity={1}/>
                    
                    <directionalLight 
                        position={[10,10,10]} 
                        intensity={0.5}
                    />
                </Suspense>
            </Canvas>
        </div>

    </section>
  )
}
export default Hero;