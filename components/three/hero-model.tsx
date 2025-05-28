"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import { useSpring, animated } from "@react-spring/three";
import { useColorTheme } from "@/components/theme-provider";

export function HeroModel() {
  const groupRef = useRef<Group>(null);
  const sphereRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);
  const torusKnotRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { colorTheme } = useColorTheme();
  
  // Animation with react-spring
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: { mass: 2, tension: 500, friction: 40 },
  });

  // Get colors based on theme
  const getThemeColors = () => {
    switch (colorTheme) {
      case "blue":
        return {
          sphere: "#3b82f6",
          torus: "#0ea5e9",
          torusKnot: "#2563eb"
        };
      case "green":
        return {
          sphere: "#10b981",
          torus: "#059669",
          torusKnot: "#047857"
        };
      case "purple":
        return {
          sphere: "#8b5cf6",
          torus: "#7c3aed",
          torusKnot: "#6d28d9"
        };
      case "orange":
        return {
          sphere: "#f97316",
          torus: "#ea580c",
          torusKnot: "#c2410c"
        };
      default:
        return {
          sphere: "#3b82f6",
          torus: "#10b981",
          torusKnot: "#f59e0b"
        };
    }
  };

  const colors = getThemeColors();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate group based on mouse position
      const mouseX = state.mouse.x * 0.1;
      const mouseY = state.mouse.y * 0.1;
      
      groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.x += (mouseY - groupRef.current.rotation.x) * 0.1;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.2;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.2;
    }
    
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x += delta * 0.4;
      torusKnotRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <animated.group
      ref={groupRef}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={sphereRef} position={[-2, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color={colors.sphere}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      <mesh ref={torusRef} position={[2, 0, -2]}>
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
        <meshStandardMaterial 
          color={colors.torus}
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>
      
      <mesh ref={torusKnotRef} position={[0, 0, -2]}>
        <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
        <meshStandardMaterial 
          color={colors.torusKnot}
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>
    </animated.group>
  );
}