"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "./theme-provider";

export default function NeuralNetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Clear existing content and append renderer
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);
    
    // Create neurons (particles)
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
      
      // Size
      sizes[i] = Math.random() * 0.5 + 0.5;
    }
    
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    
    // Create material
    const particleMaterial = new THREE.PointsMaterial({
      color: theme === "dark" ? 0x3b82f6 : 0x3490dc,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Create connections (lines) between neurons
    const connections = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: theme === "dark" ? 0x8b5cf6 : 0x9561e2,
      transparent: true,
      opacity: 0.2,
    });
    
    // Create links between close particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );
        
        if (distance < 10) { // Only connect close neurons
          const geometry = new THREE.BufferGeometry();
          const points = [
            new THREE.Vector3(
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2]
            ),
            new THREE.Vector3(
              positions[j * 3],
              positions[j * 3 + 1],
              positions[j * 3 + 2]
            ),
          ];
          geometry.setFromPoints(points);
          
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
          connections.push({ line, points });
        }
      }
    }
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the neuron system
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.001;
      
      // Update connections rotation
      connections.forEach(({ line }) => {
        line.rotation.x = particleSystem.rotation.x;
        line.rotation.y = particleSystem.rotation.y;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [theme]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
} 