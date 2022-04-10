import './Background.css';
import { Canvas, useFrame,extend,useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useEffect,useResource,useState, useRef, useMemo,Suspense } from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import {render} from "react-dom"
import { Plane } from '@react-three/drei';


extend({ EffectComposer, RenderPass, UnrealBloomPass })

function Triangle(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/triangle/scene.gltf')
    
    const [Yrotation, setYRotation] = useState(0); 

    useFrame((state, delta) =>
    {
      setYRotation(Yrotation+0.01); 
    })

    return (
        <group castShadow={true} ref={group} position={props.pos} rotation={[0.693571513,2.04360602,-0.74442306855]} scale={props.scale}  dispose={null}>
        <group position={[0.06, -0.06, 0]} rotation={[-Math.PI / 2, -0.01, 0]} scale={0.13}>
            <group position={[-1, -1, -1]}>
            <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.003']} />
            </group>
        </group>
        </group>
    )
    }

function Triangle1({ ...props }) {
  const group = useRef()
  const [Yrotation, setYRotation] = useState(0); 

  const [Xrotation, setXRotation] = useState(0); 

  const [Zrotation, setZRotation] = useState(0); 

    useFrame((state, delta) =>
    {
      setYRotation(Yrotation+0.05);
      setXRotation(Xrotation+0.008);
      setZRotation(Zrotation+0.004); 
      if(Yrotation > 2*Math.PI) setYRotation(Yrotation -2*Math.PI)
      if(Xrotation > 2*Math.PI) setXRotation(Xrotation -2*Math.PI)
      if(Zrotation > 2*Math.PI) setZRotation(Zrotation -2*Math.PI)

    })
  const { nodes, materials } = useGLTF('/triangletwo/Triangle1.gltf')
  return (
    <group ref={group} rotation={[Xrotation, Yrotation, Zrotation]}{...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} />
    </group>
  )
}

function Triangle2({ ...props }) {
  const group = useRef()
  const [Yrotation, setYRotation] = useState(0); 

  const [Xrotation, setXRotation] = useState(0); 

  const [Zrotation, setZRotation] = useState(0); 

    useFrame((state, delta) =>
    {
      setYRotation(Yrotation+0.02);
      setXRotation(Xrotation+0.001);
      setZRotation(Zrotation+0.001); 
      if(Yrotation > 2*Math.PI) setYRotation(Yrotation -2*Math.PI)
      if(Xrotation > 2*Math.PI) setXRotation(Xrotation -2*Math.PI)
      if(Zrotation > 2*Math.PI) setZRotation(Zrotation -2*Math.PI)

    })
  const { nodes, materials } = useGLTF('/triangletwo/Triangle1.gltf')
  return (
    <group ref={group} rotation={[Xrotation, Yrotation, Zrotation]}{...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} />
    </group>
  )
}

function Box(props)
{
  const [xPos, setXPos] = useState(props.pos[0]);
  const [Yrotation, setYRotation] = useState(0); 

  const [Xrotation, setXRotation] = useState(0); 

  const [Zrotation, setZRotation] = useState(0); 

    useFrame((state, delta) =>
    {
      setYRotation(Yrotation-0.02);
      setXRotation(Xrotation+0.001);
      setZRotation(Zrotation+0.001); 
      if(Yrotation > 2*Math.PI) setYRotation(Yrotation -2*Math.PI)
      if(Xrotation < 0) setXRotation(Xrotation + 2*Math.PI)
      if(Zrotation > 2*Math.PI) setZRotation(Zrotation -2*Math.PI)

    })

  const ref = useRef(); 
  

  return (
      <mesh scale={2} position={[0, -25, -80]} rotation={[Xrotation,Yrotation+Math.PI/4,Zrotation]} ref={ref} >
        <boxBufferGeometry args={[1,1,1]} attach="geometry"/>
        <meshPhongMaterial color={"lightblue"} attach="material"></meshPhongMaterial>
      </mesh>
  )
}


function Background(props) {
    return (
        <div className='BackgroundCanvas'>
            <Canvas style={{position:"fixed"}} shadows={true} camera={{ zoom: 10, position: [0, 20, 100] }}>
              
              <ambientLight intensity={0.1}></ambientLight>
              <pointLight intensity={0.4} color="#cc00cc"position={[10, 10, -10]} />

              <pointLight intensity={0.4} color="lightblue" position={[-10, 10, 10]} />
              {/* <Plane 
              recieveShadow 
              rotation={[-Math.PI/2,0,0]}
               position={[0,-20,-60]} 
               args={[1000,100]}>
                      <meshStandardMaterial attach={"material"} color={"white"}></meshStandardMaterial>
                    </Plane> */}

                <Suspense fallback={null}>

                <Box pos={[0,0,-10]}/>
                  <Triangle1 castShadow scale={0.5} position={[0,-8.5,-60]} />
                  <Triangle1 castShadow scale={0.2} position={[0,-8.7,-60]} />
                  {/* <Model scale={9} pos={[0,-8,-5]} rotation={[0,Math.PI/2,0]} />
                    */}
                </Suspense>

            </Canvas>
        </div>
    )
}

export default Background