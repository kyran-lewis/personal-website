import { useState } from "react";

import Kyran from "../assets/kyran.jpeg";
import TypeScript from "../assets/typescript.png";
import JavaScript from "../assets/javascript.jpg";
import React from "../assets/react.svg";
import PHP from "../assets/php.svg";
import Node from "../assets/node.svg";
import Ubuntu from "../assets/ubuntu.png";
import Git from "../assets/git.png";
import Postman from "../assets/postman.png";
import Jest from "../assets/jest.svg";
import Cypress from "../assets/cypress.svg";
import Docker from "../assets/docker.png";
import Apache from "../assets/apache.png";

function HomePage() {
  return (
    <main>
      <section className="flex items-center justify-evenly text-center">
        <div className="container w-6xl flex flex-col justify-center items-center">
          <img
            src={Kyran}
            className="w-50 aspect-square object-cover rounded-full mb-4 mt-8 border-4 border-black"
          />
          <div className="w-full text-center my-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
              Hi, I'm Kyran!
            </h1>
            <p className="w-3xl text-xl md:text-2xl text-gray-600 leading-relaxed mx-auto">
              A Full-Stack Developer with 3.5 years of industry experience and a
              <span className="font-semibold text-gray-900">
                {" "}
                test driven mindset
              </span>
              . I build robust web applications where quality and scalability
              aren't afterthoughts.
            </p>
          </div>

          <section className="py-4">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                How I Work
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: QA/Testing */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-amber-500 text-3xl mb-4">🧪</div>
                  <h3 className="text-xl font-bold mb-2">QA-Engineered Core</h3>
                  <p className="text-gray-600 text-sm">
                    I have a year of experience working as a quality assurance
                    engineer which has instilled a test driven mindset into me.
                    Quality, predictability and reliability are the core values
                    that guide my work.
                  </p>
                </div>

                {/* Card 2: Tech Stack Versatility */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-amber-500 text-3xl mb-4">🗄️</div>
                  <h3 className="text-xl font-bold mb-2">
                    Full-Stack Capability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Seamlessly bridging frontend reactivity with secure backend
                    architecture. Experienced in React, Node, PHP, and
                    relational database design.
                  </p>
                </div>

                {/* Card 3: Academic Background */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-amber-500 text-3xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold mb-2">
                    First-Class Foundation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Computer Science graduate from the University of Sheffield
                    with First-Class Honours. Strong understanding of
                    fundamentals applied to real-world products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <h2 className="text-2xl mb-2 font-semibold">Frontend Development:</h2>
          <div className="container flex flex-wrap justify-center">
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img
                src={TypeScript}
                className="w-10 h-10 object-contain mr-4"
                alt="TS"
              />
              <h3 className="text-xl font-bold text-gray-800">TypeScript</h3>
            </div>
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img
                src={JavaScript}
                className="w-10 h-10 aspect-square object-cover mr-auto"
                alt="JS"
              />
              <h2 className="text-2xl">JavaScript</h2>
            </div>
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <img
                src={React}
                className=" h-10 object-cover mr-auto"
                alt="React"
              />
              <h2 className="text-2xl">React</h2>
            </div>
          </div>

          <h2 className="text-2xl mb-2 font-semibold">Backend Development:</h2>
          <div className="container flex flex-wrap justify-center">
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={PHP} className="w-20 object-cover mr-auto" />
              <h2 className="text-2xl">PHP</h2>
            </div>

            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Apache} className=" h-10 object-cover mr-auto" />
              <h2 className="text-2xl">Apache</h2>
            </div>

            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Node} className="h-10 object-cover mr-auto" />
              <h2 className="text-2xl">Node</h2>
            </div>
          </div>

          <h2 className="text-2xl mb-2 font-semibold">
            Testing Automation (QA):
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Jest} className="w-10 object-cover mr-auto" />
              <h2 className="text-2xl">Jest</h2>
            </div>
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Cypress} className="w-10 object-cover mr-auto" />
              <h2 className="text-2xl">Cypress</h2>
            </div>
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Postman} className="w-10 object-cover mr-auto" />
              <h2 className="text-2xl">Postman</h2>
            </div>
          </div>

          <h2 className="text-2xl mb-2 font-semibold">
            Development Workflow and DevOps:
          </h2>
          <div className="container flex flex-wrap justify-center">
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Ubuntu} className="w-10 object-cover mr-auto" />
              <h2 className="text-2xl">Linux (Ubuntu)</h2>
            </div>
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Git} className="w-10 object-cover mr-auto" />
              <h2 className="text-2xl">Git</h2>
            </div>
            <div className="flex items-center w-72 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4">
              <img src={Docker} className="w-10 object-cover mr-auto" />
              <h2 className="text-2xl">Docker</h2>
            </div>
          </div>
          {/* <h2 className="text-2xl mb-4">
            I have a year of experience working as a quality assurance engineer
            which has instilled a test driven mindset into me. Quality,
            predictability and reliability are the core values that guide my
            work.
          </h2>
          <h2 className="text-2xl">
            I'm a Graduate of Computer Science from the University of Sheffield
            acheiving a First-Class Honours
          </h2> */}
        </div>
      </section>
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            Let's build something reliable together.
          </h2>
          <p className="text-gray-600 mb-6">
            I'm currently open to full-stack engineering roles and project
            collaborations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-sm"
            >
              Get In Touch
            </a>
            <a
              href="#portfolio"
              className="bg-amber-200 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-amber-300 transition shadow-sm"
            >
              My Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
