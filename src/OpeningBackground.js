import './Background.css';
import { Canvas, useFrame,extend,useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useEffect,useResource,useState, useRef, useMemo,Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

const sphere = new THREE.SphereGeometry(0.1, 25, 28)
const white = new THREE.MeshLambertMaterial({ color: "white" })

extend({ EffectComposer, RenderPass, UnrealBloomPass })
function Radians(degrees) {
  return degrees * Math.PI / 180
}


function Robotics({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Models/octoballs.glb')
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
  return (
    <group ref={group} rotation={[Xrotation, Yrotation, Zrotation]}{...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} scale={props.scale} />
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
function Mobile(props) {

  const [xPos,setXPos] = useState(0.01*window.innerWidth)

  const [scalewrench,setScale] = useState(0.002*window.innerWidth)
  
  const handleResize = () =>
  {
    setXPos(0.01*window.innerWidth)
    setScale(0.002*window.innerWidth)
  }


  
  useEffect(() =>
  {

    window.addEventListener("resize", handleResize)
    return () =>
    {
        window.removeEventListener("scroll", handleResize)
    }

  },[])

  return (
      <div className='BackgroundCanvas'>
          <Canvas frameloop="demand" style={{position:"fixed"}}  camera={{ zoom: 10, position: [0, 20, 100] }}>
            
            <ambientLight intensity={0.1}></ambientLight>
            <pointLight intensity={0.4} color="#cc00cc"position={[10, 10, -10]} />

            <pointLight intensity={0.4} color="lightblue" position={[-10, 10, 10]} />

              <Suspense fallback={null}>

              <Box pos={[0,0,-10]}/>
              <Triangle1 castShadow scale={0.4} position={[xPos,-10,-60]} />
              <Triangle1 castShadow scale={0.15} position={[xPos,-10.2,-60]} />
                <Robotics castShadow scale={[2*scalewrench,0.8*scalewrench,2*scalewrench]} position={[-xPos,-10,-60]}/>
                <Robotics castShadow scale={[1.5*scalewrench,0.8*scalewrench,1.5*scalewrench]} position={[-xPos,-10,-60]}/>
              </Suspense>
          </Canvas>
      </div>
  )
}


function MobileBack(props) {

    const [xPos,setXPos] = useState(0.01*window.innerWidth)

    const [scalewrench,setScale] = useState(0.002*window.innerWidth)
    
    const handleResize = () =>
    {
      setXPos(0.01*window.innerWidth)
      setScale(0.002*window.innerWidth)
    }


    
    useEffect(() =>
    {

      window.addEventListener("resize", handleResize)
      return () =>
      {
          window.removeEventListener("scroll", handleResize)
      }

    },[])

    return (
        <div className='BackgroundCanvas'>
            <Canvas frameloop="demand" style={{position:"fixed"}}  camera={{ zoom: 10, position: [0, 20, 100] }}>
              
              <ambientLight intensity={0.1}></ambientLight>
              <pointLight intensity={0.4} color="#cc00cc"position={[10, 10, -10]} />

              <pointLight intensity={0.4} color="lightblue" position={[-10, 10, 10]} />

                <Suspense fallback={null}>

                <Box pos={[0,0,-10]}/>
                <Triangle1 castShadow scale={0.4*scalewrench} position={[xPos,-10,-60]} />
                <Triangle1 castShadow scale={0.15*scalewrench} position={[xPos,-10.2,-60]} />
                  <Robotics castShadow scale={[2*scalewrench,0.8*scalewrench,2*scalewrench]} position={[-xPos,-10,-60]}/>
                  <Robotics castShadow scale={[1.5*scalewrench,0.8*scalewrench,1.5*scalewrench]} position={[-xPos,-10,-60]}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

function ComputerBack(props) {

  const [xPos,setXPos] = useState(0.008*window.innerWidth)

  const handleResize = () =>
  {
    setXPos(0.008*window.innerWidth)
  }

  useEffect(() =>
  {

    window.addEventListener("resize", handleResize)
    return () =>
    {
        window.removeEventListener("scroll", handleResize)
    }

  },[])

  return (
      <div className='BackgroundCanvas'>
          <Canvas frameloop="demand" style={{position:"fixed"}}  camera={{ zoom: 10, position: [0, 20, 100] }}>
            
            <ambientLight intensity={0.1}></ambientLight>
            <pointLight intensity={0.4} color="#cc00cc"position={[10, 10, -10]} />

            <pointLight intensity={0.4} color="lightblue" position={[-10, 10, 10]} />

              <Suspense fallback={null}>

              <Box pos={[0,0,-10]}/>
              <Triangle1 castShadow scale={0.4} position={[xPos,-10,-60]} />
              <Triangle1 castShadow scale={0.15} position={[xPos,-10.2,-60]} />
                <Robotics castShadow scale={[2,0.8,2]} position={[-xPos,-10,-60]}/>
                <Robotics castShadow scale={[1.5,0.8,1.5]} position={[-xPos,-10,-60]}/>
              </Suspense>
          </Canvas>
      </div>
  )
}

export default function OpeningBackground()
{
  return(
    <>
                {( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )? <MobileBack/> :<ComputerBack/>}
            
    </>
  )
}