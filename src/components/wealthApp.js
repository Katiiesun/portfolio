import "../static/wealthApp.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

const wealthHeader = process.env.PUBLIC_URL + "images/WEALTH COVER 1.png";
const investing = process.env.PUBLIC_URL + "images/investing.png";
const testprocess = process.env.PUBLIC_URL + "images/wealthprocess.png";
const futurenav = process.env.PUBLIC_URL + "images/futurenavelement.png";
const bottomnav = process.env.PUBLIC_URL + "images/bottomnavstructure.png";
const scrollvstab = process.env.PUBLIC_URL + "images/tabbedvsscroll.png";
const improvement1 = process.env.PUBLIC_URL + "images/iteration1.png";
const improvement2 = process.env.PUBLIC_URL + "images/improvement2.png";
const improvement3 = process.env.PUBLIC_URL + "images/improvement3.png";
const improvement4 = process.env.PUBLIC_URL + "images/improvement4.png";
const userneeds = process.env.PUBLIC_URL + "images/wealth-userneeds.png";

function WealthApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation className="projectsnav" />
      <div className="wealthHeader">
        <div className="wealthText">
          <h1>Structuring Intuitive Navigation for a Wealth Management App</h1>

          <h2>
            Designing a future-ready navigation solution for Canada’s #1
            insurance provider
          </h2>
        </div>

        <img src={wealthHeader} alt="wealth app wireframes" />
      </div>
      <div className="wealthContent">
        <div className="wealthsection1">
          <div className="wealth-intro">
            <div className="subbud-skills">
              <h1>Skills</h1>
              <h2>A/B Testing</h2>
              <h2>Prototyping</h2>
              <h2>Test Planning</h2>
            </div>
            <div className="project-duration">
              <h1>Duration</h1>
              <h2>July 2025</h2>
            </div>
            <div className="project-duration">
              <h1>Tools</h1>
              <h2>Figma</h2>
              <h2>UserTesting</h2>
              <h2>MS Teams</h2>
            </div>
          </div>
          <div className="confidential">
            <h1>Confidentiality Note</h1>
            <h2>
              This case study summarizes my design process for a mobile wealth
              management app currently in development. All visuals have been
              recreated for illustrative purposes, and certain details, metrics,
              and labels have been generalized to protect confidential
              information.
            </h2>
          </div>
          <div className="wealth-overview">
            <h1>Overview</h1>
            <h2>
              As part of my internship at a leading Canadian financial services
              provider, I worked on designing a new mobile app experience for
              wealth management clients. The app complements the existing online
              investor portal and is being designed to help clients better
              understand their investments and interact seamlessly with their
              advisor team.
            </h2>
            <h2>
              This case study focuses on how I leveraged user testing to
              validate the app’s information architecture and navigation
              patterns, especially around a future navigation element that would
              enable switching between different investment views, such as all
              accounts and grouped perspectives.{" "}
            </h2>
          </div>
          <div className="wealth-myrole">
            <h1>My role</h1>
            <h2>
              Working closely with the design lead and experience design
              director, I conceptualized navigation structures while designing
              and building high-fidelity interactive prototypes in Figma. I also
              developed and moderated user testing tasks and interviews,
              analyzing feedback to synthesize actionable insights that guided
              design decisions.
            </h2>
          </div>
        </div>
      </div>
      <div className="challenge-sec2">
        <h1>The Challenge</h1>
        <h2>
          Introducing grouped investment views, a planned feature, had the
          potential to reshape the app’s information architecture and
          navigation, making it critical to understand how users expected to
          access and switch between different views.
        </h2>
        <h2>
          Although not required for the first launch, this feature needed early
          exploration so we could ensure the navigation would scale without
          requiring major rework later.
        </h2>
        <div className="challenge-container">
          <div className="whymatter">
            <h1>Why it mattered</h1>

            <h2> Delaying validation of this navigation element could risk:</h2>
            <h2> • Disrupting the user experience after launch</h2>
            <h2> • Forcing large-scale redesigns</h2>
            <h2> • Delaying future releases due to foundational changes</h2>
          </div>
          <div className="ourgoal">
            <h1>Our goal</h1>
            <h2>
              • Understand how users interact with multiple account aggragated
              investment views
            </h2>
            <h2>
              • Determine whether navigation elements should persist across
              sections
            </h2>
            <h2>• Make structural decisions before finalizing the MVP IA</h2>
          </div>
        </div>
      </div>
      <div className="wealth-section3">
        <div className="targetUsers">
          <div className="targetUsersText">
            {" "}
            <h1>Target users</h1>
            <h2>
              • The online portal is actively used by a large base of existing
              wealth management clients.
            </h2>
            <h2>
              • A long-term goal is to expand the platform to the broader client
              base, significantly increasing reach.
            </h2>
            <h2>
              → Test participants included both internal employees with
              investing experience and external users aged 35–60+ who actively
              use wealth management apps
            </h2>
          </div>
          <img src={investing} alt="investing apps" />
        </div>
        <div className="wealth-userneeds">
          <h1>User needs</h1>
          <img src={userneeds} alt="investing apps" />
        </div>
        <div className="wealthProcess">
          <h3>Process</h3>
          <h1>Reducing uncertainty before locking the app’s structure</h1>
          <img src={testprocess} alt="Process" />
        </div>
      </div>
      <div className="whatwasTested-sec4">
        <h3>What was tested</h3>
        <h1>Validating how users expect to move between investments</h1>
        <h2>
          We had a lot of unanswered questions going into this project and
          needed to validate any decisions made with the users before
          potentially overhauling the designs. Below are the key elements we set
          out to test:{" "}
        </h2>
        <div className="futurenav">
          <div className="futurenavtext">
            {" "}
            <h1>→ Future Navigation Element</h1>
            <h2>
              • Should this navigation element persist across all sections?
            </h2>
            <h2>
              • Is switching between different investment views intuitive?
            </h2>
          </div>

          <img src={futurenav} alt="navigation element" />
        </div>
        <div className="bottomnav">
          {" "}
          <div className="bottomnavtext">
            {" "}
            <h1>→ Bottom Navigation Structure</h1>{" "}
            <h2>
              {" "}
              • Compared two IA variations with different groupings of related
              content{" "}
            </h2>{" "}
            <h2>
              {" "}
              • Do users prefer all account-related content consolidated on a
              single page or organized into separate sections accessible through
              the bottom navigation?{" "}
            </h2>{" "}
          </div>{" "}
          <img src={bottomnav} alt="navigation element" />{" "}
        </div>
        <div className="scrollvstab">
          <div className="scrollvstabtext">
            <h1>→ Home Page + Account Page Content Layout</h1>
            <h2>• User expectations for tabbed vs. scrolling views</h2>
            <h2>
              • Clarity of access to key resources like statements and reports
            </h2>
          </div>
          <img src={scrollvstab} alt="scroll vs tab" />
        </div>
      </div>

      <div className="keyinsights">
        <h3>Key insights</h3>
        <h1>Clarity comes from consistency, visibility, and context</h1>
        <div className="insights">
          <div className="insight1">
            <h1>🧭 Navigation Preferences</h1>
            <h2>
              ✔️ Majority of users preferred having account-related content
              available both within individual account views and as separate
              sections in the bottom navigation
            </h2>

            <h2>
              ❌ Unexpected disappearance of navigation bar on certain screens
              resulted in context loss and confusion
            </h2>
          </div>
          <div className="insight2">
            <h1> 📁 Grouping and Switching</h1>
            <h2>
              ❌ Some workflows for managing investment views lacked clarity
            </h2>

            <h2>
              ❌ Entry point to create a grouped view isn’t easily accessible,
              doesn’t match mental model of users
            </h2>

            <h2>
              ❌ Placement of navigation element and confirmation states weren't
              visible enough
            </h2>
          </div>
          <div className="insight3">
            <h1>📄 Resource Access</h1>
            <h2>
              ❗️ Many expected account specific files to be found within
              account views
            </h2>
            <h2>✔️ Contextual entry points improved discoverability</h2>
          </div>
        </div>
      </div>
      <div className="recos">
        <h3>Recommendations + Next steps</h3>
        <h1>Anchor Navigation to Preserve Context</h1>
        <h2>
          Maintain a persistent bottom navigation across primary screens to
          reduce disorientation when users switch between investment views.
          Testing showed that removing navigation elements mid-journey caused
          users to lose their sense of place, increasing hesitation and
          backtracking. Persistence prioritizes recognition over recall while
          supporting confident exploration.
        </h2>
        <img src={improvement1} alt="improvement 1" />

        <h1>Support Both Aggregated and Account-Specific Mental Models</h1>
        <h2>
          Expose account-related content through both global navigation and
          individual account views. Users expected to access high-level,
          aggregated information when navigating globally, while relying on
          account views for detailed, task-specific actions. Designing for both
          patterns ensures flexibility without forcing users into a single
          workflow.
        </h2>
        <img src={improvement2} alt="improvement 2" />
        <h1>Clarify Grouping and Switching Workflows</h1>
        <h2>
          Simplify the creation and switching of grouped investment views by
          improving labels, visibility of entry points, and confirmation states.
          Testing revealed mismatches between current workflows and users’
          mental models, particularly around where grouping actions should begin
          and how changes are acknowledged. When actions are clearly
          communicated, users can complete high-impact tasks without unnecessary
          friction or uncertainty.
        </h2>
        <img src={improvement3} alt="improvement 3" />
        <h1>Contextualize Access to Investment Documents</h1>
        <h2>
          Integrate files such as statements and reports directly within
          relevant account views rather than relying on centralized
          repositories. Users consistently looked for account-specific resources
          in context, and surfacing them where decisions are made improves
          discoverability and task efficiency.
        </h2>
        <img src={improvement4} alt="improvement 4" />
      </div>
      <div className="impact">
        <h3>Impact</h3>
        <h1>Reducing structural risk before the product shipped</h1>
        <ul class="impact-list">
          <li>
            Validated a scalable navigation model before MVP lock, avoiding
            foundational IA rework as grouped investment views roll out.
          </li>
          <li>
            Aligned design, product, and leadership on a single navigation
            direction, reducing ambiguity and unblocking downstream design and
            engineering decisions.
          </li>
          <li>
            Informed roadmap planning for post-launch features, ensuring future
            grouping and switching capabilities could be introduced without
            disrupting core user flows.
          </li>
        </ul>
      </div>
      <div className="whatIlearned">
        <h1>What I learned</h1>
        <div className="learnings">
          <div className="learning1">
            <h1>🕹️ Maintain control</h1>
            <h2>
              Isolating navigation variables in high-fidelity prototypes was
              critical to ensuring feedback reflected structure, not visual
              noise.
            </h2>
          </div>
          <div className="learning2">
            <h1>🧠 Domain Expertise</h1>
            <h2>
              Learning about the problem space and its unique challenges was
              essential to making informed design decisions that reflected real
              user needs.
            </h2>
          </div>
          <div className="learning3">
            <h1>💡 Be Proactive</h1>
            <h2>
              Testing future-scope features early prevents costly rework.
              Communicating design concerns with the product team is critical to
              reduce scalability risks.
            </h2>
          </div>
        </div>
      </div>

      <section class="more-work">
        <h1>Continue Reading</h1>

        <div class="carousel-wrapper">
          {/* <button class="carousel-btn left" aria-label="Scroll left">←</button> */}

          <div class="carousel" id="carousel">
            <a href="/heymilo" class="carousel-card">
              <img src="images/heymilo-mockup.png" alt="HeyMilo AI" />
              <h2>
                Redesigning an ATS dashboard and navigation system to streamline
                recruiter workflows
              </h2>
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
              <h2>
                {" "}
                Reimagining a product landing page for increased visual
                engagement
              </h2>
            </a>
          </div>

          {/* <button class="carousel-btn right" aria-label="Scroll right">→</button> */}
        </div>
      </section>

      <Footer className="footerSubBud" />
    </div>
  );
}

export default WealthApp;
