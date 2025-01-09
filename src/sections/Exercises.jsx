import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Components/CanvasLoader'
import Ex1 from '../Components/ex1'

const Exercises = () => {
  return (
    <section className='c-space my-20'>
        <div className='w-full text-white-600 '>
            <div className='grid gap-6 grid-rows-2 sm:grid-rows-4 grid-cols-1 sm:grid-cols-2'>
                <div className='work-canvas sm:row-span-4'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penubra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} 
                        maxPolarAngle={Math.PI / 2} 
                        minPolarAngle={Math.PI / 2}/>
                        <Suspense fallback={CanvasLoader}>
                            <Ex1 
                            />
                        </Suspense> 
                    </Canvas>
                </div>
                
                
                <div className='work-canvas sm:row-span-4'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penubra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} 
                        maxPolarAngle={Math.PI / 2} 
                        minPolarAngle={Math.PI / 2}/>
                        <Suspense fallback={CanvasLoader}>
                            <Ex1 />
                        </Suspense> 
                    </Canvas>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercises