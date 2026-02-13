
import React from 'react';
import { Section } from '../components/Section';
import { Badge } from '../components/Badge';

export const JobPulseCaseStudy: React.FC = () => {
  return (
    <Section title="Engineering Deep Dive" id="case-study" className="bg-zinc-950">
      <div className="space-y-12">
        <header>
          <h3 className="text-3xl font-bold mb-4">Job Market Analytics — Snowflake & AWS Infrastructure</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Snowflake", "AWS S3", "Python", "T-SQL", "Airflow"].map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-zinc-900">
          <div>
            <h4 className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-2">Primary Objective</h4>
            <p className="text-zinc-200 text-sm">Automated ETL & Market Intelligence</p>
          </div>
          <div>
            <h4 className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-2">Tech Stack</h4>
            <p className="text-zinc-200 text-sm">Python (Pandas), AWS S3, Snowflake Cloud DW</p>
          </div>
          <div>
            <h4 className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-2">Outcome</h4>
            <p className="text-zinc-200 text-sm">Analytics-ready datasets with idempotent loads</p>
          </div>
        </div>

        <article className="prose prose-invert max-w-none space-y-8">
          <section>
            <h4 className="text-xl font-semibold mb-4 border-l-2 border-zinc-700 pl-4">Architecture Strategy</h4>
            <p className="text-zinc-400 leading-relaxed">
              Designed a cloud-native batch pipeline to ingest external job data via APIs. Raw semi-structured JSON payloads are persisted in AWS S3 (Data Lake) before being transformed and loaded into a curated Snowflake warehouse.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-4 border-l-2 border-zinc-700 pl-4">Data Quality & Idempotency</h4>
            <p className="text-zinc-400 leading-relaxed">
              Implemented robust ETL workflows including cleaning, wrangling, and normalization. By utilizing idempotent load patterns (staging tables + SQL MERGE), the system ensures reliable data access even in the event of partial pipeline failures.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-4 border-l-2 border-zinc-700 pl-4">Pipeline Visualization</h4>
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 flex items-center justify-center overflow-hidden">
                <svg width="100%" height="240" viewBox="0 0 600 240" className="text-zinc-500">
                    <rect x="20" y="80" width="100" height="60" rx="4" stroke="currentColor" fill="none" />
                    <text x="70" y="115" textAnchor="middle" fill="currentColor" className="text-[10px] font-medium mono">Job APIs</text>
                    
                    <line x1="120" y1="110" x2="160" y2="110" stroke="currentColor" strokeDasharray="4" />
                    
                    <rect x="160" y="40" width="120" height="140" rx="4" stroke="currentColor" fill="none" />
                    <text x="220" y="30" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold uppercase">AWS S3 (JSON)</text>
                    <text x="220" y="80" textAnchor="middle" fill="currentColor" className="text-[10px] mono">Data Lake</text>
                    <text x="220" y="115" textAnchor="middle" fill="currentColor" className="text-[10px] mono">Raw Storage</text>

                    <line x1="280" y1="110" x2="320" y2="110" stroke="currentColor" />

                    <rect x="320" y="40" width="120" height="140" rx="4" stroke="#71717a" fill="#18181b" />
                    <text x="380" y="30" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold uppercase">Snowflake DW</text>
                    <text x="380" y="80" textAnchor="middle" fill="#d4d4d8" className="text-[10px] mono">Stage Tables</text>
                    <text x="380" y="115" textAnchor="middle" fill="#d4d4d8" className="text-[10px] mono">SQL MERGE</text>
                    <text x="380" y="150" textAnchor="middle" fill="#d4d4d8" className="text-[10px] mono">Curated Marts</text>

                    <line x1="440" y1="110" x2="480" y2="110" stroke="currentColor" />

                    <rect x="480" y="80" width="100" height="60" rx="4" stroke="currentColor" fill="none" />
                    <text x="530" y="115" textAnchor="middle" fill="currentColor" className="text-[10px] font-medium mono">BI Dashboards</text>
                </svg>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-4">Core Deliverables</h4>
                <ul className="text-sm text-zinc-400 space-y-3 list-disc pl-4">
                    <li>Dynamic skill demand computation per seniority level.</li>
                    <li>Automated data cleaning and wrangling via Python.</li>
                    <li>Scalable cloud-native Snowflake data models.</li>
                </ul>
            </div>
            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-4">Performance Impact</h4>
                <ul className="text-sm text-zinc-400 space-y-3 list-disc pl-4">
                    <li>Enabled data-driven decision making for recruiters.</li>
                    <li>Optimized SQL transformations for high-speed reporting.</li>
                    <li>Reduced pipeline latency through efficient partitioning.</li>
                </ul>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
};
