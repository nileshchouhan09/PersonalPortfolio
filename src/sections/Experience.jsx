import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { workExperiences } from '../constant'
import { div } from 'three/webgpu'
import Robot from '../components/Robot'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import Developer from '../components/Developer'

const Experience = () => {
  return (
    <section className='c-space my-2-'>
     <div className='w-full text-white-600'>
        <h3>My Work Experience</h3>

        <div className='work-container'>
            <div className='work-canvas h-96'>
                <Canvas>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={2}/>
                    
                   <Suspense fallback={<CanvasLoader/>}>
                    <Robot/>
                   </Suspense>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                </Canvas>
            </div>

            <div className='work-content'>
                <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                    {/* {
                        workExperiences.map((work,index)=>(
                            <div>

                            </div>
                        ))
                    } */}
                </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Experience
