
import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Robot = ({ animationName = "waving", ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/late_-_cuterobotchallenge.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');
  const { animations: wavingAnimation } = useFBX('/models/animations/Waving.fbx');
//   const { animations: spinAnimation } = useFBX('/models/animations/Spin.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';
  wavingAnimation[0].name = 'waving';

  const { actions } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0],wavingAnimation[0]],
    group,
  );

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);
  return (
    <group ref={group} {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={150}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            material={materials.Mat_Black}
            skeleton={nodes.Object_8.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_10.geometry}
            material={materials.Mat_Screen}
            skeleton={nodes.Object_10.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_11.geometry}
            material={materials.Mat_ScreenInner}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_13.geometry}
            material={materials.Mat_FaceRender}
            skeleton={nodes.Object_13.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_60.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_60.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_61.geometry}
            material={materials.Mat_Black}
            skeleton={nodes.Object_61.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_63.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_63.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_64.geometry}
            material={materials.Mat_White}
            skeleton={nodes.Object_64.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_66.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_66.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_67.geometry}
            material={materials.Mat_Black}
            skeleton={nodes.Object_67.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_69.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_69.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_70.geometry}
            material={materials.Mat_Black}
            skeleton={nodes.Object_70.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_72.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_72.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_73.geometry}
            material={materials.Mat_Black}
            skeleton={nodes.Object_73.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_75.geometry}
            material={materials.Mat_Orange}
            skeleton={nodes.Object_75.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_76.geometry}
            material={materials.Mat_Black}
            skeleton={nodes.Object_76.skeleton}
          />
        </group>
        <group position={[-165.174, 170.409, 41.396]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chat_Bubble_Mat_Bubble_0.geometry}
            material={materials.Mat_Bubble}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dots_Mat_Black_0.geometry}
            material={materials.Mat_Black}
          />
        </group>
      </group>
    </group>
  </group>
  )
}

useGLTF.preload('/models/late_-_cuterobotchallenge.glb')

export default Robot;