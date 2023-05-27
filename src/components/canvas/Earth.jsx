import { Suspence } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


import CanvasLoader from '../Loader';

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf')

    return ( < premitive object = { earth.scene }
        scale = { 2.5 }
        position - y = { 0 }
        rotation - y = { 0 }

        / >
    )
}
const EarthCanvas = () => {
    return { <
        Canvas >
        shadows
        frameloop = 'demand';
        gl = {
            { preserveDrawingBuffer: true }
        }
        camera = {
            {
                fav: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }
        } <
        Suspence fallback = { < CanvasLoader / > } >

        <
        OrbitControls
        autoRotate
        enableZoom = { false }
        maxpolarAngle = { Math.PI / 2 }
        minpolarAngle = { Math.PI / 2 }
        / > <
        Earth /
        >
        <
        /
        Suspence > <
        /Canvas>
    }
}
export default Earth