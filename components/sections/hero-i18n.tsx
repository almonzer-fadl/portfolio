'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { useTranslations } from 'next-intl'

export function HeroI18n() {
  const { theme } = useTheme()
  const t = useTranslations('hero')
  
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={theme === 'light' ? '/logoBlack.png' : '/logoWhite.png'}
            alt="FADL Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {t('name')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          {t('title')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{t('availability')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
