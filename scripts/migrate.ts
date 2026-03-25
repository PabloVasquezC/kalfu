import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Note: You need a write token for this or run it with an authenticated CLI context
// For simplicity, this script is designed to be run locally
// Usage: ts-node scripts/migrate.ts

const client = createClient({
  projectId: 'rbgcoosd',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-03-25',
  token: process.env.SANITY_WRITE_TOKEN, // User needs to provide this or I'll ask them to login
})

async function migrate() {
  console.log('Starting migration...')

  // 1. Hero
  await client.createOrReplace({
    _id: 'singleton-hero',
    _type: 'hero',
    welcomeTag: 'Bienvenido a Kalfú Terapias Holísticas',
    titleLine1: 'Encuentra tu centro',
    titleLine2: 'y conecta con tu energía.',
    description: 'Un espacio de sanación en Curicó. Reiki, Flores de Bach y Sonoterapia diseñados para restaurar tu equilibrio emocional y físico.',
    primaryButtonText: 'Agendar ahora',
    primaryButtonLink: '#contact',
    secondaryButtonText: 'Conocer más',
    secondaryButtonLink: '#about',
  })

  // 2. About
  await client.createOrReplace({
    _id: 'singleton-about',
    _type: 'about',
    title: 'Nuestra Esencia',
    contentLine1: 'Kalfú significa "azul" en Mapudungun. Este color evoca la inmensidad del cielo y la profundidad del agua, elementos sagrados que nos conectan con el origen y la calma.',
    contentLine2: 'En el corazón de Curicó, hemos creado un refugio para el alma. Un espacio donde la terapia holística no es solo un tratamiento, sino un camino hacia el reencuentro contigo mismo, respetando los ciclos naturales y la energía vital.',
    features: [
      { _key: 'f1', icon: 'Leaf', text: 'Enfoque Natural y Respetuoso' },
      { _key: 'f2', icon: 'Heart', text: 'Atención Personalizada y Cálida' },
      { _key: 'f3', icon: 'Sun', text: 'Bienestar Integral (Mente, Cuerpo, Alma)' },
    ],
    quote: '"El bienestar es el estado natural del ser."',
  })

  // 3. Services
  const services = [
    { title: 'Reiki Usui', description: 'Canalización de energía vital universal para armonizar tus chakras, reducir el estrés y promover la autosanación física y emocional.', icon: 'Sparkles', color: 'bg-blue-50 text-blue-600' },
    { title: 'Flores de Bach', description: 'Terapia vibracional personalizada para gestionar emociones profundas como ansiedad, miedos y penas, devolviendo la paz interior.', icon: 'Flower2', color: 'bg-pink-50 text-pink-600' },
    { title: 'Sonoterapia', description: 'Inmersión en sonidos sagrados de cuencos tibetanos y gongs que inducen estados profundos de relajación y regeneración celular.', icon: 'Music', color: 'bg-amber-50 text-amber-600' },
    { title: 'Masajes Terapéuticos', description: 'Técnicas manuales enfocadas en liberar tensiones musculares acumuladas y contracturas, renovando tu vitalidad corporal.', icon: 'Hand', color: 'bg-teal-50 text-teal-600' },
  ]

  for (const s of services) {
    await client.create({
      _type: 'service',
      ...s
    })
  }

  // 4. Contact
  await client.createOrReplace({
    _id: 'singleton-contact',
    _type: 'contact',
    title: '¿Listo para iniciar tu sanación?',
    description: 'Reserva tu hora o consúltanos cualquier duda. Estamos aquí para acompañarte en tu proceso de bienestar.',
    whatsappNumber: '+56 9 1234 5678',
    instagramUrl: '#',
    facebookUrl: '#',
    address: 'Curicó, Región del Maule',
  })

  // 5. Team
  await client.createOrReplace({
    _id: 'singleton-team',
    _type: 'team',
    title: 'Nuestro Equipo',
    description: 'Conoce a las personas que hacen posible la magia en Kalfu. Un equipo dedicado a tu bienestar.',
    images: [] // Images need to be uploaded manually or via script with assets
  })

  console.log('Migration complete!')
}

migrate().catch(console.error)
