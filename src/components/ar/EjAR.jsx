//Ejemplo de un cubo en toroide
import { Canvas} from "@react-three/fiber";
import XrToroide from './XrToroide';
import { ARButton, XR } from "@react-three/xr";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrToroide />
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;