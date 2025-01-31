import React from 'react';
import { timeline, skills } from '../data';

export default function About() {
  const categories = {
    technical: 'Development',
    creative: 'Design & Media',
    marketing: 'Marketing & Analytics'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-title mb-8">About Me</h2>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQFjpX3mne8dlA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708200731958?e=1743638400&v=beta&t=PwBEEZ6LYoIZhK5uVBsgZPfnRayxQLWoeLRp1icC2bs"
              alt="Profile"
              className="w-full rounded-2xl mb-8 object-cover shadow-xl"
            />
            <p className="text-text mb-6">
              I'm a versatile creative professional with expertise in web development, design, and digital marketing. 
              My technical foundation in JavaScript and Python complements my proficiency in design and video editing 
              software. I specialize in creating engaging digital experiences while leveraging data analytics for 
              optimal performance in search engines and social media platforms.
            </p>
            <p className="text-text mb-6">
              With extensive experience in digital marketing and data analysis, I excel at creating 
              strategies that drive engagement and improve online visibility. My comprehensive skill set 
              allows me to approach projects holistically, from conception through implementation and optimization.
            </p>
            <a
              href="/resume.pdf"
              className="inline-block px-6 py-2 bg-title text-background rounded-full hover:bg-title/80"
            >
              Download CV
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-title mb-6">Professional Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-text/20">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-title rounded-full shadow-md" />
                  <span className="text-sm text-text/60">{item.year}</span>
                  <h4 className="font-display font-bold text-title mt-1">{item.title}</h4>
                  <p className="text-text">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-display font-bold text-title mt-12 mb-6">Skills & Expertise</h3>
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="mb-8">
                <h4 className="text-lg font-display font-bold text-title mb-4">
                  {categories[category as keyof typeof categories]}
                </h4>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-text">{skill.name}</span>
                        <span className="text-text">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2 shadow-inner">
                        <div
                          className="bg-title rounded-full h-2 shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}