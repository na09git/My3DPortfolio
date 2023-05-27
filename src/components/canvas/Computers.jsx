import { Suspence, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { OrbitControls, preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    return ( < mesh >
        <
        hemisphereLight intensity = { 0.15 }
        groundColor = "black" / >
        <
        pointLight intensity = { 1 }
        />   <
        spotLight position = {
            [-20, 50, 10]
        }
        angle = { 0.12 }
        penumbra = { 1 }
        intensity = { 1 }
        castShadow shadow - mapSize = { 1024 }
        /> <
        primitive object = { computer.scene }
        scale = { isMobile ? 0.7 : 0.75 }
        position = {
            isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]
        }
        rotation = {
            [-0.01, -0.2, -0.1]
        }
        /> </mesh >
    )
}
const ComputerCanvas = () => {
        const [isMobile, setIsMobile] = useState(flase);
        useEffect(() => {
                const mediaQuery = window.matchMedia('
                        (max - width: 500 px)
                        ');
                        setIsMobile(mediaQuery.matches);
                        const handleMediaQueryChange = (event) => {
                            setMobile(event.matches);
                            mediaQuery.addEventListner('change',
                                handleMediaQueryChange);
                            return () => {
                                mediaQuery.removeEventListner('change',
                                    handleMediaQueryChange);
                            }
                        }
                    },
                    [third]) return { <
                Canvas
                frameLoop = "demand"
                shadows
                camera = {
                    { position: { 20, 3, 5 }, fov: 25 }
                }
                gl = {
                    { preserveDrawingBuffer: true }
                } >
                <
                Suspence fallback = { < CanvasLoader / > } >
                <
                OrbitControls enableZoom = { false }
                / > <
                maxPolarAngle = { Math.PI / 2 }
                />    <
                minPolarAngle = { Math.PI / 2 }
                />       <
                Computers isMobile = { isMobile }
                / > < /
                Suspence >

                <
                /Canvas>
            }
        }
        export default Computers