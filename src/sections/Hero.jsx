import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import  { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import Cube from "../components/Cube";
import HackerRoom from "../components/HackerRoom";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Rings";

import { calculateSizes } from "../constant";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Java from "../components/Java";


const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen  flex w-full flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-center font-generalsans">
          Hi, I am Nilesh <span className="waving-hand">👋</span>
        </p>

        <p className="text-gray_gradient hero_tag">
          Building Web & Mobile Application{" "}
        </p>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <Suspense fallback={<CanvasLoader />}>
             <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0.2, -3.2, 0]}
                scale={sizes.deskScale}
                
              />
             </HeroCamera >
              <group>
              <Java position={sizes.targetPosition}/>
                
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Rings position={sizes.ringPosition}/>
                <Cube position={sizes.cubePosition}/>
              </group>
            <directionalLight position={[20, 5, -10]} intensity={20} />

           

              <ambientLight intensity={5} />
            </Suspense>
          </Canvas>
        </div>


        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center items-center">
          <a href="#about">
            <Button name ="Let's work together" isBeam containerClass = "sm:w-fit w-full sm:min-w-95"/>
              
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
