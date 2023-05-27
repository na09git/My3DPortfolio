import React, { Suspence } from 'react'

import { Canvas } from '@react-three/fiber'
import {
    Decal,
    Float,
    OrbitControls,
    preload,
    useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader';

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return ( <
        Float speed = { 1.75 }
        rotationIntensity = { 1 }
        floatIntensity = { 2 } >
        <
        ambientLight intensity = { 0.25 }
        />  <
        directionalLight position = {
            [0, 0, 0.05]
        }
        /> <
        mesh castShadow receiveShadow scale = { 2.75 } >
        <
        icosahedronGeometry args = {
            [1, 1]
        }
        /> <
        meshStandardMaterial color = "#fff8eb"
        polygonOffset polygonOffsetFactor = {-5 }
        floatShading / >
        <
        Decla position = {
            [0, 0, 1]
        }
        rotation = {
            [2 * math.PI, 0, 6.25]
        }
        flaotShading map = { decal }
        /> < /
        mesh >

        <
        /Float >
    )
}
const BallCanvas = ({ icon }) => {
    return { <
        Canvas
        frameLoop = "demand"

        gl = {
            { preserveDrawingBuffer: true }
        } >
        <
        Suspence fallback = { < CanvasLoader / > } >
        <
        OrbitControls enableZoom = { false }
        / >  <Ball imgUrl={icon}/ > < /
        Suspence >
        <
        Perload all / >
        <
        /Canvas>
    }
}


export default BallCanvas