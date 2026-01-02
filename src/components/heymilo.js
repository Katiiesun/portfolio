import "../static/heymilo.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

const heymilopic = process.env.PUBLIC_URL + "images/heymilopic.png";
const heymiloOG = process.env.PUBLIC_URL + "images/heymilo-v1.png";
const atsAnalysis = process.env.PUBLIC_URL + "images/hm-competitive.png";
const hmfeedback = process.env.PUBLIC_URL + "images/hm-feedback.png";
const hmfinalOne = process.env.PUBLIC_URL + "images/Group 1171276154.png";
const hmfinalTwo = process.env.PUBLIC_URL + "images/Group 1171276152.png";
const hmfinalThree = process.env.PUBLIC_URL + "images/Group 1171276153.png";
const devhandoff = process.env.PUBLIC_URL + "images/dev handoff.png";
const ideation = process.env.PUBLIC_URL + "images/IMG_1534.jpg";
const heyMilo = process.env.PUBLIC_URL + "images/heymilo-mockup.png";

function HeyMilo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navigation className="projectsnav" />
      <div className="hmHeader">
        <h1>
          Redesigning an ATS dashboard and navigation system to{" "}
          <span className="highlight">streamline recruiter workflows</span>
        </h1>
        <img src={hmfinalTwo} alt="heymilo redesign" />
      </div>
      <div className="cs-section1">
        <div className="subbud-intro">
          <div className="subbud-skills">
            <h1>Skills</h1>
            <h2>Interaction Design</h2>
            <h2>Competitor Analysis</h2>
            <h2>Interface Design</h2>
          </div>
          <div className="project-duration">
            <h1>Team</h1>
            <h2>Co-founder</h2>
            <h2>1 Designer</h2>
            <h2>2 Developers</h2>
          </div>
          <div className="project-duration">
            <h1>Duration</h1>
            <h2>November 2024 - January 2025</h2>
          </div>
        </div>
        <div className="hm-overview">
          <h1>What is HeyMilo AI?</h1>
          <h2>
            HeyMilo AI is an innovative AI-powered interviewing platform that
            enables recruiters to create voice agents capable of conducting
            two-way conversational interviews. The platform streamlines the
            recruitment process by allowing recruiters to manage multiple AI
            agents and track candidate applications and evaluations efficiently.
          </h2>
          <h1>My role</h1>
          <h2>
            When I joined HeyMilo AI, the team was looking to evolve their
            platform with a comprehensive V2 redesign that would address
            critical user experience challenges. As the sole designer for this
            initiative, I conducted thorough user flow analysis and collaborated
            with the team to identify pain points in navigation and information
            architecture. My role focused on transforming the platform's core
            functionality by implementing an intuitive navigation system and
            restructuring the candidate evaluation interface, ultimately
            creating a more streamlined and efficient experience for recruiters
            managing AI-powered interviews.
          </h2>
        </div>
      </div>
      <div className="divvy-section2">
        <div className="hm-problem">
          <h1>Defining the Problem</h1>
          <h2>
            The original design faced multiple usability challenges, including
            difficult navigation between AI agents, overwhelming information on
            the candidates page, poor scrolling designs and information
            hierarchy in candidate evaluations.
          </h2>

          <img src={heymiloOG} alt="heymilo redesign" />
          <div className="problem-statement">
            <h1 class="headline">
              This confusing navigation system and display of candidate
              evaluations was
              <span class="highlight"> wasting recruiters’ valuable time </span>
              in searching for information,
              <span class="highlight"> leading to frustration </span>
              in tracking candidates.
            </h1>
            <h1>So how do we solve this?</h1>
          </div>
          <h1>Competitor Analysis</h1>
          <h2>
            To help me better understand the current market of ATS platforms and
            interviewing softwares, I conducted competitive analysis to explore
            existing layouts and user experiences.
          </h2>
          <img src={atsAnalysis} alt="heymilo redesign" />
          <h1>Framing the Solution</h1>
          <h2>
            {" "}
            I developed a set of requirements informed by team conversations and
            secondary research to directly address user pain points. These
            requirements aligned the redesign around shared goals and
            constraints.{" "}
          </h2>
          <div className="design-principles">
            <ul>
              <li>
                Provide a simple navigation system{" "}
                <span className="emphasis">accessible on every screen</span> of
                the platform
              </li>

              <li>
                Provide recruiters with{" "}
                <span className="emphasis">easy-to-read</span> performance
                indicators and visual cues for candidate evaluations.
              </li>

              <li>
                Organize candidate data to{" "}
                <span className="emphasis">
                  reduce information overload and improve focus
                </span>{" "}
                during evaluation review.
              </li>

              <li>
                Ensure <span className="emphasis">smooth transitions</span>{" "}
                between tasks, such as managing agents and evaluating
                candidates.
              </li>

              <li>
                Design with <span className="emphasis">flexibility</span> to
                accommodate future platform additions such as notifications,
                credit system, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hm-section3">
        <h1>Ideation</h1>
        <h2>
          To begin, I sketched out rough wireframes of the new flow,
          implementing new features and also reimagining the current features.
        </h2>
        <img src={ideation} alt="ideation sketches" />
        <h2>
          I then moved onto figma, creating higher-fidelity wireframes and
          mapping out all interactions, while constantly keeping the team in the
          loop with updates and progress.
        </h2>
        <div className="userTesting">
          <h1>Feedback & Testing</h1>
          <h2>
            Throughout the process, my team regularly held meetings and user
            flow run-throughs of my designs to spot any issues or points of
            confusion in the flow. The constant feedback allowed me to iterate
            quickly to find the strongest solution.
          </h2>
          <img src={hmfeedback} alt="placeholder img" />
        </div>
      </div>
      <div className="final-text">
        <h1>Final Designs</h1>
        <h2>
          Through multiple rounds of feedback and iteration, the designs evolved
          into a final solution ready for development. The following highlights
          the key design changes I led from concept to final delivery!{" "}
        </h2>
      </div>
      <div className="hm-final">
        <div className="hm-section4">
          <div className="hmsection4-text">
            <h1> Navigation Improvements</h1>
            <h2>
              I introduced a new sidebar navigation system that allows for quick
              workspace switching, provides access to recent and archived
              agents, and organizes agents hierarchically for better clarity. I
              also ensured essential functions are easily accessible to improve
              overall navigation.
            </h2>
          </div>
          <img src={hmfinalOne} alt="Final design one" />
        </div>
        <div className="hm-section5">
          <img src={hmfinalTwo} alt="final design two" />
          <div className="hmsection5-text">
            <h1>Full Candidate List</h1>
            <h2>
              I added a full candidate list feature, accessible when you click
              on a specific agent. This allows users to quickly and easily
              compare multiple candidates at once using candidate scores and
              tags. I also included selection tabs to group candidates into
              categories like completed interviews, incomplete interviews,
              top-rated, and more, allowing recruiters to easily track
              candidates through the interviewing process.
            </h2>
          </div>
        </div>
        <div className="hm-section6">
          <div className="hmsection6-text">
            <h1>Candidate Evaluation Display</h1>
            <h2>
              To address information overload on the candidates page, I
              redesigned it with collapsible candidate lists, clean and focused
              evaluation views, and a streamlined information display. I
              prioritized a clear visual hierarchy to make it easier for users
              to find what they need. In addition, the agent information can now
              be accessed through a drop-down, offering comparative statistics
              while keeping the focus on candidate evaluations.
            </h2>
          </div>
          <img src={hmfinalThree} alt="Final design three" />
        </div>
        <div className="divvy-section2">
          <div className="hm-handoff">
            <h1>Developer Handoff</h1>
            <h2>
              Before handing off to development, I thoroughly documented every
              user flow, component state, and interaction within the new version
              of the platform.
            </h2>
            <h2>
              The engineering team commended the clarity and thoroughness of my
              design documentation!
            </h2>
            <img src={devhandoff} alt="heymilo redesign" />
          </div>
        </div>
        <div className="hm-lessons">
          <h1>Lessons Learned</h1>
          <h3>01. Adapting to Startup Pace </h3>
          <h2>
            Redesigning an entire platform within a tight timeline initially
            seemed quite daunting to me. However, this challenge taught me to
            adapt quickly and work efficiently in a fast-paced startup
            environment. The supportive team culture played a crucial role in
            helping me adjust to the rapid iteration cycles and quick
            decision-making processes.
          </h2>
          <h3>02. Design Documentation & Development Handoff </h3>
          <h2>
            Working on my first large-scale project handoff taught me invaluable
            lessons about design documentation. I learned to create
            comprehensive and clear documentation systems, organizing component
            states and user flows in a way that streamlines the development
            process. This project taught me the importance of thorough
            documentation in ensuring smooth implementation of complex design
            systems.
          </h2>
        </div>
      </div>

      <section class="more-work">
        <h1>Continue Reading</h1>

        <div class="carousel-wrapper">
          {/* <button class="carousel-btn left" aria-label="Scroll left">←</button> */}

          <div class="carousel" id="carousel">
      <a href="/wealthApp" class="carousel-card">
        <img src="images/wealthApp.png" alt="Wealth App" />
        <h2>Structuring Intuitive Navigation for a Wealth Management App</h2>
      </a>

            <a href="/DivvyUp" class="carousel-card">
              <img src="images/Artboard 6.png" alt="DivvyUp" />
              <h2>
                Simplifying group planning and bill splitting with DivvyUp, for
                a seamless group outing experience
              </h2>
            </a>

            <a href="/clearSpider" class="carousel-card">
              <img src="images/clearspiderBarcode.png" alt="ClearSpider" />
              <h2>Reimagining a product landing page for stronger visual impact</h2>
            </a>
          </div>

          {/* <button class="carousel-btn right" aria-label="Scroll right">→</button> */}
        </div>
      </section>


      <Footer className="footerSubBud" />
    </div>
  );
}

export default HeyMilo;
