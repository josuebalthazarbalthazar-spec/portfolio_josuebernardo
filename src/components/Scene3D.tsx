import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Pre-allocated math helpers at module scope to eliminate Garbage Collection in render loop
const _tempVec = new THREE.Vector3();
const _targetEuler = new THREE.Euler();
const _currentEuler = new THREE.Euler();
const _dummyMatrix = new THREE.Matrix4();
const _dummyPos = new THREE.Vector3();
const _dummyScale = new THREE.Vector3();
const _dummyQuat = new THREE.Quaternion();

interface Scene3DProps {
  className?: string;
}

export const Scene3D: React.FC<Scene3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLError, setWebGLError] = useState(false);

  // References to communicate with the render loop without re-triggering effects
  const settingsRef = useRef({
    reducedMotion: false,
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    scrollY: 0
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    settingsRef.current.reducedMotion = mediaQuery.matches;

    // WebGL capability check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLError(true);
        return;
      }
    } catch {
      setWebGLError(true);
      return;
    }

    // 1. Scene, Camera, Renderer Setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080B12, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebGLError(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Studio Environment map via PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    // 2. Core Digital Architecture (Nodes, Layers, Geometries)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Nucleus: Icosahedron with Physical Metal & Glow
    const nucleusGeom = new THREE.IcosahedronGeometry(1.35, 1);
    const nucleusMat = new THREE.MeshPhysicalMaterial({
      color: 0x101c30,
      emissive: 0x0c2540,
      emissiveIntensity: 0.8,
      roughness: 0.25,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false
    });
    const nucleus = new THREE.Mesh(nucleusGeom, nucleusMat);
    coreGroup.add(nucleus);

    // Wireframe Cage around Nucleus (Architecture Grid)
    const cageGeom = new THREE.IcosahedronGeometry(1.5, 2);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x22D3EE,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    coreGroup.add(cageMesh);

    // Outer Digital Orbital Rings (Torus with different axes)
    const ring1Geom = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x3B82F6,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.8
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI * 0.3;
    ring1.rotation.y = Math.PI * 0.2;
    coreGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x22D3EE,
      emissive: 0x0891b2,
      emissiveIntensity: 0.4,
      roughness: 0.2,
      metalness: 0.9
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.4;
    ring2.rotation.z = Math.PI * 0.15;
    coreGroup.add(ring2);

    const ring3Geom = new THREE.TorusGeometry(3.1, 0.01, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.45
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI * 0.5;
    coreGroup.add(ring3);

    // Instanced Mesh for Distributed Data Nodes (Points representing distributed systems & microservices)
    const nodeCount = 42;
    const nodeGeom = new THREE.BoxGeometry(0.08, 0.08, 0.08);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x22D3EE,
      emissive: 0x3B82F6,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.8
    });
    const instancedNodes = new THREE.InstancedMesh(nodeGeom, nodeMat, nodeCount);
    instancedNodes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // Initial node positioning in spherical cloud
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const radius = 2.0 + (i % 3) * 0.6;
      const theta = (i / nodeCount) * Math.PI * 2;
      const phi = Math.acos(2 * (i / nodeCount) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      _dummyPos.copy(pos);
      _dummyScale.set(1, 1, 1);
      _dummyQuat.identity();
      _dummyMatrix.compose(_dummyPos, _dummyQuat, _dummyScale);
      instancedNodes.setMatrixAt(i, _dummyMatrix);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    instancedNodes.computeBoundingSphere();
    coreGroup.add(instancedNodes);

    // Subtle Data Particles (Network flow)
    const particleCount = 180;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8.5;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x60A5FA,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // 3. Cinematic Studio Lighting
    const keyLight = new THREE.DirectionalLight(0x3B82F6, 3.5);
    keyLight.position.set(5, 4, 6);
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x22D3EE, 2.8);
    cyanRimLight.position.set(-5, -3, -4);
    scene.add(cyanRimLight);

    const ambientLight = new THREE.AmbientLight(0x080B12, 1.2);
    scene.add(ambientLight);

    // 4. Mouse / Touch & Scroll Listeners
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      settingsRef.current.mouse.targetX = x * 0.85;
      settingsRef.current.mouse.targetY = y * 0.85;
    };

    const handleScroll = () => {
      settingsRef.current.scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 5. Animation Loop with Exponential Damping
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const render = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      const settings = settingsRef.current;
      const speed = settings.reducedMotion ? 0.1 : 1;

      // Smooth mouse follow with exponential damping
      settings.mouse.x = THREE.MathUtils.damp(settings.mouse.x, settings.mouse.targetX, 4, delta);
      settings.mouse.y = THREE.MathUtils.damp(settings.mouse.y, settings.mouse.targetY, 4, delta);

      // Core rotation: continuous + mouse parallax + subtle scroll tilt
      const scrollTilt = (settings.scrollY * 0.0006);

      coreGroup.rotation.y += 0.25 * delta * speed;
      coreGroup.rotation.x = settings.mouse.y * 0.45 + scrollTilt;
      coreGroup.rotation.z = -settings.mouse.x * 0.35;

      // Counter-rotating orbital rings
      ring1.rotation.z += 0.4 * delta * speed;
      ring2.rotation.y -= 0.3 * delta * speed;
      ring3.rotation.x += 0.2 * delta * speed;
      cageMesh.rotation.y -= 0.15 * delta * speed;

      // Gentle floating animation
      const elapsedTime = clock.getElapsedTime() * speed;
      nucleus.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

      // Rotate particles subtly
      particleSystem.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup resources to prevent WebGL memory leak
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      nucleusGeom.dispose();
      nucleusMat.dispose();
      cageGeom.dispose();
      cageMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      instancedNodes.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      envTexture.dispose();
      pmremGenerator.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webGLError) {
    return (
      <div className={`relative flex items-center justify-center p-8 ${className}`}>
        <div className="relative w-72 h-72 rounded-2xl border border-slate-800 bg-[#101621]/60 flex flex-col items-center justify-center text-center p-6">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#22D3EE] animate-spin flex items-center justify-center mb-4">
            <div className="w-8 h-8 rounded-full bg-[#3B82F6]/30 border border-[#3B82F6]"></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">Modo visual alternativo ativo para o seu dispositivo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* 3D Canvas Viewport */}
      <div 
        ref={containerRef} 
        className="w-full h-[480px] md:h-[560px] lg:h-[620px] cursor-grab active:cursor-grabbing"
        aria-label="Cena 3D abstracta de geometria e dados"
        role="img"
      />
    </div>
  );
};
