'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react'
import { SiProducthunt, SiMedium } from 'react-icons/si'
import Image from 'next/image'
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-light selection:bg-white selection:text-black overflow-hidden">
      {/* Prismatic Effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute -rotate-45 blur-3xl w-[100px] h-[500px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 -translate-x-1/2 animate-float" />
        <div className="absolute top-1/4 right-0 -rotate-45 blur-3xl w-[100px] h-[500px] bg-gradient-to-b from-orange-500 via-yellow-500 to-green-500 translate-x-1/2 animate-float-delayed" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12 relative text-base">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="text-xs tracking-widest text-neutral-500 uppercase">navigation</div>
              <nav className="space-y-2">
                {['about', 'experience', 'education', 'projects', 'skills'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item}`}
                    className="block text-base text-neutral-400 hover:text-white transition-colors"
                  >
                    ⌁ {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            <div className="space-y-4">
              <div className="text-xs tracking-widest text-neutral-500 uppercase">connect</div>
              <div className="space-y-2">
                <ContactLink icon={<Mail size={16} />} text="hmelmorsi@gmail.com" href="mailto:hmelmorsi@gmail.com" />
                <ContactLink icon={<Phone size={16} />} text="+201156007422" href="tel:+201156007422" />
                <ContactLink icon={<MapPin size={16} />} text="Cairo, Egypt" href="#" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs tracking-widest text-neutral-500 uppercase">social</div>
              <div className="flex gap-4">
                <SocialLink icon={<Github size={18} />} href="https://github.com/hishamelmorsi7" />
                <SocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/hishamelmorsi/" />
                <SocialLink icon={<SiMedium size={18} />} href="https://medium.com/@hmelmorsi" />
                <SocialLink icon={<SiProducthunt size={18} />} href="https://www.producthunt.com/@hisham_elmorsi" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 space-y-16">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative aspect-[4/5] bg-neutral-900 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-6012380617678896293-y-jpg-1692061505687-mE8ivL8AvatQv521qkhczN1mSQfLtP.webp"
                  alt="Hisham Elmorsi"
                  fill
                  className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  priority
                />
              </div>
              <div>
                <h1 className="text-4xl font-extralight mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-white to-neutral-300">
                  HISHAM ELMORSI
                </h1>
                <p className="text-neutral-400 text-base leading-relaxed">
                  Backend Developer & Founder with a focus on creating efficient, scalable solutions. 
                  Currently building 99hired, a specialized platform for backend developers in the Middle East.
                </p>
              </div>
            </motion.header>

            {/* Experience */}
            <Section id="experience" title="experience">
              <div className="space-y-8">
                <TimelineItem 
                  title="Software Engineer"
                  company="Wataneya Company for Roads"
                  period="May 2024 - Present"
                  description={[
                    "Software Infrastructure and Back-End Web Development",
                    "Full-time, On-site position",
                    "Contributed to the company's software infrastructure",
                    "Developed and maintained back-end systems"
                  ]}
                />
                <TimelineItem 
                  title="Founder"
                  company="99hired"
                  period="2023/11 - Present"
                  description={[
                    "Spearheaded the development of a specialized job platform for backend positions",
                    "Automated end-to-end job acquisition and filtering processes",
                    "Achieved 1.7k user acquisition within initial 10 days"
                  ]}
                />
                <TimelineItem 
                  title="Software Engineer Intern"
                  company="Scandiweb"
                  period="2022/05 - 2022/06"
                  description={[
                    "E-commerce development with Magento Framework",
                    "Professional software development practices"
                  ]}
                />
              </div>
            </Section>

            {/* Skills */}
            <Section id="skills" title="skills">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <SkillGroup title="Languages" items={['JavaScript (Node)', 'Ruby', 'PHP']} />
                <SkillGroup title="Databases" items={['MongoDB', 'MySQL']} />
                <SkillGroup title="Frameworks" items={['Express', 'React', 'Next.js']} />
                <SkillGroup title="Tools" items={['Git', 'GitHub', 'Docker']} />
                <SkillGroup title="Practices" items={['OOP', 'Design Patterns']} />
                <SkillGroup title="Soft Skills" items={['Problem Solving', 'Communication', 'Leadership']} />
              </div>
            </Section>

            {/* Projects */}
            <Section id="projects" title="projects">
              <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard 
                  title="99hired"
                  tech="Node.js, Express, MongoDB"
                  description="Job board platform for backend developers in the Middle East"
                  link="https://99hired.tech"
                />
                <ProjectCard 
                  title="JobScraper"
                  tech="Node.js, Cheerio"
                  description="Automated scraper for backend development positions"
                  link="https://github.com/HishamElmorsi7/JobScraper"
                />
                <ProjectCard 
                  title="MVC Mini Framework"
                  tech="Node.js, Express"
                  description="A mini PHP framework with built-in CRUD App        —"
                  link="https://github.com/HishamElmorsi7/mvc_mini_framework"
                />
                <ProjectCard 
                  title="KnightTravils"
                  tech="Ruby"
                  description="Chess pathfinding algorithm implementation using BFS"
                  link="https://github.com/HishamElmorsi7/Knights_Travils"
                />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}


function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="scroll-mt-8"
    >
      <div className="text-sm tracking-widest text-neutral-500 uppercase mb-8">{title}</div>
      {children}
    </motion.section>
  )
}

function TimelineItem({ title, company, period, description }) {
  return (
    <div className="group">
      <div className="grid md:grid-cols-[200px,1fr] gap-4 md:gap-8">
        <div className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">{period}</div>
        <div>
          <h3 className="text-xl font-light mb-1 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-base text-neutral-400 mb-4 group-hover:text-neutral-300 transition-colors">{company}</p>
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-base text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function SkillGroup({ title, items }) {
  return (
    <div className="space-y-3 group">
      <h3 className="text-base font-light group-hover:text-white transition-colors">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-base text-neutral-500 group-hover:text-neutral-400 transition-colors">{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ title, tech, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="p-6 bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 group transition-all duration-300">
        <h3 className="text-xl font-light mb-2 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm text-neutral-500 mb-3 group-hover:text-neutral-400 transition-colors">{tech}</p>
        <p className="text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">{description}</p>
      </Card>
    </a>
  )
}

function ContactLink({ icon, text, href }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
    >
      {icon}
      <span className="text-base group-hover:text-white transition-colors">{text}</span>
    </a>
  )
}

function SocialLink({ icon, href }) {
  return (
    <a 
      href={href}
      className="text-neutral-500 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

