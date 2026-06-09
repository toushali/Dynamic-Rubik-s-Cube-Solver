'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AnimatedCube() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x050508, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 3

    // Create Rubik's Cube
    const cubeGroup = new THREE.Group()
    scene.add(cubeGroup)

    const colors = [
      0xff6b6b, // Red
      0xffd93d, // Yellow
      0x6bcf7f, // Green
      0x4d96ff, // Blue
      0xff6b9d, // Pink
      0xffffff, // White
    ]

    const positions = [
      { pos: [1, 0, 0], rot: [0, Math.PI / 2, 0] }, // Right - Red
      { pos: [-1, 0, 0], rot: [0, -Math.PI / 2, 0] }, // Left - Orange
      { pos: [0, 1, 0], rot: [Math.PI / 2, 0, 0] }, // Up - Yellow
      { pos: [0, -1, 0], rot: [-Math.PI / 2, 0, 0] }, // Down - White
      { pos: [0, 0, 1], rot: [0, 0, 0] }, // Front - Green
      { pos: [0, 0, -1], rot: [0, Math.PI, 0] }, // Back - Blue
    ]

    positions.forEach((config, index) => {
      const geometry = new THREE.BoxGeometry(0.98, 0.98, 0.98)
      const material = new THREE.MeshPhongMaterial({
        color: colors[index],
        emissive: colors[index],
        emissiveIntensity: 0.2,
        shininess: 100,
      })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(...(config.pos as [number, number, number]))
      cube.rotation.set(...(config.rot as [number, number, number]))
      cubeGroup.add(cube)

      // Add glow edges
      const edges = new THREE.EdgesGeometry(geometry)
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x00f5ff, linewidth: 2 })
      )
      cube.add(line)
    })

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x00f5ff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Add glow beneath cube
    const glowGeometry = new THREE.PlaneGeometry(3, 3)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.1,
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.z = -0.5
    glow.rotation.x = Math.PI / 2
    scene.add(glow)

    // Animate
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      // Slow Y-axis rotation
      cubeGroup.rotation.y += 0.005
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
