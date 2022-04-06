import './Background.css';
import { Canvas, useFrame,useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useResource,useState, useRef, useMemo,Suspense } from 'react'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model(props ) {
    const group = useRef()
  const { nodes, materials } = useGLTF('/dell/scene.gltf')
  return (
    <group ref={group} scale={props.scale} rotation={props.rotation} position={props.pos} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.09, 0.15, 0]} scale={[0.08, 0.08, 0.16]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.material} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.material_1} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.material_2} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.material_3} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['.002']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials['.001']} />
            <mesh geometry={nodes.Object_11.geometry} material={materials['.003']} />
          </group>
        </group>
      </group>
    </group>
    )}
function Triangle(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/triangle/scene.gltf')
    
    const [Yrotation, setYRotation] = useState(0); 

    useFrame((state, delta) =>
    {
      setYRotation(Yrotation+0.01); 
    })

    return (
        <group ref={group} position={props.pos} rotation={[0.693571513,2.04360602,-0.74442306855]} scale={props.scale}  dispose={null}>
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
      setYRotation(Yrotation+0.01);
      setXRotation(Xrotation+0.02);
      setZRotation(Zrotation+0.005); 
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
function Background(props) {
    return (
        <div className='BackgroundCanvas'>
            <Canvas perspective camera={{ zoom: 10, position: [0, 20, 100] }}>
              <ambientLight intensity={0.2}></ambientLight>
              <pointLight position={[10, 10, -10]} />
                <Suspense fallback={null}>
                    <Triangle1 scale={0.5} position={[0,-8,-60]} />
                    <Model scale={5} pos={[0,-6,-5]} rotation={[0,Math.PI/2,0]} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Background