'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function OrganismCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const layers: THREE.Mesh[] = [];
    const layerColors = [0xcccccc, 0xaaaaaa, 0x888888, 0x666666, 0x999999];
    const layerRadii = [1.6, 1.3, 1.0, 0.7, 0.4];
    const layerOpacities = [0.08, 0.12, 0.18, 0.25, 0.4];

    layerRadii.forEach((r, i) => {
      const geo = new THREE.SphereGeometry(r, 64, 64);
      const mat = new THREE.MeshPhysicalMaterial({ color: layerColors[i], transparent: true, opacity: layerOpacities[i], roughness: 0.6, metalness: 0.1, clearcoat: 0.3, clearcoatRoughness: 0.4, side: THREE.DoubleSide, depthWrite: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.random() * 0.3;
      mesh.rotation.y = Math.random() * 0.3;
      scene.add(mesh);
      layers.push(mesh);
    });

    const organelleGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const r = 0.06 + Math.random() * 0.08;
      const geo = new THREE.SphereGeometry(r, 16, 16);
      const mat = new THREE.MeshPhysicalMaterial({ color: 0xdddddd, transparent: true, opacity: 0.5, roughness: 0.5 });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 0.25;
      mesh.position.set(Math.cos(angle) * dist, (Math.random() - 0.5) * 0.3, Math.sin(angle) * dist);
      organelleGroup.add(mesh);
    }
    scene.add(organelleGroup);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dl = new THREE.DirectionalLight(0xffffff, 0.8); dl.position.set(3, 3, 5); scene.add(dl);
    const rl = new THREE.DirectionalLight(0xffffff, 0.3); rl.position.set(-3, -2, -3); scene.add(rl);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => { mouse.x = (e.clientX / window.innerWidth - 0.5) * 2; mouse.y = (e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const resize = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth;
      const h = wrapRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;
      layers.forEach((layer, i) => { layer.rotation.y = target.x * 0.3 * (1 + i * 0.1); layer.rotation.x = -target.y * 0.2 * (1 + i * 0.1); });
      organelleGroup.rotation.y = target.x * 0.2;
      organelleGroup.rotation.x = -target.y * 0.15;
      renderer.render(scene, camera);
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('resize', resize); renderer.dispose(); };
  }, []);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: '100%', minHeight: 400 }}>
      <canvas ref={canvasRef} aria-label="Animated cellular organism — decorative" role="img" style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
