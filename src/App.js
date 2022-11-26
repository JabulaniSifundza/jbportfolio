import React, {Suspense, useRef, useEffect} from 'react';
import * as THREE from 'three';
import './App.css';
import {Canvas, useFrame} from '@react-three/fiber';
import {useGLTF, PerspectiveCamera, Loader, useAnimations, OrbitControls, Html} from '@react-three/drei';

import Header from './components/Header';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import LanyardDetails from './components/LanyardDetails';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import SkillsTitle from './components/SkillsTitle';
import PortfolioTitle from './components/PortfolioTitle';
import GetInTouch from './components/GetInTouch';
import GetInTouchTitle from './components/GetInTouchTitle';
import Footer from './components/Footer';


export function TextMe(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/Take2.glb')
	const { actions } = useAnimations(animations, group)
	useEffect(()=>{
		actions['Armature|mixamo.com|Layer0'].play();
	},[actions])
	return (
	  <group ref={group} {...props} dispose={null}>
		<group name="Scene" position={[-60, -80, 8]} scale={80}>
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


export function Skills(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/mySkills.glb')
	const { actions } = useAnimations(animations, group)
	useEffect(()=>{
		actions['Armature|mixamo.com|Layer0'].play();
	},[actions])
	return (
	  <group ref={group} {...props} dispose={null}>
		<group name="Scene" position={[10, 29, 8]} scale={105}>
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
			<skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Material.001']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
			<skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
		  </group>
		</group>
	  </group>
	)
  }

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




export function PortfolioBag(props) {
	const { nodes, materials } = useGLTF('/portfolioBrownLeather.glb')
	return (
	  <group {...props} dispose={null}>
		<group position={[5, -60, 5]} rotation={[Math.PI / 2, 0, 0]} scale={2.1}>
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
		group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.2)
		group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.2)
		group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.2)
		group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.2)
	  })
	return (
	  <group {...props} dispose={null} ref={group}>
		<group rotation={[Math.PI / 2, 0, 0]} scale={10} position={[5, 100, 20]} >
		  <mesh geometry={nodes['cover-vertical'].geometry} material={materials['trnasparente.001']} />
		  <mesh geometry={nodes.headband.geometry} material={materials['FABRIC 1_FRONTU3.001']} />
		  <mesh geometry={nodes.Hook.geometry} material={materials['Hook.002']} position={[0, -4.12, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
		  <mesh geometry={nodes.paper.geometry} material={materials['Card.002']} >
			<Html className="content" rotation-x={Math.PI / 1} rotation-z={Math.PI / 280} position={[0, 0.05, -0.09]} transform occlude>
				<div className="wrapper">
					<LanyardDetails />
				</div>
			</Html> 
			</mesh>
		  <mesh geometry={nodes.support.geometry} material={materials['Hook.002']} />
		</group>
	  </group>
	)
}

export function Contact(props) {
	const { nodes, materials } = useGLTF('/contact.glb')
	return (
	  <group {...props} dispose={null}>
		<mesh geometry={nodes.message002.geometry} material={materials.Material} position={[-280, 80, -200]} scale={[-10, 10, 10]} />
		<mesh geometry={nodes.message.geometry} material={materials['Material #26']} scale={10} />
	  </group>
	)
  }


function App() {
  return (
	<div className="">
	   <Header />
	   <div className="introduction">
	   <Introduction />
	   <Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[20, 50, 80]}  />
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

		<SkillsTitle />

	   <div className="skills">
			<MySkills />
			<Canvas>
				<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[10, 40, 90]}  />
				<Skills />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[5, 160, 200]} fov={80}/>
				</Suspense>
			</Canvas>
	   </div>

	   <PortfolioTitle />
	   <div className="projects">
	   		<Canvas>
				<Suspense fallback={null}>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 0, 180]}  />
						<PortfolioBag />
					<PerspectiveCamera makeDefault aspect={1200 / 600} position={[5, -5, 100]} fov={80}/>
				</Suspense>
			</Canvas>
			<Projects />
	   </div>

	   <GetInTouchTitle />

		<div className="contactDetails">
			<GetInTouch />
		</div>

	   <Canvas className="contact">
			<Suspense fallback={null}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 0, 180]}  />
					<TextMe />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[-60, 0, 150]} fov={70}/>
			</Suspense>
	   </Canvas>

	   <Footer />
	   <Loader />
	</div>
  );
}

export default App;
