'use client';

import { motion } from 'framer-motion';
import MagicButton from '../ui/MagicButton';
import { CardHoverEffect } from '../ui/card-hover-effect';

const certifications = [
  {
    title: "Core Java Programming Course",
    subtitle: "Rooman Technologies",
    date: "Aug 2020",
    link: "https://www.linkedin.com/in/devika-shendkar/details/certifications/1706639397962/single-media-viewer/?profileId=ACoAAC3gUkoB0KAkIkd9-g8wEOW2BdP8zE-zVyk"
  },
  {
    title: "REST APIs with Spring and Java Skill Path",
    subtitle: "Codecademy",
    date: "Apr 2024",
    link: "https://www.codecademy.com/profiles/digital2389255491/certificates/60f1edf0ac9368001c6025c4"
  },
  {
    title: "J.P. Morgan - Software Engineering Job Simulation",
    subtitle: "Forage",
    date: "Feb 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_HJHgEHLjtF3KBfAnM_1708033826214_completion_certificate.pdf"
  },
  {
    title: "Complete Web Developer Course",
    subtitle: "Udemy",
    date: "May 2020",
    link: "https://www.linkedin.com/in/devika-shendkar/details/certifications/1706639574181/single-media-viewer/?profileId=ACoAAC3gUkoB0KAkIkd9-g8wEOW2BdP8zE-zVyk"
  },
  {
    title: "Winner - Smart India Hackathon 2019",
    subtitle: "Govt Of India",
    date: "Mar 2019",
    link: "https://www.linkedin.com/in/devika-shendkar/details/certifications/1706639458616/single-media-viewer/?profileId=ACoAAC3gUkoB0KAkIkd9-g8wEOW2BdP8zE-zVyk"
  },
];
export default function Certifications() {
  return (
    <section id="certifications" className="py-16 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHoverEffect className="!bg-gradient-to-br !from-white/5 !to-white/10 backdrop-blur-sm !border-0 shadow-lg">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg bg-gradient-to-r from-neutral-900 via-violet-600 to-violet-400 bg-clip-text text-transparent">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-neutral-500 whitespace-nowrap ml-4">
                      {cert.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600">
                      {cert.subtitle}
                    </p>
                    <MagicButton 
                      title="View Credentials"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      }
                      position="right"
                      handleClick={() => window.open(cert.link, '_blank')}
                      otherClasses="h-8 text-xs"
                    />
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
