'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedCube from '@/components/AnimatedCube'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={heroVariants}
          >
            Solve Any Cube.{' '}
            <span className="text-cyan-glow">Instantly.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={heroVariants}
          >
            Advanced AI-powered solver using computer vision. Scan your scrambled cube and get the optimal solution in seconds.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={heroVariants}>
            <Link
              href="/scan"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 border-cyan-glow glow"
            >
              Start Scanning
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Cube */}
        <motion.div
          className="mt-12 w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="glow">
            <AnimatedCube />
          </div>
        </motion.div>
      </div>

      {/* How It Works Section */}
      <motion.div
        className="relative z-10 py-24 px-4 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>

          {/* Step Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1: Scan */}
            <motion.div
              className="glass border-cyan-glow p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-2">Scan Your Cube</h3>
              <p className="text-gray-400">
                Point your device camera at each face of your scrambled Rubik&apos;s Cube to capture the colors.
              </p>
            </motion.div>

            {/* Step 2: Detect */}
            <motion.div
              className="glass border-cyan-glow p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Detects Colors</h3>
              <p className="text-gray-400">
                Advanced computer vision analyzes each face and identifies the exact color positions.
              </p>
            </motion.div>

            {/* Step 3: Solve */}
            <motion.div
              className="glass border-cyan-glow p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Get Solution</h3>
              <p className="text-gray-400">
                Receive the optimal solution with step-by-step moves to solve your cube in the fewest turns.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
