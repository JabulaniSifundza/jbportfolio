import React, {Suspense, useRef, useEffect} from 'react';
import * as THREE from 'three';
import './App.css';
import {Canvas, useFrame} from '@react-three/fiber';
import {useGLTF, PerspectiveCamera, Loader, useAnimations, OrbitControls, Html} from '@react-three/drei';

import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';

export function TheOu(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/DaOuTyping.glb')
	const { actions } = useAnimations(animations, group)
	useEffect(()=>{
		actions['Armature|mixamo.com|Layer0'].play();
	})
	return (
	  <group ref={group} {...props} dispose={null}>
		<group name="Scene" position={[10, 120, 8]} scale={110}>
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
		<group rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[10, 120, 8]} scale={2}>
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
		<group rotation={[Math.PI / 2, 0, 0]} position={[10, 120, 8]} scale={2}>
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
	const group = useRef()
	const { nodes, materials } = useGLTF('/lanyard.glb')
	useFrame((state) => {
		const t = state.clock.getElapsedTime()
		group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
		group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
		group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
		group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1)
	  })
	return (
	  <group {...props} dispose={null} ref={group}>
		<group rotation={[Math.PI / 2, 0, 0]} scale={10} position={[5, 80, 20]} >
		  <mesh geometry={nodes['cover-vertical'].geometry} material={materials['trnasparente.001']} />
		  <mesh geometry={nodes.headband.geometry} material={materials['FABRIC 1_FRONTU3.001']} />
		  <mesh geometry={nodes.Hook.geometry} material={materials['Hook.002']} position={[0, -4.12, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
		  <mesh geometry={nodes.paper.geometry} material={materials['Card.002']} >
			<Html className="content" rotation-x={-Math.PI / 68} position={[0, 0.05, -0.09]} transform occlude>
				<div className="wrapper">
					<p>Da Ou is here</p>
				</div>
			</Html> 
			</mesh>
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
	   <Header />
	   <div className="introduction">
	   <Introduction />
	   <Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[20, 50, 10]}  />
				<TheOu />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[20, 200, 180]} fov={80}/>
			</Suspense>
		</Canvas>
		
	   </div>

	   <div className="info">
			<Canvas className="lanyard">
				<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[20, 50, 10]}  />
				<Lanyard />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[15, 200, 90]} fov={80}/>
				<OrbitControls />
			</Suspense>
			</Canvas>
			<AboutMe />
	   </div>

	   <Canvas className="keyboard">
		<Suspense fallback={null}>
		<ambientLight intensity={0.4} />
		<pointLight position={[20, 50, 10]}  />
		<Monitor />
		<PerspectiveCamera makeDefault aspect={1200 / 600} position={[15, 200, 90]} fov={80}/>
		<OrbitControls />
		</Suspense>
	   </Canvas>
	   <Loader />
	</div>
  );
}

export default App;
