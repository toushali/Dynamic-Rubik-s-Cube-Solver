'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedCube } from '@/components/AnimatedCube'
import { HowItWorks } from '@/components/HowItWorks'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                Solve Any Cube.{' '}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-300 to-cyan-400"
                >
                  Instantly.
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-lg text-foreground-muted max-w-md leading-relaxed"
            >
              Powered by AI, guided by intelligence. Scan your Rubik&apos;s Cube and get
              instant solutions with step-by-step 3D visualization.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link href="/scan">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-accent to-cyan-400 text-background font-bold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg"
                >
                  Start Scanning
                </motion.button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground-muted">Real-time Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground-muted">Step-by-Step Guide</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-96 sm:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <AnimatedCube />
            </div>
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-lg border border-accent/30 shadow-glow pointer-events-none" />
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-surface/10 to-background border-t border-accent/10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Three simple steps to solve your cube with AI-powered precision
            </p>
          </motion.div>

          <HowItWorks />
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Ready to Solve?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto"
          >
            Grab your Rubik&apos;s Cube and let AI guide you through the solving process
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/scan">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-accent to-cyan-400 text-background font-bold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg"
              >
                Begin Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
