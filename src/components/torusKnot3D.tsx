import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, useGLTF} from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import { Mesh, BufferGeometry, NormalBufferAttributes, Material, Object3DEventMap } from 'three'

export function Level() {
    const { scene } = useGLTF('/level-react-draco.glb')
    const levelNode = scene.getObjectByName('Level')
    if (!(levelNode instanceof Mesh)) return null
    return <mesh geometry={levelNode.geometry} material={levelNode.material} position={[-0.38, 0.69, 0.62]} rotation={[Math.PI / 2, -Math.PI / 9, 0]} />
}

export function Sudo() {
    const { scene } = useGLTF('/level-react-draco.glb')
    const levelSudo = scene.getObjectByName('Sudo')
    const levelSudoHead = scene.getObjectByName('SudoHead')
    const [spring, api] = useSpring(() => ({ rotation: [Math.PI / 2, 0, 0.29], config: { friction: 40 } }), [])
    useEffect(() => {
        let timeout: string | number | NodeJS.Timeout | undefined
        const wander = () => {
            api.start({ rotation: [Math.PI / 2 + THREE.MathUtils.randFloatSpread(2) * 0.3, 0, 0.29 + THREE.MathUtils.randFloatSpread(2) * 0.2] })
            timeout = setTimeout(wander, (1 + Math.random() * 2) * 800)
        }
        wander()
        return () => clearTimeout(timeout)
    }, [])

    if (!((levelSudo instanceof Mesh) && (levelSudoHead instanceof Mesh))) return null

    return (
        <>
            <mesh geometry={levelSudo.geometry} material={levelSudo.material} position={[0.68, 0.33, -0.67]} rotation={[Math.PI / 2, 0, 0.29]} />
            <a.mesh geometry={levelSudoHead.geometry} material={levelSudoHead.material} position={[0.68, 0.33, -0.67]} {...spring} rotation={[Math.PI / 2, 0, 0.29]}/>
        </>
    )
}

export function Camera() {
    // const { nodes, materials } = useGLTF('/level-react-draco.glb')
    const { scene } = useGLTF('/level-react-draco.glb')
    const levelCamera = scene.getObjectByName('Camera')
    const levelCamera_1 = scene.getObjectByName('Camera_1')
    const levelLens = scene.getObjectByName('Lens')

    const [spring, api] = useSpring(() => ({ 'rotation-z': 0, config: { friction: 40 } }), [])
    useEffect(() => {
        let timeout: string | number | NodeJS.Timeout | undefined
        const wander = () => {
            api.start({ 'rotation-z': Math.random() })
            timeout = setTimeout(wander, (1 + Math.random() * 2) * 800)
        }
        wander()
        return () => clearTimeout(timeout)
    }, [])

    if (!((levelCamera instanceof Mesh) && (levelCamera_1 instanceof Mesh) && (levelLens instanceof Material))) return null
    return (
        <a.group position={[-0.58, 0.83, -0.03]} rotation={[Math.PI / 2, 0, 0.47]} {...spring}>
            {/* <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
            <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} /> */}
            <mesh geometry={levelCamera.geometry} material={levelCamera.material} />
            <mesh geometry={levelCamera_1.geometry} material={levelLens} />
        </a.group>
    )
}

export function Cactus() {
    // const { nodes, materials } = useGLTF('/level-react-draco.glb')
    const { scene } = useGLTF('/level-react-draco.glb')
    const levelCactus = scene.getObjectByName('Cactus')

    if (!(levelCactus instanceof Mesh)) return null;
    return (
        <mesh geometry={levelCactus.geometry} position={[-0.42, 0.51, -0.62]} rotation={[Math.PI / 2, 0, 0]}>
            <MeshWobbleMaterial factor={0.4} map={levelCactus.material.map} />
        </mesh>
    )
}

export function Box({ scale = 1, ...props }) {
    const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => { 
        if (ref.current) {
            ref.current.rotation.x = ref.current.rotation.y += delta
        }
    })
    return (
        <mesh
            {...props}
            ref={ref}
            scale={(clicked ? 1.5 : 1) * scale}
            onClick={() => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry />
            <meshLambertMaterial color={hovered ? 'violet' : 'cyan'} />
        </mesh>
    )


}
