
import React from 'react';
import { Section } from '../components/Section';
import { PROJECTS } from '../constants';
import { Badge } from '../components/Badge';

export const AdditionalProjects: React.FC = () => {
  return (
    <Section title="Additional Projects" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group border border-zinc-900 p-6 rounded hover:bg-zinc-900/40 transition-all duration-300">
            <h3 className="text-lg font-bold mb-3 group-hover:text-zinc-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
