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
const keyTakeaways =
  process.env.PUBLIC_URL + "images/key takeaways-heymilo.png";
const components = process.env.PUBLIC_URL + "images/heymilo components.png";
const originalDesign = process.env.PUBLIC_URL + "images/heymilooriginal.png";
const designDecision =
  process.env.PUBLIC_URL + "images/heymilodesigndecision.png";

  const systemdesign =
  process.env.PUBLIC_URL + "images/systemdesign.png";

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
            <h2>1 Designer (me!)</h2>
            <h2>2 Developers</h2>
          </div>
          <div className="project-duration">
            <h1>Duration</h1>
            <h2>2 Months</h2>
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
          <h3>My Role</h3>
          <h1>
            Owning a Full Redesign as the Sole Designer in a Fast-Moving Startup
          </h1>
          <h2>
            When I joined HeyMilo AI, the team was looking to evolve their
            platform with a comprehensive V2 redesign that would address
            critical user experience challenges. As the sole designer for this
            initiative, I conducted thorough user flow analysis and collaborated
            with the team to identify pain points in navigation and information
            architecture. My role focused on transforming the platform's core
            functionality by implementing an intuitive navigation system and
            restructuring the candidate evaluation interface. This redesign
            redefined how recruiters navigate agents and evaluate candidates
            across the platform.
          </h2>
          <h3>Design Focus</h3>
          <h4>
            Designing an interface that scales across
            <span class="highlight">
              {" "}
              agents, candidates, and future features{" "}
            </span>
            without increasing
            <span class="highlight"> cognitive load</span>.
          </h4>
          <br></br>
        </div>
      </div>
      <div className="divvy-section2">
        <div className="hm-problem">
          <h3>Defining the Problem</h3>
          <h1>
            Recruiters Were Losing Time Navigating Instead of Evaluating
            Candidates
          </h1>
          <h2>
            The original design had several usability challenges: navigating
            between AI agents was not efficient, and the candidate evaluation views suffered from poor
            scanability and unclear information hierarchy. Additionally, the
            connection between the Agents and Candidates views was not clear, as
            the navigation tabs failed to effectively communicate how the two
            contexts related.
          </h2>
          

          <img src={heymiloOG} alt="heymilo redesign" />

          <img src={systemdesign} alt="heymilo redesign" />
          <div className="problem-statement">
            <h2>Problem Statement</h2>
            <h1 class="headline">
              This confusing navigation system and display of candidate
              evaluations was
              <span class="highlight"> wasting recruiters’ valuable time </span>
              in searching for information,
              <span class="highlight"> leading to low confidence </span>
              in tracking candidates.
            </h1>
            {/* <br></br> */}
            <h3>
              <i>So how do we solve this?</i>
            </h3>
          </div>
          <h1>Competitor Analysis</h1>
          <h2>
            To help me better understand the current market of ATS platforms and
            interviewing softwares, I conducted competitive analysis to explore
            existing layouts and user experiences.
          </h2>
          <img src={atsAnalysis} alt="heymilo redesign" />
          <h3>Key Takeaways</h3>
          <h1>Why Most ATS Tools Optimize for Data Density, Not Human Focus</h1>
          <h2>
            {" "}
            While reviewing different ATS platforms, I noticed a recurring
            pattern: many tools prioritize showing as much information as
            possible in a single view. Although this approach aims to support
            thorough evaluation, it often increases cognitive load and slows
            decision-making. At the same time, several platforms demonstrated
            thoughtful patterns that successfully balance visibility with focus.
            These strengths informed key design decisions in the HeyMilo
            redesign.
          </h2>
          <img src={keyTakeaways} alt="Competitor analysis key takeaways" />
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
        <br></br>
        <br></br>
        <h3>Core Design Decision</h3>
        <h1>Designing for Distinct Mental Modes</h1>
        <h2>
          One of the core insights that shaped this redesign was recognizing
          that recruiters move between
          <span class="highlight2"> two distinct modes:</span> scanning multiple
          candidates to compare status and performance, and deep evaluation of
          an individual candidate’s interview results.
        </h2>
        <h2>
          {" "}
          In the original experience, these two tasks were blended into a single
          view, forcing recruiters to constantly re-orient themselves and
          mentally filter information. This increased cognitive load and slowed
          down decision-making. 
        </h2>
        <h2>Additionally, each candidate was presented in a
          large card format that occupied significant vertical space, resulting
          in excessive scrolling and reduced scanability. In high-volume hiring
          scenarios, this layout made it difficult for recruiters to quickly
          compare applicants, further
          increasing the friction in the evaluation process.</h2>
        <img src={originalDesign} alt="Original screen" />
        <h2>
          {" "}
          A design decision I made was to separate these modes by introducing a
          clear candidate list for quick scanning and comparison, paired with a
          focused evaluation view that prioritizes depth, clarity, and
          hierarchy.
        </h2>
        <img src={designDecision} alt="Design decision" />
        <div className="userTesting">
          <h3>Feedback & Testing</h3>
          <h1>Rapid Iteration Through Team Walkthroughs and Flow Reviews</h1>
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
            <h1> Navigation</h1>
            <h2>
              I introduced a{" "}
              <span className="highlight2">new sidebar navigation system </span>
              that enables{" "}
              <span className="highlight2">quick workspace switching</span>,
              provides clear access to recent and archived agents, and{" "}
              <span className="highlight2">
                organizes agents hierarchically
              </span>{" "}
              for better clarity. I also ensured{" "}
              <span className="highlight2">
                essential functions are easily accessible{" "}
              </span>
              to improve overall navigation.
            </h2>
          </div>
          <img src={hmfinalOne} alt="Final design one" />
        </div>
        <div className="hm-section5">
          <img src={hmfinalTwo} alt="final design two" />
          <div className="hmsection5-text">
            <h1>Full Candidate List</h1>
            <h2>
              I added a{" "}
              <span className="highlight2">full candidate list feature</span>,
              accessible when you click on a specific agent. This allows
              recruiters to{" "}
              <span className="highlight2">
                compare multiple candidates at once
              </span>{" "}
              using candidate scores and tags. I also introduced{" "}
              <span className="highlight2">segmented controls</span> to group
              candidates into categories like completed interviews, incomplete
              interviews, and top-rated, making it easier to track candidates
              throughout the interviewing process.
            </h2>
          </div>
        </div>
        <div className="hm-section6">
          <div className="hmsection6-text">
            <h1>Candidate Evaluation Display</h1>
            <h2>
              To address{" "}
              <span className="highlight2">information overload</span> on the
              candidates page, I redesigned it with
              <span className="highlight2">
                {" "}
                collapsible candidate lists
              </span>{" "}
              and
              <span className="highlight2">
                {" "}
                clean, focused evaluation views
              </span>
              , supported by a streamlined information display. I prioritized a{" "}
              <span className="highlight2">clear visual hierarchy</span> to make
              it easier for users to find what they need. In addition, agent
              information can now be accessed through a drop-down, offering
              comparative statistics while keeping the focus on candidate
              evaluations.
            </h2>
          </div>
          <img src={hmfinalThree} alt="Final design three" />
        </div>
        <div className="divvy-section2">
          <div className="hm-components">
            <h1> Components</h1>
            <h2>
              {" "}
              For these screens, I built reusable components by leveraging the
              existing design system and maintaining visual and functional
              consistency.
            </h2>
            <img src={components} alt="Final design three" />
          </div>
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
          <br></br>
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
              <h2>
                Designing a future-ready navigation solution for Canada’s #1
                insurance provider
              </h2>
            </a>

            <a href="/DivvyUp" class="carousel-card">
              <img src="images/Artboard 6.png" alt="DivvyUp" />
              <h2>
                Simplifying group planning and bill splitting with DivvyUp, for
                a seamless group outing experience
              </h2>
            </a>

            {/* <a href="/clearSpider" class="carousel-card">
              <img src="images/clearspiderBarcode.png" alt="ClearSpider" />
              <h2>
                Reimagining a product landing page for increased visual
                engagement
              </h2>
            </a> */}
          </div>

          {/* <button class="carousel-btn right" aria-label="Scroll right">→</button> */}
        </div>
      </section>

      <Footer className="footerSubBud" />
    </div>
  );
}

export default HeyMilo;
