import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import styled from 'styled-components'
import { FileDrop } from './FileDrop'

const RendererContainer = styled.div`
  width: 100%;
  height: 100vh;
`

type Model = {
  url: string
}

const Renderer = ({ file }: { file?: File }) => {
  const [model, setModel] = useState<Model>()

  const gltf = model && useLoader(GLTFLoader, model.url) as GLTF

  useEffect(() => {
    console.log('useEffect called with file:', file)
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      console.log('Setting model with objectUrl:', objectUrl)
      setModel({ url: objectUrl })
    }
  }, [file])

  useEffect(() => {
    console.log('useEffect called with model:', model)
  }, [model])
  

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {gltf && <primitive object={gltf.scene} />}
      <OrbitControls />
    </Canvas>
  )
}

const ThreeJsRenderer = () => {
  const [file, setFile] = useState<File>()

  const handleFileDrop = (files: FileList) => {
    setFile(files[0]);
  }

  useEffect(() => {
    console.log('useEffect called with file:', file)
  }, [file])

  return (
    <RendererContainer>
      {file ? <Renderer file={file} /> : <FileDrop onDrop={handleFileDrop} />}
    </RendererContainer>
  )
}

export default ThreeJsRenderer

