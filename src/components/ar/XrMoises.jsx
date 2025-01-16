import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

function Scene() {
    const modelRef = useRef();

    //para cargar el modelo (en public/model.gltf)
    const gltf = useLoader(GLTFLoader, '/model.gltf', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        loader.setDRACOLoader(dracoLoader);
    });
    
    //para que el modelo pueda rotar
    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta;
        }
    });
    
    //especificamos la posicion y escala
    return <primitive ref={modelRef} object={gltf.scene} position={[0, 0, 1]} scale={[2, 2, 2]} />
}

function XrMoises() {
    return (
        <>
            <OrbitControls />
            <ambientLight />
            <Scene />
        </>
    )
}


export default XrMoises;
