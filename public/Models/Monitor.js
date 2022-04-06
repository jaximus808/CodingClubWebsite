/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/monitor.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.09, 0.15, 0]} scale={[0.08, 0.08, 0.16]}>
        <mesh geometry={nodes.큐브001_1.geometry} material={materials.HB} />
        <mesh geometry={nodes.큐브001_2.geometry} material={materials.HBB} />
        <mesh geometry={nodes.큐브001_3.geometry} material={materials.HM} />
        <mesh geometry={nodes.큐브001_4.geometry} material={materials.MM} />
        <mesh geometry={nodes.큐브001_5.geometry} material={materials.TR} />
        <mesh geometry={nodes.큐브001_6.geometry} material={materials['매테리얼.002']} />
        <mesh geometry={nodes.큐브001_7.geometry} material={materials['매테리얼.001']} />
        <mesh geometry={nodes.큐브001_8.geometry} material={materials['매테리얼.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/monitor.glb')
