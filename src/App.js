import React, {Suspense, useRef, useEffect} from 'react';
import * as THREE from 'three';
import './App.css';
import {Canvas, useFrame} from '@react-three/fiber';
import {useGLTF, PerspectiveCamera, Loader, useAnimations, OrbitControls, Html, Preload} from '@react-three/drei';
import { motion } from "framer-motion";

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


const Desk =(props)=> {
  const { nodes, materials } = useGLTF('/desk.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene" position={[0.75, -3.25, -1.5]} scale={0.01} rotation={[-0.01, 4.72, -0.1]}>
        <mesh geometry={nodes['Object_782_OnTheFly-bg_0'].geometry} material={materials['Material.074_40']} position={[101.6, 40.62, 244.01]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={21.89} />
        <mesh geometry={nodes.Object_788_Material057_0.geometry} material={materials['Material.074_33']} position={[159.02, 47.32, 359.94]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={19.61} />
        <mesh geometry={nodes.Object_798_Material057_0.geometry} material={materials['Material.074_33']} position={[122.7, 53.53, 358.46]} rotation={[-Math.PI / 2, 0.16, -Math.PI]} scale={19.61} />
        <mesh geometry={nodes.Object_800_Material005_0.geometry} material={materials['Material.074_32']} position={[190.99, 44.58, 567.48]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87} />
        <mesh geometry={nodes.Object_802_Material005_0.geometry} material={materials['Material.074_32']} position={[190.87, 44.63, 565.25]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87} />
        <mesh geometry={nodes.Object_804_Material005_0.geometry} material={materials['Material.074_32']} position={[192.49, 44.42, 565.41]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87} />
        <mesh geometry={nodes.Object_806_Material005_0.geometry} material={materials['Material.074_32']} position={[192.4, 44.4, 567.47]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87} />
        <mesh geometry={nodes.Object_810_Material005_0.geometry} material={materials['Material.074_32']} position={[141.04, 50.58, 552.01]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_812_Material068_0.geometry} material={materials['Material.074_37']} position={[141.04, 50.58, 532.03]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_814_Material068_0.geometry} material={materials['Material.074_37']} position={[141.04, 50.58, 514.78]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_816_Material068_0.geometry} material={materials['Material.074_37']} position={[141.04, 50.58, 498.14]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_818_Material066_0.geometry} material={materials['Material.074_35']} position={[141.04, 50.58, 480.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_820_Material066_0.geometry} material={materials['Material.074_35']} position={[141.04, 50.58, 463.62]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_822_Material066_0.geometry} material={materials['Material.074_35']} position={[141.04, 50.58, 443.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71} />
        <mesh geometry={nodes.Object_824_Material066_0.geometry} material={materials['Material.074_35']} position={[141.65, 50.88, 427.98]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.16} />
        <mesh geometry={nodes.Object_826_Material060_0.geometry} material={materials['Material.074_34']} position={[142.09, 50.96, 409.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.16} />
        <mesh geometry={nodes.Object_828_Material005_0.geometry} material={materials['Material.074_32']} position={[158.03, 48.55, 561.97]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_830_Material069_0.geometry} material={materials['Material.074_38']} position={[158.03, 48.44, 543.88]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_832_Material068_0.geometry} material={materials['Material.074_37']} position={[158.03, 48.44, 528.23]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_834_Material068_0.geometry} material={materials['Material.074_37']} position={[158.03, 48.44, 509.56]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_836_Material068_0.geometry} material={materials['Material.074_37']} position={[158.03, 48.35, 494.31]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_838_Material070_0.geometry} material={materials['Material.074_39']} position={[156.66, 48.64, 594]} rotation={[-1.59, 0, Math.PI / 2]} scale={2.69} />
        <mesh geometry={nodes.Object_840_Material070_0.geometry} material={materials['Material.074_39']} position={[192.64, 45.65, 594.8]} rotation={[-Math.PI / 2, -0.12, Math.PI / 2]} scale={3.12} />
        <mesh geometry={nodes.Object_842_Material066_0.geometry} material={materials['Material.074_35']} position={[158.03, 48.44, 475.98]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_844_Material066_0.geometry} material={materials['Material.074_35']} position={[157.21, 48.44, 455.63]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[6.41, 5.27, 6.41]} />
        <mesh geometry={nodes.Object_846_Material066_0.geometry} material={materials['Material.074_35']} position={[158.03, 48.44, 441.26]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_848_Material060_0.geometry} material={materials['Material.074_34']} position={[159.03, 48.64, 422.07]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.91} />
        <mesh geometry={nodes.Object_850_Material070_0.geometry} material={materials['Material.074_39']} position={[122.03, 53.89, 594.92]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.98} />
        <mesh geometry={nodes.Object_852_Material066_0.geometry} material={materials['Material.074_35']} position={[175.49, 47.27, 483.91]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_854_Material068_0.geometry} material={materials['Material.074_37']} position={[175.49, 47.27, 501.89]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_856_Material068_0.geometry} material={materials['Material.074_37']} position={[175.49, 47.27, 519.09]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_858_Material069_0.geometry} material={materials['Material.074_38']} position={[175.49, 47.27, 537.01]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_860_Material005_0.geometry} material={materials['Material.074_32']} position={[175.49, 47.17, 554.66]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_862_Material066_0.geometry} material={materials['Material.074_35']} position={[175.49, 47.27, 467.98]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_864_Material066_0.geometry} material={materials['Material.074_35']} position={[175.49, 47.27, 450.28]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.Object_866_Material070_0.geometry} material={materials['Material.074_39']} position={[122.44, 53.93, 578.06]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_868_Material005_0.geometry} material={materials['Material.074_32']} position={[122.06, 53.85, 561.23]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.17} />
        <mesh geometry={nodes.Object_870_Material005_0.geometry} material={materials['Material.074_32']} position={[127.01, 53.03, 560.64]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_872_Material057_0.geometry} material={materials['Material.074_33']} position={[192.64, 45.65, 359.95]} rotation={[-Math.PI / 2, -0.12, Math.PI / 2]} scale={3.12} />
        <mesh geometry={nodes.Object_874_Material057_0.geometry} material={materials['Material.074_33']} position={[156.29, 46.94, 363.38]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.01} />
        <mesh geometry={nodes.Object_876_Material069_0.geometry} material={materials['Material.074_38']} position={[122.48, 53.9, 543.37]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82} />
        <mesh geometry={nodes.Object_878_Material069_0.geometry} material={materials['Material.074_38']} position={[127.43, 53.08, 543.26]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_880_Material068_0.geometry} material={materials['Material.074_37']} position={[122.48, 53.74, 525.77]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82} />
        <mesh geometry={nodes.Object_882_Material068_0.geometry} material={materials['Material.074_37']} position={[127.43, 52.92, 525.65]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_884_Material070_0.geometry} material={materials['Material.074_39']} position={[101.74, 56.42, 595.27]} rotation={[-Math.PI / 2, 0.14, Math.PI / 2]} scale={4.18} />
        <mesh geometry={nodes.Object_886_Material068_0.geometry} material={materials['Material.074_37']} position={[122.48, 53.85, 509.28]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82} />
        <mesh geometry={nodes.Object_888_Material068_0.geometry} material={materials['Material.074_37']} position={[127.43, 53.03, 508.77]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_890_Material066_0.geometry} material={materials['Material.074_35']} position={[101.37, 56.13, 484.34]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53} />
        <mesh geometry={nodes.Object_892_Material068_0.geometry} material={materials['Material.074_37']} position={[101.21, 56.94, 513.09]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45} />
        <mesh geometry={nodes.Object_894_Material069_0.geometry} material={materials['Material.074_38']} position={[101.21, 56.94, 530.46]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45} />
        <mesh geometry={nodes.Object_896_Material005_0.geometry} material={materials['Material.074_32']} position={[101.21, 56.94, 548.2]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45} />
        <mesh geometry={nodes.Object_898_Material005_0.geometry} material={materials['Material.074_32']} position={[101.21, 56.94, 565.18]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45} />
        <mesh geometry={nodes.Object_900_Material066_0.geometry} material={materials['Material.074_35']} position={[101.37, 56.15, 466.89]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53} />
        <mesh geometry={nodes.Object_902_Material066_0.geometry} material={materials['Material.074_35']} position={[101.37, 56.15, 449.37]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53} />
        <mesh geometry={nodes.Object_904_Material066_0.geometry} material={materials['Material.074_35']} position={[101.37, 56.15, 431.95]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53} />
        <mesh geometry={nodes.Object_906_Material060_0.geometry} material={materials['Material.074_34']} position={[101.47, 56.12, 402.97]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.5} />
        <mesh geometry={nodes.Object_908_Material057_0.geometry} material={materials['Material.074_33']} position={[101.35, 56.18, 386.48]} rotation={[-Math.PI / 2, 0.2, Math.PI / 2]} scale={4.19} />
        <mesh geometry={nodes.Object_910_Material057_0.geometry} material={materials['Material.074_33']} position={[101.35, 56.18, 368.47]} rotation={[-Math.PI / 2, 0.2, Math.PI / 2]} scale={4.19} />
        <mesh geometry={nodes.Object_912_Material057_0.geometry} material={materials['Material.074_33']} position={[101.35, 56.18, 351.35]} rotation={[-Math.PI / 2, 0.2, Math.PI / 2]} scale={4.19} />
        <mesh geometry={nodes.Object_914_Material068_0.geometry} material={materials['Material.074_37']} position={[122.48, 53.85, 491.65]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82} />
        <mesh geometry={nodes.Object_916_Material068_0.geometry} material={materials['Material.074_37']} position={[127.43, 53.03, 491.82]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_918_Material066_0.geometry} material={materials['Material.074_35']} position={[122.48, 53.82, 473.66]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82} />
        <mesh geometry={nodes.Object_920_Material066_0.geometry} material={materials['Material.074_35']} position={[127.43, 53, 473.4]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_922_Material066_0.geometry} material={materials['Material.074_35']} position={[122.48, 53.85, 456.47]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82} />
        <mesh geometry={nodes.Object_924_Material066_0.geometry} material={materials['Material.074_35']} position={[127.43, 53.03, 456.75]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_926_Material066_0.geometry} material={materials['Material.074_35']} position={[121.67, 54.1, 439.12]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={[3.82, 3.14, 3.82]} />
        <mesh geometry={nodes.Object_928_Material060_0.geometry} material={materials['Material.074_34']} position={[120.31, 54.21, 419.69]} rotation={[-Math.PI / 2, 0.16, -Math.PI / 2]} scale={[3.82, 3.14, 3.82]} />
        <mesh geometry={nodes.Object_930_Material066_0.geometry} material={materials['Material.074_35']} position={[127.43, 53.03, 439.36]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_932_Material060_0.geometry} material={materials['Material.074_34']} position={[127.43, 53.03, 421.59]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33} />
        <mesh geometry={nodes.Object_934_Tasten_2_0.geometry} material={materials.Tasten_2} position={[186.13, 46.57, 219.4]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.01} />
        <mesh geometry={nodes.Object_936_Material070_0.geometry} material={materials['Material.074_39']} position={[173.52, 47, 585.52]} rotation={[-1.64, 0, 0]} scale={[6.2, 8.42, 6.21]} />
        <mesh geometry={nodes.Object_938_Material060_0.geometry} material={materials['Material.074_34']} position={[175.03, 47.04, 400.01]} rotation={[-1.57, -0.08, 1.57]} scale={[6.67, 4.93, 2.74]} />
        <mesh geometry={nodes.Object_940_Material060_0.geometry} material={materials['Material.074_34']} position={[175.03, 47.04, 434.85]} rotation={[-1.57, -0.08, 1.57]} scale={[4.24, 4.93, 2.74]} />
        <mesh geometry={nodes.Object_942_Material070_0.geometry} material={materials['Material.074_39']} position={[176.05, 46.79, 584.43]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[1.86, 6.97, 6.97]} />
        <mesh geometry={nodes.Object_944_Material060_0.geometry} material={materials['Material.074_34']} position={[175.03, 47.04, 417.32]} rotation={[-1.57, -0.08, 1.57]} scale={[4.24, 4.93, 2.74]} />
        <mesh geometry={nodes.Object_946_Tasten_2_0.geometry} material={materials.Tasten_2} position={[126.21, 53.67, 253.13]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45} />
        <mesh geometry={nodes.Object_948_Material067_0.geometry} material={materials['Material.074_36']} position={[122.22, 53.89, 271.17]} rotation={[-Math.PI / 2, 0.21, Math.PI / 2]} scale={2.7} />
        <mesh geometry={nodes.Object_950_Material067_0.geometry} material={materials['Material.074_36']} position={[192.32, 45.45, 259.97]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={4.42} />
        <mesh geometry={nodes.Object_952_Material067_0.geometry} material={materials['Material.074_36']} position={[197.02, 45.61, 260.99]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={3.79} />
        <mesh geometry={nodes.Object_954_Material072_0.geometry} material={materials['Material.025']} position={[184.78, 33.32, 601.23]} rotation={[-Math.PI / 2, 0.09, -Math.PI]} scale={[5.01, 3.88, 5.01]} />
        <mesh geometry={nodes.Object_956_Material072_0.geometry} material={materials['Material.025']} position={[164.62, 35.13, 204.97]} rotation={[-Math.PI / 2, 0.09, 0]} scale={3.13} />
        <mesh geometry={nodes.Object_958_Material066_0.geometry} material={materials['Material.074_35']} position={[189.42, 46.76, 488.89]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[4.95, 15.57, 11.59]} />
        <mesh geometry={nodes.Object_960_Material067_0.geometry} material={materials['Material.074_36']} position={[140.39, 50.32, 267.75]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={4.08} />
        <mesh geometry={nodes.Object_962_Material067_0.geometry} material={materials['Material.074_36']} position={[145.19, 50.32, 270.03]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={2.49} />
        <mesh geometry={nodes.Object_964_Tasten_2_0.geometry} material={materials.Tasten_2} position={[145.19, 50.32, 234.87]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={2.49} />
        <mesh geometry={nodes.Object_966_Material060_0.geometry} material={materials['Material.074_34']} position={[157.09, 48.55, 408.62]} rotation={[-1.57, -0.08, 1.57]} scale={[6.67, 4.93, 2.74]} />
        <mesh geometry={nodes.Object_968_Material060_0.geometry} material={materials['Material.074_34']} position={[158.95, 48.55, 391.27]} rotation={[-1.57, -0.04, 1.57]} scale={[6.67, 4.93, 2.74]} />
        <mesh geometry={nodes.Object_970_Tasten_2_0.geometry} material={materials.Tasten_2} position={[140.39, 50.37, 250.49]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={4.08} />
        <mesh geometry={nodes.Object_972_Material057_0.geometry} material={materials['Material.074_33']} position={[158.81, 47.35, 358.08]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[3.75, 1.66, 5.45]} />
        <mesh geometry={nodes.Object_974_Material057_0.geometry} material={materials['Material.074_33']} position={[158.53, 47.35, 360.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45} />
        <mesh geometry={nodes.Object_976_Material070_0.geometry} material={materials['Material.074_39']} position={[138.81, 50.51, 591.9]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.57} />
        <mesh geometry={nodes.Object_978_Tasten_2_0.geometry} material={materials.Tasten_2} position={[140.39, 50.37, 233.01]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={4.08} />
        <mesh geometry={nodes.Object_980_Tasten_2_0.geometry} material={materials.Tasten_2} position={[143.95, 50.12, 251.22]} rotation={[-1.49, 0, 0]} scale={[2.49, 4.58, 2.51]} />
        <mesh geometry={nodes.Object_982_Material057_0.geometry} material={materials['Material.074_33']} position={[100.21, 56.33, 328.51]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_984_Material057_0.geometry} material={materials['Material.074_33']} position={[100.21, 56.33, 310.76]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_986_Material057_0.geometry} material={materials['Material.074_33']} position={[100.21, 56.33, 293.44]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_988_Material067_0.geometry} material={materials['Material.074_36']} position={[158.2, 48.55, 268.32]} rotation={[-1.57, -0.04, 1.57]} scale={[5.12, 4.44, 2.47]} />
        <mesh geometry={nodes.Object_990_Material067_0.geometry} material={materials['Material.074_36']} position={[162.31, 48.55, 268.01]} rotation={[-1.57, -0.04, 1.57]} scale={[3.21, 4.44, 2.47]} />
        <mesh geometry={nodes.Object_992_Tasten_2_0.geometry} material={materials.Tasten_2} position={[158.2, 48.55, 250.9]} rotation={[-1.57, -0.04, 1.57]} scale={[5.12, 4.44, 2.47]} />
        <mesh geometry={nodes.Object_994_Tasten_2_0.geometry} material={materials.Tasten_2} position={[158.2, 48.55, 233.22]} rotation={[-1.57, -0.04, 1.57]} scale={[5.12, 4.44, 2.47]} />
        <mesh geometry={nodes.Object_996_Tasten_2_0.geometry} material={materials.Tasten_2} position={[162.31, 48.55, 232.69]} rotation={[-1.57, -0.04, 1.57]} scale={[3.21, 4.44, 2.47]} />
        <mesh geometry={nodes.Object_998_Tasten_2_0.geometry} material={materials.Tasten_2} position={[191.77, 45.45, 235.88]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={3.25} />
        <mesh geometry={nodes.Object_1000_Material070_0.geometry} material={materials['Material.074_39']} position={[139.97, 50.54, 592.71]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.46} />
        <mesh geometry={nodes.Object_1002_Material070_0.geometry} material={materials['Material.074_39']} position={[141.68, 50.51, 585.65]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={5.57} />
        <mesh geometry={nodes.Object_1004_Material070_0.geometry} material={materials['Material.074_39']} position={[140.52, 50.54, 584.84]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={2.46} />
        <mesh geometry={nodes.Object_1006_Material057_0.geometry} material={materials['Material.074_33']} position={[192.32, 45.45, 402.26]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7} />
        <mesh geometry={nodes.Object_1008_Material057_0.geometry} material={materials['Material.074_33']} position={[192.32, 45.45, 377.97]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7} />
        <mesh geometry={nodes.Object_1010_Material060_0.geometry} material={materials['Material.074_34']} position={[192.11, 45.45, 422.37]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7} />
        <mesh geometry={nodes.Object_1012_Material070_0.geometry} material={materials['Material.074_39']} position={[176.05, 46.79, 581.64]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[1.86, 6.97, 6.97]} />
        <mesh geometry={nodes.Object_1014_Material070_0.geometry} material={materials['Material.074_39']} position={[178.06, 46.79, 584.43]} rotation={[-1.5, 0, -Math.PI]} scale={[2.69, 9.47, 6.98]} />
        <mesh geometry={nodes.Object_1016_Material070_0.geometry} material={materials['Material.074_39']} position={[178.06, 46.79, 582.63]} rotation={[-1.5, 0, -Math.PI]} scale={[2.69, 9.47, 6.98]} />
        <mesh geometry={nodes.Object_1018_Material070_0.geometry} material={materials['Material.074_39']} position={[177.22, 46.79, 583.34]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[3.57, 6.97, 6.97]} />
        <mesh geometry={nodes.Object_1020_Material057_0.geometry} material={materials['Material.074_33']} position={[173.52, 47.04, 367.42]} rotation={[-1.56, 0, 0]} scale={[6.2, 11.14, 6.2]} />
        <mesh geometry={nodes.Object_1022_Material057_0.geometry} material={materials['Material.074_33']} position={[176.26, 47.09, 365.53]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[2.19, 6.2, 6.2]} />
        <mesh geometry={nodes.Object_1024_Material057_0.geometry} material={materials['Material.074_33']} position={[176.26, 47.09, 362.25]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[2.19, 6.2, 6.2]} />
        <mesh geometry={nodes.Object_1026_Material057_0.geometry} material={materials['Material.074_33']} position={[178.04, 47.09, 365.53]} rotation={[-1.5, 0, -Math.PI]} scale={[2.39, 11.12, 6.23]} />
        <mesh geometry={nodes.Object_1028_Material057_0.geometry} material={materials['Material.074_33']} position={[178.04, 47.09, 363.41]} rotation={[-1.5, 0, -Math.PI]} scale={[2.39, 11.12, 6.23]} />
        <mesh geometry={nodes.Object_1030_Material057_0.geometry} material={materials['Material.074_33']} position={[177.3, 47.09, 364.24]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[4.2, 6.2, 6.2]} />
        <mesh geometry={nodes.Object_1032_Material057_0.geometry} material={materials['Material.074_33']} position={[122.22, 53.65, 358.73]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={5.45} />
        <mesh geometry={nodes.Object_1034_Material057_0.geometry} material={materials['Material.074_33']} position={[122.22, 53.78, 328.51]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_1036_Material057_0.geometry} material={materials['Material.074_33']} position={[122.22, 53.78, 311.13]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_1038_Material057_0.geometry} material={materials['Material.074_33']} position={[122.22, 53.78, 292.77]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_1040_Tasten_2_0.geometry} material={materials.Tasten_2} position={[152.11, 49.61, 217.78]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45} />
        <mesh geometry={nodes.Object_1042_Tasten_2_0.geometry} material={materials.Tasten_2} position={[123.41, 53.51, 217.78]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45} />
        <mesh geometry={nodes.Object_1044_Material057_0.geometry} material={materials['Material.074_33']} position={[140.39, 50.56, 328.6]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_1046_Material057_0.geometry} material={materials['Material.074_33']} position={[140.39, 50.56, 310.09]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_1048_Material057_0.geometry} material={materials['Material.074_33']} position={[140.39, 50.56, 293.03]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52} />
        <mesh geometry={nodes.Object_1050_Tasten_2_0.geometry} material={materials.Tasten_2} position={[126.59, 53.67, 235.64]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45} />
        <mesh geometry={nodes.Object_1052_Material057_0.geometry} material={materials['Material.074_33']} position={[138.83, 50.66, 360.84]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.99} />
        <mesh geometry={nodes.Object_1054_Material057_0.geometry} material={materials['Material.074_33']} position={[138.83, 50.52, 377.71]} rotation={[-Math.PI / 2, 0.04, Math.PI / 2]} scale={2.99} />
        <mesh geometry={nodes.Object_1056_Material073_0.geometry} material={materials['Material.073']} position={[138.83, 50.63, 395.77]} rotation={[-Math.PI / 2, 0.04, Math.PI / 2]} scale={2.99} />
        <mesh geometry={nodes.Object_1058_Material057_0.geometry} material={materials['Material.074_33']} position={[122.22, 53.9, 387.25]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.68} />
        <mesh geometry={nodes.Object_1060_Material060_0.geometry} material={materials['Material.074_34']} position={[118.88, 54.41, 404.73]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.68} />
        <mesh geometry={nodes.Object_1062_Tasten_2_0.geometry} material={materials.Tasten_2} position={[178.59, 47.22, 251.22]} rotation={[-1.49, -0.04, 0]} scale={[2.49, 4.58, 2.51]} />
        <mesh geometry={nodes.Object_1064_Tasten_2_0.geometry} material={materials.Tasten_2} position={[175.03, 47.04, 250.75]} rotation={[-1.57, -0.08, 1.57]} scale={[4.72, 4.04, 2.74]} />
        <mesh geometry={nodes.Object_1066_Material067_0.geometry} material={materials['Material.074_36']} position={[175.03, 47.04, 267.9]} rotation={[-1.57, -0.08, 1.57]} scale={[4.72, 4.04, 2.74]} />
        <mesh geometry={nodes.Object_1068_Material067_0.geometry} material={materials['Material.074_36']} position={[180.15, 47.44, 269.12]} rotation={[-1.57, -0.08, 1.57]} scale={[3.03, 2.59, 1.76]} />
        <mesh geometry={nodes.Object_1070_Tasten_2_0.geometry} material={materials.Tasten_2} position={[175.03, 47.04, 233.45]} rotation={[-1.57, -0.08, 1.57]} scale={[4.72, 4.04, 2.74]} />
        <mesh geometry={nodes.Object_1072_Tasten_2_0.geometry} material={materials.Tasten_2} position={[180.15, 47.58, 235.55]} rotation={[-1.57, -0.08, 1.57]} scale={[3.03, 2.59, 1.76]} />
        <mesh geometry={nodes.Object_1074_Material069_0.geometry} material={materials['Material.074_38']} position={[192.11, 45.45, 545.46]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7} />
        <mesh geometry={nodes.Object_808_Material005_0.geometry} material={materials['Material.074_32']} position={[140.84, 50.58, 568.87]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41} />
        <mesh geometry={nodes.aorus_case_fans_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[89.59, 288.68, -355.42]} rotation={[0, Math.PI / 2, 0]} scale={108.52} />
        <mesh geometry={nodes.aorus_case_fans001_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[69.02, 288.68, -355.42]} rotation={[0, -Math.PI / 2, 0]} scale={108.52} />
        <mesh geometry={nodes.aorus_case_fans002_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[89.59, 178.11, -355.42]} rotation={[0, Math.PI / 2, 0]} scale={108.52} />
        <mesh geometry={nodes.aorus_case_fans003_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[69.02, 178.11, -355.42]} rotation={[0, -Math.PI / 2, 0]} scale={108.52} />
        <mesh geometry={nodes.aorus_case_fans004_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[-241.08, 292.6, -334.76]} rotation={[0, Math.PI / 2, 0]} scale={108.52} />
        <mesh geometry={nodes.aorus_case_fans005_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[-261.65, 292.6, -334.76]} rotation={[0, -Math.PI / 2, 0]} scale={108.52} />
        <mesh geometry={nodes.aorus_case_fans006_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[-171.29, 333.89, -355.29]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.31} />
        <mesh geometry={nodes.aorus_case_fans007_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[-171.29, 354.81, -355.29]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.31} />
        <mesh geometry={nodes.aorus_case_fans008_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[-44.29, 333.89, -355.29]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.31} />
        <mesh geometry={nodes.aorus_case_fans009_aorus_case_fans_0.geometry} material={materials['Material.074_0']} position={[-44.29, 354.81, -355.29]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={110.31} />
        <mesh geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry} material={materials['Material.074_24']} position={[-182.43, 181.7, -315.85]} scale={[8.65, 8.65, 9.09]} />
        <mesh geometry={nodes.BezierCircle_Material104_0.geometry} material={materials['Material.104']} position={[87.65, 308.19, -282.27]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={5.7} />
        <mesh geometry={nodes.BezierCurve_Material088_0.geometry} material={materials['Material.088']} position={[73.03, 238.2, -437.39]} rotation={[Math.PI, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.BezierCurve001_Material085_0.geometry} material={materials['Material.085']} position={[-57.66, 118.32, -315.6]} rotation={[1.57, -1.23, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve002_Material087_0.geometry} material={materials['Material.087']} position={[-31.44, 183.79, -440.16]} rotation={[1.57, -1.23, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve003_Material091_0.geometry} material={materials['Material.025']} position={[-158.9, 127.66, 299.39]} rotation={[2.46, -Math.PI / 2, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve004_Material099_0.geometry} material={materials['Material.025']} position={[-33.39, 29.83, -26.83]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve005_Material103_0.geometry} material={materials['Material.025']} position={[83.41, 25.97, 360.7]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.BezierCurve006_Material106_0.geometry} material={materials['Material.025']} position={[-275.73, 25.97, 569.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.BezierCurve007_Material105_0.geometry} material={materials['Material.025']} position={[-271.34, 25.97, 569.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.BezierCurve008_Material107_0.geometry} material={materials['Material.025']} position={[-280.43, 25.97, 28.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.bg2_bg2_0.geometry} material={materials['Material.074_29']} position={[-153.71, 194.92, 83.03]} rotation={[1.57, -1.44, 1.57]} scale={113.03} />
        <mesh geometry={nodes['Color-PewDiePie-Logo_Color-PewDiePie-Logo_0'].geometry} material={materials['Material.074_27']} position={[129.54, 46.55, -27.48]} rotation={[-Math.PI / 2, 0.28, Math.PI / 2]} scale={12.41} />
        <mesh geometry={nodes.Cube_Material_0.geometry} material={materials['Material.001']} position={[-61.02, -0.56, 156.09]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-368.95, -731.64, -25.98]} />
        <mesh geometry={nodes.Cube001_Material055_0.geometry} material={materials['Material.055']} position={[-138.59, 295.65, 300.41]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[325.34, 4.05, 184.09]} />
        <mesh geometry={nodes.Cube002_Material044_0.geometry} material={materials['Material.044']} position={[-146.71, 263.68, 300.41]} rotation={[Math.PI / 2, 0.12, -Math.PI / 2]} scale={[-325.34, -14.75, -152.85]} />
        <mesh geometry={nodes.Cube003_Material001_0.geometry} material={materials['Material.025']} position={[-157.13, 447.65, 300.41]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[325.34, 4.05, 31.03]} />
        <mesh geometry={nodes.Cube004_Material002_0.geometry} material={materials['Material.002']} position={[-148.74, 180.97, 299.25]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[167.6, 17.79, 193.5]} />
        <mesh geometry={nodes.Cube005_Material003_0.geometry} material={materials['Material.003']} position={[-186.53, 291.56, 297.43]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[16.32, 28.81, 12.94]} />
        <mesh geometry={nodes.Cube006_Material043_0.geometry} material={materials['Material.043']} position={[-202.96, -64.82, 300.41]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[40.59, 16.64, 531.61]} />
        <mesh geometry={nodes.Cube007_Material037_0.geometry} material={materials['Material.037']} position={[-213.02, 35.33, 296.06]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-193.85, -54.12, -9.32]} />
        <mesh geometry={nodes.Cube008_Material036_0.geometry} material={materials['Material.039']} position={[-80.2, 31.65, 453.15]} rotation={[-Math.PI / 2, 0, 1.25]} scale={[49.07, 108.78, 5.65]} />
        <mesh geometry={nodes.Cube009_Material039_0.geometry} material={materials['Material.039']} position={[-80.2, 31.65, 163.79]} rotation={[-Math.PI / 2, 0, 1.86]} scale={[49.07, 108.78, 5.65]} />
        <mesh geometry={nodes.Cube010_Material006_0.geometry} material={materials['Material.006']} position={[-181.15, 31.64, 295.8]} rotation={[-Math.PI / 2, 0, 3.14]} scale={[43.41, 96.24, 5]} />
        <mesh geometry={nodes.Cube011_Material010_0.geometry} material={materials['Material.074']} position={[-85.94, 199.7, -353.72]} rotation={[-Math.PI / 2, 0, 0]} scale={[173.49, 89.97, 157.35]} />
        <mesh geometry={nodes.Cube012_Material011_0.geometry} material={materials['Material.074']} position={[-85.94, 199.7, -353.72]} rotation={[-Math.PI / 2, 0, 0]} scale={[173.49, 89.97, 157.35]} />
        <mesh geometry={nodes.Cube013_Material015_0.geometry} material={materials['Material.074']} position={[82.77, 33.23, -353.61]} rotation={[Math.PI / 2, 0.24, -Math.PI]} scale={[-5.99, -88.36, -12.14]} />
        <mesh geometry={nodes.Cube014_Material014_0.geometry} material={materials['Material.074']} position={[-253.45, 33.23, -353.61]} rotation={[Math.PI / 2, -0.14, Math.PI]} scale={[-5.98, -88.36, -12.15]} />
        <mesh geometry={nodes.Cube015_Material016_0.geometry} material={materials['Material.074_1']} position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]} />
        <mesh geometry={nodes.Cube016_Material017_0.geometry} material={materials['Material.017']} position={[79.29, 177.86, -355.56]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[50.67, 50.67, 10]} />
        <mesh geometry={nodes.Cube017_Material017_0.geometry} material={materials['Material.017']} position={[-251.38, 292.35, -334.9]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[50.67, 50.67, 10]} />
        <mesh geometry={nodes.Cube018_Material017_0.geometry} material={materials['Material.017']} position={[79.29, 288.43, -355.56]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[50.67, 50.67, 10]} />
        <mesh geometry={nodes.Cube019_Material017_0.geometry} material={materials['Material.017']} position={[-171.54, 344.36, -355.43]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[51.51, 51.51, 10.17]} />
        <mesh geometry={nodes.Cube020_Material020_0.geometry} material={materials['Material.074_2']} position={[-96.11, 78.83, -363.4]} rotation={[-Math.PI / 2, 0, 0]} scale={[160.68, 73.93, 34.31]} />
        <mesh geometry={nodes.Cube021_Material018_0.geometry} material={materials['Material.074']} position={[-108.06, 346.35, -354.98]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.19, 57.54, 10.79]} />
        <mesh geometry={nodes.Cube022_Material017_0.geometry} material={materials['Material.017']} position={[-44.55, 344.36, -355.43]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[51.51, 51.51, 10.17]} />
        <mesh geometry={nodes.Cube023_Material021_0.geometry} material={materials['Material.074']} position={[93.78, 228.59, -355.28]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-11.99, -59.26, -117.81]} />
        <mesh geometry={nodes.Cube024_Material022_0.geometry} material={materials['Material.074']} position={[-265.1, 291.7, -335.09]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.38, 55.46, 55.46]} />
        <mesh geometry={nodes.Cube025_Material023_0.geometry} material={materials['Material.023']} position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]} />
        <mesh geometry={nodes.Cube026_Material024_0.geometry} material={materials['Material.024']} position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]} />
        <mesh geometry={nodes.Cube027_Material008_0.geometry} material={materials['Material.074_6']} position={[-96.41, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]} />
        <mesh geometry={nodes.Cube028_Material026_0.geometry} material={materials['Material.074_7']} position={[-95.71, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube029_Material025_0.geometry} material={materials['Material.025']} position={[-96.39, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]} />
        <mesh geometry={nodes.Cube030_Material026_0.geometry} material={materials['Material.074_7']} position={[-97, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube031_Material008_0.geometry} material={materials['Material.074_6']} position={[-103.69, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]} />
        <mesh geometry={nodes.Cube032_Material026_0.geometry} material={materials['Material.074_7']} position={[-102.99, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube033_Material025_0.geometry} material={materials['Material.025']} position={[-103.67, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]} />
        <mesh geometry={nodes.Cube034_Material026_0.geometry} material={materials['Material.074_7']} position={[-104.28, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube035_Material008_0.geometry} material={materials['Material.074_6']} position={[-110.55, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]} />
        <mesh geometry={nodes.Cube036_Material026_0.geometry} material={materials['Material.074_7']} position={[-109.85, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube037_Material025_0.geometry} material={materials['Material.025']} position={[-110.53, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]} />
        <mesh geometry={nodes.Cube038_Material026_0.geometry} material={materials['Material.074_7']} position={[-111.14, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube039_Material008_0.geometry} material={materials['Material.074_6']} position={[-117.5, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]} />
        <mesh geometry={nodes.Cube040_Material026_0.geometry} material={materials['Material.074_7']} position={[-116.81, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube041_Material025_0.geometry} material={materials['Material.025']} position={[-117.48, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]} />
        <mesh geometry={nodes.Cube042_Material026_0.geometry} material={materials['Material.074_7']} position={[-118.09, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]} />
        <mesh geometry={nodes.Cube043_Material012_0.geometry} material={materials['Material.025']} position={[-219.49, 85.34, -71.15]} rotation={[-Math.PI / 2, 0, 0]} scale={[49.18, 29.28, 59.66]} />
        <mesh geometry={nodes.Cube044_Material012_0.geometry} material={materials['Material.025']} position={[-219.49, 85.34, 671.43]} rotation={[-Math.PI / 2, 0, 0]} scale={[49.18, 29.28, 59.66]} />
        <mesh geometry={nodes.Cube045_Material027_0.geometry} material={materials['Material.074_8']} position={[-212.14, 79.4, -298.23]} rotation={[-Math.PI / 2, 0, 0]} scale={[35.48, 5.17, 20.57]} />
        <mesh geometry={nodes.Cube046_Material034_0.geometry} material={materials['Material.034']} position={[-188.16, 268.52, -368.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.28, 42.45, 42.45]} />
        <mesh geometry={nodes.Cube047_Material033_0.geometry} material={materials['Material.034']} position={[-134.66, 268.52, -368.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.28, 42.45, 42.45]} />
        <mesh geometry={nodes.Cube048_Material035_0.geometry} material={materials['Material.074_15']} position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]} />
        <mesh geometry={nodes.Cube049_Material040_0.geometry} material={materials['Material.074_16']} position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]} />
        <mesh geometry={nodes.Cube050_Material038_0.geometry} material={materials['Material.074_16']} position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]} />
        <mesh geometry={nodes.Cube051_Material042_0.geometry} material={materials['Material.042']} position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]} />
        <mesh geometry={nodes.Cube052_Material047_0.geometry} material={materials['Material.025']} position={[83.51, 83.28, -355.6]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.75, 46.28, 28.87]} />
        <mesh geometry={nodes.Cube053_Material048_0.geometry} material={materials['Material.048']} position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]} />
        <mesh geometry={nodes.Cube054_Material049_0.geometry} material={materials['Material.049']} position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]} />
        <mesh geometry={nodes.Cube055_Material054_0.geometry} material={materials['Material.054']} position={[-122.29, 185.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.16, 54.53, 13.17]} />
        <mesh geometry={nodes.Cube056_Material061_0.geometry} material={materials['Material.061']} position={[-127.22, 200.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.06, 52.44, 12.67]} />
        <mesh geometry={nodes.Cube057_Material059_0.geometry} material={materials['Material.074_22']} position={[-127.22, 200.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.06, 52.44, 12.67]} />
        <mesh geometry={nodes.Cube058_Material063_0.geometry} material={materials['Material.074_23']} position={[-122.59, 213.71, -370.43]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.26, 54.5, 0.81]} />
        <mesh geometry={nodes.Cube059_Material058_0.geometry} material={materials['Material.058']} position={[-127.22, 200.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.06, 52.44, 12.67]} />
        <mesh geometry={nodes.Cube060_Material062_0.geometry} material={materials['Material.062']} position={[-123.74, 264.28, -316.8]} scale={[133.26, 53.22, 0.82]} />
        <mesh geometry={nodes.Cube061_Material064_0.geometry} material={materials['Material.025']} position={[-122.29, 185.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.16, 54.53, 13.17]} />
        <mesh geometry={nodes.Cube062_Material065_0.geometry} material={materials['Material.025']} position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]} />
        <mesh geometry={nodes.Cube063_Material074_0.geometry} material={materials['Material.074_25']} position={[111.41, 32.5, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube064_Material074_0.geometry} material={materials['Material.074_25']} position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube065_Material074_0.geometry} material={materials['Material.074_25']} position={[111.41, 32.5, -27.41]} rotation={[-Math.PI / 2, 0.01, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube066_Material076_0.geometry} material={materials['Material.076']} position={[111.46, 32.29, -27.29]} rotation={[-Math.PI / 2, 0.01, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube067_Material075_0.geometry} material={materials['Material.075']} position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube068_Material092_0.geometry} material={materials['Material.092']} position={[129.12, 44.5, -27.61]} rotation={[-Math.PI / 2, 0.28, 0]} scale={[5.96, 5.96, 2.08]} />
        <mesh geometry={nodes.Cube069_Material093_0.geometry} material={materials['Material.025']} position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -44.82, -22.9]} />
        <mesh geometry={nodes.Cube070_Material100_0.geometry} material={materials['Material.025']} position={[-266.85, 260.34, -432.75]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.67, 2.32, 5.24]} />
        <mesh geometry={nodes.Cube071_Material101_0.geometry} material={materials['Material.025']} position={[-266.85, 260.34, -426.84]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.67, 2.32, 5.24]} />
        <mesh geometry={nodes.Cube072_Material078_0.geometry} material={materials['Material.025']} position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube073_Material079_0.geometry} material={materials['Material.074_6']} position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube074_Material084_0.geometry} material={materials['Material.025']} position={[-92.94, 206.72, -314.86]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.64, 5.4, 4.23]} />
        <mesh geometry={nodes.Cube075_Material086_0.geometry} material={materials['Material.074_26']} position={[-258.01, 195.51, -371.51]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.16, 52.44, 17.74]} />
        <mesh geometry={nodes.Cube076_Material080_0.geometry} material={materials['Material.074_25']} position={[65.93, 34.46, -27.35]} rotation={[-Math.PI / 2, 0.23, Math.PI]} scale={[-42.89, -42.89, -22.9]} />
        <mesh geometry={nodes.Cube077_Material083_0.geometry} material={materials['Material.025']} position={[-81.68, 266.51, -437.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.85, 4.87, 17.38]} />
        <mesh geometry={nodes.Cube078_Material083_0.geometry} material={materials['Material.025']} position={[70.35, 334.37, -437.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.85, 4.87, 12.05]} />
        <mesh geometry={nodes.Cube079_Material089_0.geometry} material={materials['Material.025']} position={[-269.84, 182.61, -338.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[16.04, 9.16, 4.33]} />
        <mesh geometry={nodes.Cube080_Material089_0.geometry} material={materials['Material.025']} position={[-158.49, 199.97, 375.16]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[16.04, 9.16, 4.33]} />
        <mesh geometry={nodes.Cube081_Material090_0.geometry} material={materials['Material.090']} position={[93.22, 47.66, -27.75]} rotation={[-1.54, -0.23, 0]} scale={[2.62, 1.33, 2.24]} />
        <mesh geometry={nodes.Cube082_Material101_0.geometry} material={materials['Material.025']} position={[-266.85, 274.04, -426.64]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.67, 2.32, 5.24]} />
        <mesh geometry={nodes.Cube088_Material098_0.geometry} material={materials['Material.098']} position={[98.96, 38.35, -8.16]} rotation={[-Math.PI / 2, -0.13, 0]} scale={[5.45, 4.95, 1.91]} />
        <mesh geometry={nodes.Cylinder_Material009_0.geometry} material={materials['Material.025']} position={[74.21, 51.22, -262.89]} scale={[6.08, 6.27, 2.28]} />
        <mesh geometry={nodes.Cylinder001_Material028_0.geometry} material={materials['Material.074_11']} position={[-169.23, 114.41, -71.64]} rotation={[-1.57, 1.55, 0]} scale={[19.4, 19.4, 2.51]} />
        <mesh geometry={nodes.Cylinder002_Material029_0.geometry} material={materials['Material.074_11']} position={[-166.37, 70.65, -71.64]} rotation={[-Math.PI / 2, 1.54, 0]} scale={[10.3, 10.3, 1.33]} />
        <mesh geometry={nodes.Cylinder003_Material031_0.geometry} material={materials['Material.074_11']} position={[-169.23, 114.41, 670.94]} rotation={[-1.57, 1.55, 0]} scale={[19.4, 19.4, 2.51]} />
        <mesh geometry={nodes.Cylinder004_Material030_0.geometry} material={materials['Material.074_11']} position={[-166.37, 70.65, 670.94]} rotation={[-Math.PI / 2, 1.54, 0]} scale={[10.3, 10.3, 1.33]} />
        <mesh geometry={nodes.Cylinder005_Material041_0.geometry} material={materials['Material.074_17']} position={[-161.14, 268.66, -369.02]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[32.71, 32.71, 34.21]} />
        <mesh geometry={nodes.Cylinder006_Material050_0.geometry} material={materials['Material.074_19']} position={[-209.45, 184.62, -370.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.35, 38.22, 10.57]} />
        <mesh geometry={nodes.Cylinder007_Material051_0.geometry} material={materials['Material.074_20']} position={[-124.44, 184.62, -370.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.35, 38.22, 10.57]} />
        <mesh geometry={nodes.Cylinder008_Material052_0.geometry} material={materials['Material.074_19']} position={[-37.78, 184.62, -370.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.35, 38.22, 10.57]} />
        <mesh geometry={nodes.Cylinder009_Material081_0.geometry} material={materials['Material.025']} position={[77.22, 34.52, -28.48]} scale={[11.57, 11.57, 2.5]} />
        <mesh geometry={nodes.Cylinder010_Material077_0.geometry} material={materials['Material.077']} position={[77.22, 34.52, -27.86]} scale={[11.89, 11.89, 0.39]} />
        <mesh geometry={nodes.Cylinder011_Material045_0.geometry} material={materials['Material.045']} position={[-173.93, 242.5, -421.74]} rotation={[0.47, 0, Math.PI]} scale={[2.05, 2.05, 16.97]} />
        <mesh geometry={nodes.Cylinder012_Material082_0.geometry} material={materials['Material.082']} position={[77.22, 34.52, -28.71]} scale={[10.44, 10.44, 2.87]} />
        <mesh geometry={nodes.Cylinder013_Material094_0.geometry} material={materials['Material.094']} position={[83.03, 308.23, -282.19]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[9.86, 9.86, 4.88]} />
        <mesh geometry={nodes.Cylinder014_Material095_0.geometry} material={materials['Material.088']} position={[84.52, 280.42, -282.19]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[6.54, 6.54, 3.24]} />
        <mesh geometry={nodes.Cylinder015_Material096_0.geometry} material={materials['Material.088']} position={[84.52, 254.31, -282.19]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[6.67, 6.67, 3.3]} />
        <mesh geometry={nodes.Cylinder016_Material102_0.geometry} material={materials['Material.025']} position={[-263.63, 248.74, -421.76]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[3.07, 3.07, 5.45]} />
        <mesh geometry={nodes.gallerymodel_gallerymodel_0.geometry} material={materials['Material.074_28']} position={[-142.04, 164.81, 596.08]} rotation={[0.44, -1.28, 0.44]} scale={80.69} />
        <mesh geometry={nodes.geforcertx_Material056_0.geometry} material={materials['Material.056']} position={[-229.27, 204.83, -315.96]} scale={[10.38, 10.38, 10.91]} />
        <mesh geometry={nodes['gigabyte-logo_gigabyte-logo_0'].geometry} material={materials['Material.074_31']} position={[-161.54, 449.45, 82.08]} rotation={[1.57, -1.5, 1.57]} scale={23.69} />
        <mesh geometry={nodes['gigabyte-logo001_gigabyte-logo_0'].geometry} material={materials['Material.074_31']} position={[-122.06, 122.82, 301.6]} rotation={[-Math.PI / 2, 1.5, Math.PI / 2]} scale={17.84} />
        <mesh geometry={nodes.IOSHIELD_IOSHIELD_0.geometry} material={materials['Material.074_3']} position={[-259.69, 284.8, -422.49]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[26.48, 30.86, 31.83]} />
        <mesh geometry={nodes['maxresdefault_(1)_maxresdefault_(1)_0'].geometry} material={materials['Material.074_10']} position={[87.71, 83.61, -355.31]} rotation={[0, Math.PI / 2, 0]} scale={39.41} />
        <mesh geometry={nodes['metal-mesh-500x500_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} position={[-42.31, 356.98, -354.16]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[100, 133.7, 100]} />
        <mesh geometry={nodes['metal-mesh-500x500001_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} position={[-174.21, 356.98, -354.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[100, 133.7, 100]} />
        <mesh geometry={nodes['metal-mesh-500x500002_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} position={[-270.9, 291.51, -335.33]} rotation={[0, -1.57, 0]} scale={[79.56, 106.37, 79.56]} />
        <mesh geometry={nodes['metal-mesh-500x500003_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} position={[-257.98, 182.04, -359.05]} rotation={[0, -1.57, 0]} scale={[109.08, 106.37, 79.56]} />
        <mesh geometry={nodes['metal-mesh-500x500004_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} position={[-257.98, 220.72, -359.05]} rotation={[0, -1.57, 0]} scale={[109.08, 106.37, 79.56]} />
        <mesh geometry={nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry} material={materials['Material.074_4']} position={[-235.59, 287.75, -423.92]} rotation={[0, 0, 0.65]} scale={6.34} />
        <mesh geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry} material={materials['Material.074_30']} position={[-136.18, 300.13, 300.41]} rotation={[-Math.PI / 2, 1.5, Math.PI / 2]} scale={[331.62, 348.07, 331.62]} />
        <mesh geometry={nodes.NVIDIA_LOGO_NVIDIA_LOGO_0.geometry} material={materials['Material.074_12']} position={[0.59, 70.43, -289.07]} scale={45.19} />
        <mesh geometry={nodes.Object_10_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_101_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_103_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_105_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_107_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_109_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_111_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_113_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_115_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_117_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_119_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_12_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_121_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_123_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_125_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_127_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 400.77]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[154.13, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_129_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 385.79]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_131_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_133_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_135_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_137_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_139_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_14_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_141_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_143_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_145_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_147_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_149_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_151_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_153_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_155_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_157_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_159_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_16_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_161_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_163_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_165_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_167_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_169_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_171_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_173_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_175_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_177_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_179_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_18_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_181_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_183_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_185_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_187_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_189_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_191_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_193_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_195_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_197_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_199_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_20_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_201_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_203_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_205_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.58, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_207_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_209_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_211_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_213_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_215_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_217_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_219_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_22_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_221_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 400.77]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[154.13, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_223_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_225_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_227_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.43, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_229_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_231_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_233_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_235_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_237_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_239_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_24_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_241_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_243_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_245_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 289.94]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[142.89, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_247_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_249_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_251_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_253_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_255_Material057_0.geometry} material={materials['Material.074_33']} position={[129.14, 32.6, 395.13]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[79.31, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_257_Material057_0.geometry} material={materials['Material.074_33']} position={[129.14, 32.6, 395.13]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[79.31, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_259_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 385.75]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_26_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_261_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 385.72]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_263_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 385.53]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_265_Material060_0.geometry} material={materials['Material.074_34']} position={[125.99, 34.79, 402.73]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_267_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_269_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_271_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_273_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_275_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_277_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_279_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_28_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_281_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_283_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_285_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_287_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_289_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_291_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_293_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_295_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_297_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_299_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_30_Material007_0.geometry} material={materials['Material.007']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_301_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_303_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_305_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_307_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_309_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_311_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_313_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_315_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_317_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_319_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_32_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_321_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_323_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_325_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_327_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_329_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_331_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_333_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_335_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_337_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_339_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_34_Material004_0.geometry} material={materials['Material.004']} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_341_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_343_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_345_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_347_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_349_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_351_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_353_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_355_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_357_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_359_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_36_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_361_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_363_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_365_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_367_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_369_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_371_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_373_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_375_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_377_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_379_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_38_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_381_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_383_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_385_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_387_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_389_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_391_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_393_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_395_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_397_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_399_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_40_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_401_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 289.94]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[142.89, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_403_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_405_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_407_Material070_0.geometry} material={materials['Material.074_39']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_409_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_411_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_413_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_415_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_418_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_42_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_420_Tasten_0.geometry} material={materials['Material.025']} position={[164.92, 31.11, 386.96]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[67.57, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_422_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_424_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_426_Tasten_0.geometry} material={materials['Material.025']} position={[130.24, 34.6, 390.58]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[72.77, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_428_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_430_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_432_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_434_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_436_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_438_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 402.93]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_44_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_440_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_442_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_444_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_446_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_448_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_450_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_452_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_454_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_456_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_458_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_460_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_462_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_464_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_466_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_468_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_47_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_470_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_472_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_474_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_476_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_478_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_480_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_482_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_484_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_486_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_488_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_49_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_490_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_492_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_494_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_496_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_498_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_500_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_502_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_504_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_506_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_508_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_51_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_510_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_512_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_514_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_516_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_518_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_520_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_522_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_524_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_526_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_528_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 385.86]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_53_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_530_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_532_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_534_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_536_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_538_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_540_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_542_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_544_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_546_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_548_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_55_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_550_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_552_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_554_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_556_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_558_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_560_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_562_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_564_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_566_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_568_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_57_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_570_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_572_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_574_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_576_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_578_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_580_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_582_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_584_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_586_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_588_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_59_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_590_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_592_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_594_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_596_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_598_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_600_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_602_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_604_Material071_0.geometry} material={materials['Material.025']} position={[147.71, 34.58, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_606_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.3, 259.27]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={[157.9, 91.41, 91.41]} />
        <mesh geometry={nodes.Object_608_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_61_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_610_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_612_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_614_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_616_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_618_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_620_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_622_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_624_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_626_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_628_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_63_Material060_0.geometry} material={materials['Material.074_34']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_630_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_632_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_634_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_636_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_638_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_640_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_642_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_644_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_646_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_648_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_65_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_650_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_652_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_654_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_656_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_658_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_660_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_662_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_664_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_666_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_668_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_67_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_670_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_672_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_674_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_676_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_678_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_680_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_682_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_684_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_686_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_688_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_69_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_690_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_692_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_694_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_696_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_698_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_700_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_702_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_704_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_706_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_708_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_71_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_710_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_712_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_714_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_716_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_718_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_720_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_722_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_724_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_726_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_728_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_73_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_730_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_732_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_734_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_736_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_738_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_740_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_742_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_744_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_746_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_748_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_75_Material066_0.geometry} material={materials['Material.074_35']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_750_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_752_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_754_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_756_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_758_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_760_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_762_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_764_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_766_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_768_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_77_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_770_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_772_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_774_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_776_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_778_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_780_Tasten_0.geometry} material={materials['Material.025']} position={[147.71, 34.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_784_Material057_0.geometry} material={materials['Material.074_33']} position={[174.16, 46.92, 307.71]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={49.82} />
        <mesh geometry={nodes.Object_786_Material057_0.geometry} material={materials['Material.074_33']} position={[191.38, 45.23, 324.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={49.82} />
        <mesh geometry={nodes.Object_79_Material057_0.geometry} material={materials['Material.074_33']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_790_Material057_0.geometry} material={materials['Material.074_33']} position={[191.38, 45.23, 290.1]} rotation={[-Math.PI / 2, 0, 0]} scale={49.82} />
        <mesh geometry={nodes.Object_792_Material057_0.geometry} material={materials['Material.074_33']} position={[190.94, 45.23, 307.68]} rotation={[-Math.PI / 2, 0, -1.54]} scale={52.61} />
        <mesh geometry={nodes.Object_794_Material070_0.geometry} material={materials['Material.074_39']} position={[139.38, 50.46, 591.26]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={29.27} />
        <mesh geometry={nodes.Object_796_Material070_0.geometry} material={materials['Material.074_39']} position={[141.11, 50.46, 586.29]} rotation={[-Math.PI / 2, 0, 0]} scale={29.27} />
        <mesh geometry={nodes.Object_8_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -1.57, 0]} scale={91.41} />
        <mesh geometry={nodes.Object_81_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_83_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_85_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_87_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_89_Material068_0.geometry} material={materials['Material.074_37']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_91_Material067_0.geometry} material={materials['Material.074_36']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_93_Material069_0.geometry} material={materials['Material.074_38']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_95_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_97_Material005_0.geometry} material={materials['Material.074_32']} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Object_99_Tasten_2_0.geometry} material={materials.Tasten_2} position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, 1.57]} scale={91.41} />
        <mesh geometry={nodes.Plane_Material053_0.geometry} material={materials['Material.074_21']} position={[117.18, 25.6, -29.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[124.43, 154.11, 119.91]} />
        <mesh geometry={nodes.psuback_psuback_0.geometry} material={materials['Material.074_13']} position={[-260.27, 77.97, -352.75]} rotation={[0, Math.PI / 2, 0]} scale={59.49} />
        <mesh geometry={nodes['rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0'].geometry} material={materials['Material.074_9']} position={[-93.48, 83.17, -288.8]} scale={36.94} />
        <mesh geometry={nodes.Sphere_Material019_0.geometry} material={materials['Material.025']} position={[-277.54, 457.86, -407.85]} rotation={[-1.51, 0, 0]} scale={4.86} />
        <mesh geometry={nodes.Sphere001_Material019_0.geometry} material={materials['Material.025']} position={[-277.54, 457.86, -439.73]} rotation={[-1.62, 0, 0]} scale={4.86} />
        <mesh geometry={nodes['test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2'].geometry} material={materials['Material.074_18']} position={[-115.85, 150.75, -435.22]} scale={35.19} />
        <mesh geometry={nodes.Text_Material046_0.geometry} material={materials['Material.046']} position={[-143.8, 250.19, -325.72]} rotation={[0, 0, Math.PI / 2]} scale={2.44} />
        <mesh geometry={nodes.Text001_Material097_0.geometry} material={materials['Material.025']} position={[87.59, 202.48, -275.49]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[10.33, 8.38, 9.72]} />
        <mesh geometry={nodes.Torus_Material013_0.geometry} material={materials['Material.013']} position={[69.93, 356.74, -407.01]} rotation={[-Math.PI / 2, 0, 0]} scale={3.3} />
        <mesh geometry={nodes.Torus001_Material032_0.geometry} material={materials['Material.032']} position={[69.93, 356.74, -423.73]} rotation={[-Math.PI / 2, 0, 0]} scale={3.3} />
        <mesh geometry={nodes.usb_usb_0.geometry} material={materials['Material.074_14']} position={[70.47, 357.15, -289.69]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34} />
        <mesh geometry={nodes.usb001_usb_0.geometry} material={materials['Material.074_14']} position={[70.47, 357.15, -321]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34} />
        <mesh geometry={nodes.usb002_usb_0.geometry} material={materials['Material.074_14']} position={[70.47, 357.15, -352.59]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34} />
        <mesh geometry={nodes.usb003_usb_0.geometry} material={materials['Material.074_14']} position={[70.47, 357.15, -384.89]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34} />
      </group>
    </group>
  )
}




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
		<group rotation={[Math.PI / 2, 0, 0]} scale={10} position={[5, 52, 20]} >
		  <mesh geometry={nodes['cover-vertical'].geometry} material={materials['trnasparente.001']} />
		  <mesh geometry={nodes.headband.geometry} material={materials['FABRIC 1_FRONTU3.001']} />
		  <mesh geometry={nodes.Hook.geometry} material={materials['Hook.002']} position={[0, -4.12, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
		  <mesh geometry={nodes.paper.geometry} material={materials['Card.002']} >
			<Html className="LanContent" rotation-x={Math.PI / 1} rotation-z={Math.PI / 280} position={[0, 0.05, -0.09]} transform occlude>
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
	<div className="bg">
	   <Header />
	    <Introduction />
	   <div className="deskSetup">
			<Canvas>
				<Suspense fallback={null}>
					<hemisphereLight intensity={0.15}
					groundColor="black" />
					<pointLight intensity={1} />
					<spotLight
					position={[-20, 50, 10]}
					angle={0.12}
					penumbra={1}
					intensity={1}
					castShadow
					shadow-mapSize={1024}
					/>
					<OrbitControls enableZoom={false} 
					maxPolarAngle={Math.PI/2} 
					minPolarAngle={Math.PI/2}/>
					<Desk />
				</Suspense>
			</Canvas>
	   </div>
	   <motion.div className="workinfo"
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true }}
		transition={{
			delay: 0.3,
			duration: 2
		 }}>
		 <AboutMe />
		<div className="lanyard">
			<Canvas>
				<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[20, 50, 10]}  />
				<Lanyard />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[15, 200, 90]} fov={80}/>
				<OrbitControls />
			</Suspense>
			<Preload all />
			</Canvas>
		</div>
		
	   </motion.div>
		<SkillsTitle />

	   <motion.div 
	   initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true }}
		transition={{
			delay: 0.4,
			duration: 2
		 }}
	   className="skills">
			<MySkills />
			<Canvas>
				<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[10, 40, 90]}  />
				<Skills />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[5, 160, 200]} fov={80}/>
				</Suspense>
				<Preload all />
			</Canvas>
	   </motion.div>

	   <PortfolioTitle />
	   <motion.div 
	   initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true }}
		transition={{
			delay: 0.4,
			duration: 2
		 }}
	   className="projects">
	   		 <Canvas>
			<Suspense fallback={null}>
				<ambientLight intensity={0.4} />
				<pointLight position={[20, 50, 80]}  />
				<TheOu />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[20, 200, 180]} fov={80}/>
			</Suspense>
			<Preload all />
		</Canvas>
			<Projects />
	   </motion.div>

	   <GetInTouchTitle />

		<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		viewport={{ once: true }}
		transition={{
			delay: 0.4,
			duration: 2
		 }}
		className="contactDetails">
			<GetInTouch />
		</motion.div>

	   <Canvas className="contact">
			<Suspense fallback={null}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 0, 180]}  />
					<TextMe />
				<PerspectiveCamera makeDefault aspect={1200 / 600} position={[-60, 0, 150]} fov={70}/>
			</Suspense>
			<Preload all />
	   </Canvas>
	   <Footer />
	   <Loader />
	</div>
  );
}

export default App;
