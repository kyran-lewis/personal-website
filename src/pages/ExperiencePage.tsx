import { useState } from "react";
import UoS from "../assets/university-of-sheffield.png";
import FlowGroup from "../assets/flow-group.png";
import Velociti from "../assets/velociti.png";
import DFHStats from "../assets/dfh-stats.png";
import DFHDocsAndVideos from "../assets/dfh-docs-videos.png";
import Logo from "../components/Logo";
import Spotlight from "../components/Spotlight";
import SubSection from "../components/SubSection";
import TimelineEntry from "../components/TimelineEntry";

function ExperiencePage() {
  return (
    <main className="w-full min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title - Clean, solid minimalist style */}
        <h1 className="text-4xl font-black text-gray-900 mb-12 text-center tracking-tight">
          Experience and Qualifications
        </h1>

        <div className="space-y-12">
          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
            <Logo image={FlowGroup} alt="Flow Group Logo" />

            {/* Main Header Area with wide padding constraint */}
            <div className="border-b border-gray-100 pb-4 mb-8 pr-24 md:pr-32">
              <h2 className="text-2xl font-black text-gray-900">Flow Group</h2>
              {/* Darker amber-600 text variant */}
              <p className="text-amber-500 font-semibold mt-1 flex items-center gap-1">
                <span>💻</span> Full Stack Developer
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🚀</span> Core Projects & Achievements
            </h3>

            {/* Expanded Project Breakdowns */}
            <div className="space-y-10">
              {/* Accredify Section */}
              <SubSection
                title=" Accredify Pro / Quality Management System"
                summary="Engineered robust enterprise subsystems focusing heavily on
                    interactive dynamic form building frameworks, asset tracking
                    documentation pipelines, and real-time worker compliance
                    systems."
              >
                <Spotlight
                  title="TypeScript Migration"
                  description="Orchestrated an incremental scale codebase migration from
                      legacy JavaScript architecture over to strict TypeScript.
                      Refactored high-traffic UI components to capture layout
                      exceptions at compile-time and drastically cut production
                      errors."
                />
                <Spotlight
                  title="Schema-driven UI Frameworks"
                  description="Architected custom client-side generation layers parsing
                      recursive JSON payloads down into complex data-validation
                      capture controls. Empowered external teams to dynamically
                      construct brand new workflow views straight from back-end
                      logic shifts."
                />
                <Spotlight
                  title="Vitest, Jest & Cypress E2E Testing"
                  description="Established modern test suites pairing isolated unit tests
                      via Vitest/Jest with end-to-end integration journeys using
                      Cypress. Protected regression lines for vital application
                      areas including multi-step data wizard components."
                />
              </SubSection>

              {/* Receipts Tracker Section */}
              <SubSection
                title="Receipt Tracking System"
                summary="Developed an independent utility built straight upon native
                    browser engines with no modern framework layer dependencies.
                    Designed structural components parsing financial tracking
                    fields, raw event listeners, and local state management layers
                    to maximize performance."
                focusArea="Vanilla Software Engineering / Performance Architecture"
              ></SubSection>
              <SubSection
                title="Meeting Booking System"
                summary="Engineered an enterprise booking matrix module centered around
                  layout availability and calendar scheduling constraints.
                  Solved time zone conversion disparities and optimized render
                  lifecycle hooks inside custom React Big Calendar integrations."
                focusArea="Complex Event Hooks / State Synchronization"
              ></SubSection>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
            <Logo image={Velociti} alt="Velociti Solutions Logo" />

            {/* Main Header Area with wide padding constraint */}
            <div className="border-b border-gray-100 pb-4 mb-8 pr-24 md:pr-32">
              <h2 className="text-2xl font-black text-gray-900">
                Velociti Solutions{" "}
                <span className="text-sm font-normal text-gray-400 block sm:inline">
                  (formerly 3Squared)
                </span>
              </h2>
              <p className="text-amber-600 font-semibold mt-1 flex items-center gap-1">
                <span>🛠️</span> Quality Assurance & Engineering
              </p>
            </div>

            {/* Core Project Summary Block */}
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🚀</span> Core Projects & Achievements
            </h3>

            <div className="space-y-12 border-l-2 border-amber-200 pl-4 md:pl-6 ml-2">
              <h4 className="text-xl font-black text-gray-900 mb-2">
                Docs, Forms, Hub (DFH)
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Contributed to high-availability corporate core platforms.
                Managed rigorous functional layout diagnostics, accessibility
                reviews, network telemetry evaluations, and infrastructure loads
                to guarantee system operation under peak application strain.
              </p>
              <TimelineEntry number="2.17.0" category="UI Update">
                <p className="text-sm text-gray-600 leading-relaxed">
                  This deployment focused heavily on visual analytic
                  modernizations, turning rigid telemetry grids into dynamic
                  dashboards. Detailed system implementations:
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 pl-1 leading-relaxed">
                  <li>
                    <strong>Analytics Data Containers:</strong> Rolled out
                    interactive telemetry layouts presenting responsive visual
                    graph nodes alongside tabular total data summaries.
                  </li>
                  <li>
                    <strong>Tracking Mechanisms:</strong> Programmed live
                    validation widgets tracking authorization actions and
                    checking user acknowledgment cycles.
                  </li>
                  <li>
                    <strong>Dashboard Restructuring:</strong> Revamped
                    historical document feeds and table elements for real-time
                    asset visibility.
                  </li>
                </ul>

                <div className="space-y-6 mt-6">
                  <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-inner overflow-hidden">
                    <img
                      src={DFHStats}
                      alt="DFH v2.17.0 Stats Component"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-inner overflow-hidden">
                    <img
                      src={DFHDocsAndVideos}
                      alt="DFH v2.17.0 Latest Documents and Videos tables"
                      className="w-full object-cover "
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://support.velociti-solutions.com/hc/en-us/articles/4907359904786-Docs-Forms-Hub-v2-17-0-24-May-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-800 transition group"
                  >
                    Read Release Notes{" "}
                    <span className="ml-1 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </TimelineEntry>

              <TimelineEntry number="2.14.0" category="Infrastructure">
                <p className="text-sm text-gray-600 leading-relaxed">
                  The work carried out in this release of DFH brought a host of
                  benefits such as:
                </p>

                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 pl-1 leading-relaxed">
                  <li>
                    <strong>Capacity improvements</strong>
                  </li>
                  <li>
                    <strong>Increased system resilience</strong>
                  </li>
                  <li>
                    <strong>Enhanced security</strong>
                  </li>
                  <li>
                    <strong>
                      Reduced downtime for future maintenance windows
                    </strong>
                  </li>
                </ul>

                <div className="pt-2">
                  <a
                    href="https://support.velociti-solutions.com/hc/en-us/articles/4526633124626-DFH-v2-14-0-Infrastructure-Maintenance-05-Mar-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-800 transition group"
                  >
                    Read Release Notes{" "}
                    <span className="ml-1 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </TimelineEntry>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
            <Logo image={UoS} alt="University of Sheffield Logo" />

            {/* Main Header Area with wide padding constraint */}
            <div className="border-b border-gray-100 pb-4 mb-6 pr-24 md:pr-32">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                <span>🎓</span> Education
              </h2>
            </div>

            {/* Expanded Content Area */}
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  University of Sheffield
                </h3>
                <p className="text-md font-semibold text-gray-700 mt-0.5">
                  BSc Computer Science With Year In Industry
                </p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                Gained deep theoretical knowledge across modern computation
                matrices, compiler designs, advanced algorithms, database
                methodologies, and software patterns while matching real-world
                demands via professional placement pipelines.
              </p>

              <div className="pt-2">
                {/* Styled Badge with clean Tailwind amber values */}
                <span className="text-sm font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5 shadow-sm">
                  🏆 First-Class Honours
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ExperiencePage;
