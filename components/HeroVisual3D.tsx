"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const NUM_SHAPES = 12;
const SHAPE_SIZE = 0.5;
const SHAPE_RADIUS = 0.4; // Collision radius

// Shared state for collision detection between shapes
const shapePositions: THREE.Vector3[] = [];
const shapeVelocities: THREE.Vector3[] = [];

// Initialize arrays
for (let i = 0; i < NUM_SHAPES; i++) {
  const angle = (i / NUM_SHAPES) * Math.PI * 2;
  const radius = 2 + Math.random() * 2;
  shapePositions.push(new THREE.Vector3(
    Math.cos(angle) * radius,
    Math.sin(angle) * radius,
    (Math.random() - 0.5) * 2
  ));
  shapeVelocities.push(new THREE.Vector3(0, 0, 0));
}

interface ShapeProps {
  color: string;
  mousePos: React.MutableRefObject<THREE.Vector3>;
  index: number;
}

// A single shape with physics-like behavior
function PhysicsShape({ color, mousePos, index }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const rotationVelocity = useRef(new THREE.Vector3(
    (Math.random() - 0.5) * 0.015,
    (Math.random() - 0.5) * 0.015,
    (Math.random() - 0.5) * 0.015
  ));

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const centerAttraction = 0.15; // Very slow gravitational pull
    const centerRepulsion = 0.8; // Repulsion when too close to center
    const centerRepulsionRadius = 1.8; // Distance at which center repulsion kicks in
    const cursorRepulsion = 1.5; // Gentler cursor push
    const collisionRepulsion = 4.0; // Force pushing shapes apart
    const damping = 0.98; // Higher damping = slower movement
    const cursorRadius = 2.5; // Radius of cursor influence

    const position = shapePositions[index];
    const velocity = shapeVelocities[index];

    // Calculate force toward center (origin)
    const toCenter = new THREE.Vector3(0, 0, 0).sub(position);
    const distToCenter = toCenter.length();
    let centerForce = toCenter.clone().multiplyScalar(centerAttraction * delta);
    
    // Add repulsion when too close to center (creates equilibrium zone)
    if (distToCenter < centerRepulsionRadius && distToCenter > 0.01) {
      const repulsionStrength = (1 - distToCenter / centerRepulsionRadius) * centerRepulsion * delta;
      const awayFromCenter = position.clone().normalize().multiplyScalar(repulsionStrength);
      centerForce.add(awayFromCenter);
    }

    // Calculate cursor repulsion force
    const toCursor = new THREE.Vector3().copy(position).sub(mousePos.current);
    const distToCursor = toCursor.length();
    
    let cursorForce = new THREE.Vector3(0, 0, 0);
    if (distToCursor < cursorRadius && distToCursor > 0.1) {
      const strength = (1 - distToCursor / cursorRadius) * cursorRepulsion * delta;
      cursorForce = toCursor.normalize().multiplyScalar(strength);
    }

    // Calculate collision forces with ALL other shapes
    let collisionForce = new THREE.Vector3(0, 0, 0);
    for (let i = 0; i < NUM_SHAPES; i++) {
      if (i === index) continue;
      
      const otherPosition = shapePositions[i];
      const toOther = new THREE.Vector3().copy(position).sub(otherPosition);
      const distToOther = toOther.length();
      const minDist = SHAPE_RADIUS * 2;

      if (distToOther < minDist && distToOther > 0.01) {
        const overlap = minDist - distToOther;
        const strength = overlap * collisionRepulsion * delta;
        collisionForce.add(toOther.normalize().multiplyScalar(strength));
      }
    }

    // Apply forces to velocity
    velocity.add(centerForce);
    velocity.add(cursorForce);
    velocity.add(collisionForce);
    
    // Apply damping
    velocity.multiplyScalar(damping);

    // Clamp velocity to prevent extreme speeds (lower max = slower)
    if (velocity.length() > 0.12) {
      velocity.normalize().multiplyScalar(0.12);
    }

    // Update position
    position.add(velocity);

    // Clamp position to reasonable bounds
    position.clampScalar(-5, 5);

    // Apply to mesh
    meshRef.current.position.copy(position);

    // Rotation - slower base rotation
    const rotSpeed = 0.2 + velocity.length() * 1.5;
    meshRef.current.rotation.x += rotationVelocity.current.x * rotSpeed;
    meshRef.current.rotation.y += rotationVelocity.current.y * rotSpeed;
    meshRef.current.rotation.z += rotationVelocity.current.z * rotSpeed;
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[SHAPE_SIZE, SHAPE_SIZE, SHAPE_SIZE]}
      radius={0.08}
      smoothness={4}
    >
      <meshStandardMaterial
        color={color}
        metalness={0.1}
        roughness={0.25}
        envMapIntensity={0.6}
      />
    </RoundedBox>
  );
}

// Scene component
function Scene() {
  const mousePos = useRef(new THREE.Vector3(0, 0, 0));
  const { viewport } = useThree();

  // Generate shape colors - all white
  const pastelColors = [
    "#FFFFFF", // white
    "#FFFFFF", // white
    "#FFFFFF", // white
    "#FFFFFF", // white
    "#FFFFFF", // white
    "#FFFFFF", // white
    "#FFFFFF", // white
    "#FFFFFF", // white
  ];
  
  const shapes = useMemo(() => {
    return Array.from({ length: NUM_SHAPES }, (_, i) => ({
      index: i,
      color: pastelColors[i % pastelColors.length],
    }));
  }, []);

  useFrame(({ pointer }) => {
    // Convert 2D pointer to 3D position in scene space
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    
    // Slower, smoother interpolation
    mousePos.current.x = THREE.MathUtils.lerp(mousePos.current.x, x, 0.04);
    mousePos.current.y = THREE.MathUtils.lerp(mousePos.current.y, y, 0.04);
    mousePos.current.z = 0;
  });

  return (
    <>
      {/* Lighting - soft and bright */}
      <ambientLight intensity={1.2} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.6}
      />
      <directionalLight 
        position={[-5, -2, -5]} 
        intensity={0.5}
        color="#f5f5f5"
      />
      <directionalLight 
        position={[0, -5, 3]} 
        intensity={0.4}
        color="#ffffff"
      />

      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* Multiple shapes */}
      {shapes.map((shape) => (
        <PhysicsShape
          key={shape.index}
          color={shape.color}
          mousePos={mousePos}
          index={shape.index}
        />
      ))}
    </>
  );
}

export default function HeroVisual3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
