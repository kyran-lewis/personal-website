import { useState } from "react";
import UoS from "../assets/university-of-sheffield.png";
import FlowGroup from "../assets/flow-group.png";
import Velociti from "../assets/velociti.png";
import DFHStats from "../assets/dfh-stats.png";
import DFHDocsAndVideos from "../assets/dfh-docs-videos.png";

function ExperiencePage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Title - Clean, solid minimalist style */}
        <h1 className="text-4xl font-black text-gray-900 mb-12 text-center tracking-tight">
          Experience and Qualifications
        </h1>

        <div className="space-y-12">
          {/* ========================================== */}
          {/* WORK EXPERIENCE: FLOW GROUP */}
          {/* ========================================== */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
            {/* Top Right Company Logo */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain bg-white p-2 rounded-2xl border border-gray-200 shadow-sm"
                src={FlowGroup}
                alt="Flow Group Logo"
              />
            </div>

            {/* Main Header Area with wide padding constraint */}
            <div className="border-b border-gray-100 pb-4 mb-8 pr-24 md:pr-32">
              <h2 className="text-2xl font-black text-gray-900">Flow Group</h2>
              {/* Darker amber-600 text variant */}
              <p className="text-amber-600 font-semibold mt-1 flex items-center gap-1">
                <span>💻</span> Full Stack Developer
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🚀</span> Core Projects & Architecture
            </h3>

            {/* Expanded Project Breakdowns */}
            <div className="space-y-10">
              {/* Accredify Section */}
              <div className="border-l-2 border-amber-200 pl-4 md:pl-6 space-y-4">
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">
                    Accredify Pro / Quality Management System
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Engineered robust enterprise subsystems focusing heavily on
                    interactive dynamic form building frameworks, asset tracking
                    documentation pipelines, and real-time worker compliance
                    systems.
                  </p>
                </div>

                {/* Granular standalone sections */}
                <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="bg-slate-50 p-5 rounded-xl border border-gray-100 space-y-2">
                    {/* Rich text-amber-700 header */}
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      React & TypeScript Migration
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Orchestrated an incremental scale codebase migration from
                      legacy JavaScript architecture over to strict TypeScript.
                      Refactored high-traffic UI components to capture layout
                      exceptions at compile-time and drastically cut production
                      errors.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-gray-100 space-y-2">
                    {/* Rich text-amber-700 header */}
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      React Query / Server State Caching
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Implemented React Query to manage complex asynchronous
                      network states and local client synchronization layers.
                      Drastically cut down redundant REST API request overheads
                      through aggressive global mutation caches and automated
                      cache validation invalidation loops.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-gray-100 space-y-2">
                    {/* Rich text-amber-700 header */}
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Schema-driven UI Frameworks
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Architected custom client-side generation layers parsing
                      recursive JSON payloads down into complex data-validation
                      capture controls. Empowered external teams to dynamically
                      construct brand new workflow views straight from back-end
                      logic shifts.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-gray-100 space-y-2">
                    {/* Rich text-amber-700 header */}
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Vitest, Jest & Cypress E2E Testing
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Established modern test suites pairing isolated unit tests
                      via Vitest/Jest with end-to-end integration journeys using
                      Cypress. Protected regression lines for vital application
                      areas including multi-step data wizard components.
                    </p>
                  </div>
                </div>
              </div>

              {/* Receipts Tracker Section */}
              <div className="border-l-2 border-slate-200 pl-4 md:pl-6 space-y-3">
                <h4 className="text-xl font-black text-gray-900">
                  Receipt Tracking System
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Developed an independent utility built straight upon native
                  browser engines with no modern framework layer dependencies.
                  Designed structural components parsing financial tracking
                  fields, raw event listeners, and local state management layers
                  to maximize performance.
                </p>
                <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                  Focus Area: Vanilla Software Engineering / Performance
                  Architecture
                </p>
              </div>

              {/* Meeting Booking System Section */}
              <div className="border-l-2 border-slate-200 pl-4 md:pl-6 space-y-3">
                <h4 className="text-xl font-black text-gray-900">
                  Meeting Booking System
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Engineered an enterprise booking matrix module centered around
                  layout availability and calendar scheduling constraints.
                  Solved time zone conversion disparities and optimized render
                  lifecycle hooks inside custom React Big Calendar integrations.
                </p>
                {/* Dynamic text-amber-700 category marker */}
                <p className="text-xs text-amber-700 font-semibold tracking-wider uppercase">
                  Focus Area: Complex Event Hooks / State Synchronization
                </p>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* WORK EXPERIENCE: VELOCITI SOLUTIONS */}
          {/* ========================================== */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
            {/* Top Right Company Logo */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain bg-white p-2 rounded-2xl border border-gray-200 shadow-sm"
                src={Velociti}
                alt="Velociti Solutions Logo"
              />
            </div>

            {/* Main Header Area with wide padding constraint */}
            <div className="border-b border-gray-100 pb-4 mb-8 pr-24 md:pr-32">
              <h2 className="text-2xl font-black text-gray-900">
                Velociti Solutions{" "}
                <span className="text-sm font-normal text-gray-400 block sm:inline">
                  (formerly 3Squared)
                </span>
              </h2>
              {/* Clean text-amber-600 label */}
              <p className="text-amber-600 font-semibold mt-1 flex items-center gap-1">
                <span>🛠️</span> Quality Assurance & Engineering
              </p>
            </div>

            {/* Core Project Summary Block */}
            <div className="mb-8 bg-slate-50 p-5 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-2">
                <span>📦</span> Project Context: Docs, Forms, Hub (DFH)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Contributed to high-availability corporate core platforms.
                Managed rigorous functional layout diagnostics, accessibility
                reviews, network telemetry evaluations, and infrastructure loads
                to guarantee system operation under peak application strain.
              </p>
            </div>

            {/* Notable Releases Extended Timeline Layout */}
            <div className="space-y-12 border-l-2 border-amber-200 pl-4 md:pl-6 ml-2">
              {/* Extended Release v2.17.0 Block */}
              <div className="relative space-y-4">
                <div className="absolute w-3 h-3 bg-amber-400 rounded-full -left-[23px] md:-left-[31px] top-1.5 border border-white" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-xl font-black text-gray-900">
                    Release v2.17.0
                  </h4>
                  <span className="self-start sm:self-auto text-xs font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                    UI Update
                  </span>
                </div>

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

                {/* Integrated One Per Line Full-Width Visual Assets */}
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
                  {/* Native Tailwind amber interaction classes */}
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
              </div>

              {/* Extended Release v2.14.0 Block */}
              <div className="relative space-y-4">
                <div className="absolute w-3 h-3 bg-amber-400 rounded-full -left-[23px] md:-left-[31px] top-1.5 border border-white" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-xl font-black text-gray-900">
                    Release v2.14.0
                  </h4>
                  <span className="self-start sm:self-auto text-xs font-bold bg-slate-900 text-white px-2.5 py-1 rounded-md">
                    Infrastructure
                  </span>
                </div>

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
                  {/* Native Tailwind amber interaction classes */}
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
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* EDUCATION SECTION */}
          {/* ========================================== */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
            {/* Top Right University Logo */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <img
                className="h-16 w-16 md:h-20 md:w-20 object-contain bg-white p-2 rounded-2xl border border-gray-200 shadow-sm"
                src={UoS}
                alt="University of Sheffield Logo"
              />
            </div>

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
