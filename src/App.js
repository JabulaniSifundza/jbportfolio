import React, {Suspense, useRef, useEffect} from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber';
import {useGLTF, PerspectiveCamera, OrbitControls, Loader, Html, useAnimations} from '@react-three/drei';


export function DaOu(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/typing.glb')
	const { actions } = useAnimations(animations, group)
	console.log(actions)

	useEffect(()=>{
		actions['Armature|mixamo.com|Layer0'].play();
	})
	
	return (
	  <group ref={group} {...props} dispose={null}>
		<group name="Scene" position={[10, -50, 8]} scale={100}>
		  <group name="Armature">
			<primitive object={nodes.Hips} />
			<skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
			<skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
			<skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
			<skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
			<skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
			<skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
			<skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
			<skinnedMesh name="Wolf3D_Beard" geometry={nodes.Wolf3D_Beard.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences} />
			<skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
			<skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
		  </group>
		</group>
	  </group>
	)
}


export function Keyboard(props) {
	const { nodes, materials } = useGLTF('/keyboard.glb')
	return (
	  <group {...props} dispose={null}>
		<group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01}>
		  <mesh geometry={nodes.keyboard.geometry} material={materials.wireframe} />
		  <mesh geometry={nodes.keys.geometry} material={materials.wireframe} />
		</group>
	  </group>
	)
}

export function Monitor(props) {
	const { nodes, materials } = useGLTF('/monitor.glb')
	return (
	  <group {...props} dispose={null}>
		<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
		  <mesh geometry={nodes['monitor-screen'].geometry} material={materials.Default} />
		  <mesh geometry={nodes['monitor-stand'].geometry} material={materials.Default} />
		</group>
	  </group>
	)
}


export function PortfolioBag(props) {
	const { nodes, materials } = useGLTF('/portfolioBrownLeather.glb')
	return (
	  <group {...props} dispose={null}>
		<group position={[10, -60, 5]} rotation={[Math.PI / 2, 0, 0]} scale={2.1}>
		  <mesh geometry={nodes['body-close'].geometry} material={materials.Default} />
		  <mesh geometry={nodes.brooch_2.geometry} material={materials.Default} />
		  <mesh geometry={nodes['brooch-base'].geometry} material={materials.Default} />
		  <mesh geometry={nodes['handle_(2)'].geometry} material={materials.Default} />
		</group>
	  </group>
	)
  }

export function Lanyard(props) {
	const { nodes, materials } = useGLTF('/lanyard.glb')
	return (
	  <group {...props} dispose={null}>
		<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
		  <mesh geometry={nodes['cover-vertical'].geometry} material={materials['trnasparente.001']} />
		  <mesh geometry={nodes.headband.geometry} material={materials['FABRIC 1_FRONTU3.001']} />
		  <mesh geometry={nodes.Hook.geometry} material={materials['Hook.002']} position={[0, -4.12, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
		  <mesh geometry={nodes.paper.geometry} material={materials['Card.002']} />
		  <mesh geometry={nodes.support.geometry} material={materials['Hook.002']} />
		</group>
	  </group>
	)
}

export function Envelope(props) {
  const { nodes, materials } = useGLTF('/message.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes['envelope-001-a'].geometry} material={materials['Default.003']} />
        <mesh geometry={nodes['gift-card-001-a001'].geometry} material={materials['card.001']} />
        <mesh geometry={nodes.sticker.geometry} material={materials['sticker.001']} />
      </group>
    </group>
  )
}


function App() {
  return (

	<div>
	<Canvas>
		<Suspense fallback={null}>
			<ambientLight intensity={0.1} />
			<pointLight position={[10, 10, 50]}  />
			<DaOu />
			<PortfolioBag />
			<PerspectiveCamera makeDefault aspect={1200 / 600} position={[50, 150, 80]} fov={100}/>
			<OrbitControls />
		</Suspense>
	</Canvas>
	<Loader />
	</div>
	
	
   
  );
}

export default App;
