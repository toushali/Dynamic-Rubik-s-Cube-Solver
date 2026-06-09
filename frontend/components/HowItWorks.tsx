'use client'

import { motion } from 'framer-motion'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Scan',
      description: 'Use your webcam to capture all six faces of the cube',
      icon: '📷',
    },
    {
      number: '2',
      title: 'Detect',
      description: 'AI analyzes each face and detects the cube configuration',
      icon: '🤖',
    },
    {
      number: '3',
      title: 'Solve',
      description: 'Get instant step-by-step solution with 3D animation',
      icon: '✨',
    },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glass morphism card */}
              <div className="relative p-6 rounded-lg border border-accent/30 bg-gradient-to-br from-surface/40 to-surface/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-accent/60 hover:shadow-glow-lg">
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-accent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3 font-mono">{step.icon}</div>
                  <div className="text-accent font-mono text-sm mb-2">Step {step.number}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
