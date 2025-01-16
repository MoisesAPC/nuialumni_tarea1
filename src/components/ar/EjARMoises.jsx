import { Canvas} from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrMoises from './XrMoises';


function EjARMoises(){
    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrMoises />
                </XR>
            </Canvas>
        </>
)

}

export default EjARMoises;