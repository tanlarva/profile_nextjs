'use client'


import { useEffect, useState } from 'react';
import { CameraControls, PerspectiveCamera } from '@react-three/drei'
import { Level, Sudo, Camera, Cactus, Box } from '@/components/torusKnot3D'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

const Home = () => {
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    return (
        <div className="w-full h-screen grid justify-items-center -z-5 absolute top-0">
            <motion.div
                className='w-full'
                initial={{ 
                    translateY:200
                }}
                animate={{
                    translateY: 0
                }}
                transition={{ 
                    type: 'spring',
                    duration: 0.5,
                    bounce: 0.1,
                    stiffness: 100,
                    damping: 10,
                    delay: 0.15
                }}
            >
                <Canvas>
                    <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
                    <ambientLight intensity={Math.PI / 2} />
                    <group scale={4} position={[-5, -5, -5]}>
                        <Level />
                        <Sudo />
                        <Camera />
                        <Cactus />
                        <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
                    </group>
                    <PerspectiveCamera makeDefault position={[10, 5, 10]} />
                </Canvas>
            </motion.div>
        </div>
    );
}

export default Home

