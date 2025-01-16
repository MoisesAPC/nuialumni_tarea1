import { Canvas} from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ARButton, XR } from "@react-three/xr";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

function Scene() {
    const gltf = useLoader(GLTFLoader, '/model.gltf', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        loader.setDRACOLoader(dracoLoader);
    });
    
    return <primitive object={gltf.scene} position={[0, 0, -1]}/>
}


function EjARMoises(){
    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <Scene />
                </XR>
            </Canvas>
        </>
)

}

export default EjARMoises;