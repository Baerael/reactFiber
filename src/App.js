import React, { useRef, useState, Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, extemd, useTHree, useRender, useFrame, useLoader } from 'react-three-fiber'
import { useSpring } from 'react-spring/three'

import './App.css'
import S from './ship.gltf'
import F from './fighter.glb'

const SpaceShip = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load(F, setModel);
  })
    console.log("here");
    console.log(model);
    return model ? <primitive object={model.scene} /> : null
}


function Thing(props) {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
      >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  )
}


export default function() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Thing />
    </Canvas>
  )
}
