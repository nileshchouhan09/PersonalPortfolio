
import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

export default function Java(props) {
  const { nodes, materials } = useGLTF('/models/c.glb')
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null}>
      <group scale={0.00045} position={[-6,5,0]} rotation={[0,0.2,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['C++_C++_0'].geometry}
          material={materials.material}
          position={[0, 0, 199.569]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
    </Float>
  )
}

useGLTF.preload('/models/c.glb')
