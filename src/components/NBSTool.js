import "../static/NewbornScreening.css";
import "../static/NBSTool.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useEffect } from "react";

const newbornsimg = process.env.PUBLIC_URL + "/images/newbornsai.png";
const excel = process.env.PUBLIC_URL + "/images/excelNBS.png";
const currentworkflow = process.env.PUBLIC_URL + "/images/current workflow.png";
const newworkflow = process.env.PUBLIC_URL + "/images/newworkflow.png";
const holisticflow = process.env.PUBLIC_URL + "/images/holisticuserflow.png";
const iteration1 = process.env.PUBLIC_URL + "/images/nbsiteration1.png";
const iteration2 = process.env.PUBLIC_URL + "/images/nbsiteration2.png";

const iteration3 = process.env.PUBLIC_URL + "/images/iteration 3.png";

function NBSTool() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ns-page">
      <Navigation className="navhome" />

      <main className="ns-container">
        {/* HERO */}
        <section className="ns-hero">
          <div className="ns-hero-text">
            <h1>Newborn Screening Analysis Tool</h1>

            <p className="ns-subtitle">
              Reducing newborn screening analysis and reporting turnaround from
              <span className="highlight2"> weeks to days</span>
            </p>

            <div className="ns-image-wrapper">
              <div className="ns-image">
                <img src={newbornsimg} alt="Newborn screening tool" />
              </div>
            </div>

            {/* META ROW */}
            <div className="ns-meta">
              <div className="ns-meta-item">
                <span className="ns-label">Timeline</span>
                <p>Q1 2026</p>
              </div>

              <div className="ns-meta-item">
                <span className="ns-label">Team</span>
                <p>UX Designer (me)</p>
                <p>2 UX Researchers</p>
                <p>Product Manager</p>
                <p>Engineering Team</p>
              </div>

              <div className="ns-meta-item">
                <span className="ns-label">Status</span>
                <p>Pilot released to partner lab</p>
              </div>
            </div>
          </div>
        </section>

        {/* TLDR */}
        <section className="nbs-section">
          <h3>TL;DR</h3>

          <div className="nbs-tldr-grid">
            <div className="nbs-tldr-card">
              <h4>Problem</h4>
              <p>
                Manual, fragmented cutoff analysis workflows forced scientists
                to export and analyze data across tools, reducing efficiency and
                confidence in high-stakes decisions.
              </p>
            </div>

            <div className="nbs-tldr-card">
              <h4>Solution</h4>
              <p>
                Designed an AI-assisted platform that centralizes data setup,
                analysis, and reporting with real-time insights and full user
                control.
              </p>
            </div>

            <div className="nbs-tldr-card">
              <h4>Outcome</h4>
              <p>
                Pilot validated with partner lab, reducing analysis time from
                weeks to days, improving workflow efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* DEFINITIONS */}
        <section className="nbs-section">
          <h3>Definitions</h3>
          <p>Some terminology I use in this case study:</p>

          <p>
            <b>Newborn Screening (NBS):</b> Routine blood tests after birth to
            detect rare disorders early.
          </p>

          <p>
            <b>Analyte:</b> Biological compound measured in blood (e.g. hormone,
            metabolite).
          </p>

          <p>
            <b>Disorder:</b> Condition being screened for, linked to one or more
            analytes.
          </p>

          <p>
            <b>Cutoff Analysis:</b> Process of determining thresholds for
            detecting disorders using population data.
          </p>
        </section>

        <div className="nbs-divider-strip"></div>

        {/* PROJECT OVERVIEW */}
        <section className="nbs-section">
          <h2 className="ns-accent-title">Project Overview</h2>

          <h3>Background</h3>

          <p>
            Newborn screening (NBS) labs use cutoff values to determine whether
            a newborn’s analyte levels indicate a potential disorder, separating
            normal from abnormal results and guiding critical follow-up
            decisions. Evaluating and updating these thresholds is complex and
            high-stakes, requiring scientists to analyze large datasets across
            demographic groups like birth weight, gestational age, and age at
            collection, with particular attention to results near the cutoff.
          </p>

          <p>
            Today, this process is highly manual and fragmented. Scientists
            export data from a legacy system, split it into demographic
            segments, generate multiple visualizations, and repeat this workflow
            across 60+ analytes several times a year. Each cycle can take hours
            per analyte, limiting time for deeper analysis and reducing
            efficiency.
          </p>

          <p>
            As a result, the process is not only time-consuming but also
            difficult to validate, making it harder for scientists to feel
            confident in cutoff decisions that directly impact newborn health
            outcomes.
          </p>

          <div className="nbs-visual-block">
            <div className="nbs-visual-image">
              <img src={excel} alt="Cutoff analysis visualization" />
            </div>

            <div className="nbs-visual-text">
              <h4>60+ analytes to review & report</h4>
              <p>Hours of manual work spent per analyte</p>
            </div>
          </div>
        </section>

        {/* OBJECTIVE */}
        <section className="nbs-section">
          <h4>Objective</h4>

          <p>
            The objective of this project was to create an AI-assisted workflow
            that supports lab scientists in cutoff analysis and report
            generation without removing human control.
          </p>

          <p>Specifically, we aimed to:</p>

          <ul className="nbs-list">
            <li>
              Reduce cutoff analysis and reporting turnaround from 3 weeks to a
              few days
            </li>
            <li>Streamline the end-to-end workflow within a single platform</li>
            <li>
              Support human-in-the-loop decision-making with AI-surfaced
              insights
            </li>
            <li>
              Increase scientist confidence through data transparency and
              clarity
            </li>
          </ul>
        </section>

        {/* DESIGN CHALLENGE */}
        <section className="nbs-section">
          <h3>Design Challenge</h3>

          <h4>Balancing AI efficiency with user trust</h4>

          <p>
            While AI has the potential to automate parts of this workflow, it
            introduces a core tension: too much automation reduces transparency
            and trust, while too little leaves scientists with inefficiency and
            cognitive overload.
          </p>

          {/* HMW BOX */}
          <div className="nbs-hmw-box">
            <p className="nbs-hmw-label">How Might We…</p>
            <p className="nbs-hmw-text">
              leverage AI to support faster reporting while maintaining human
              confidence and control?
            </p>
          </div>

          <h3>Constraints</h3>

          <ul className="nbs-list">
            <li>
              Parallel design + development required tight alignment with
              engineering
            </li>
            <li>
              MVP scope forced prioritization of only the most critical features
            </li>
            <li>
              Legacy system limitations constrained flexibility of data
              interactions
            </li>
          </ul>

          <p>
            These constraints created a tradeoff between scalability and speed.
            We prioritized a focused MVP for pilot testing while designing a
            foundation that could scale later.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="nbs-section">
          <h4>Solution</h4>

          <p>
            An AI-assisted web platform that streamlines cutoff analysis and
            report generation for NBS labs.
          </p>

          <p>
            The tool allows scientists to visualize and manipulate graphs,
            analyze cutoff values, validate results against diagnosed cases, and
            generate reports directly within the system.
          </p>

        </section>

        {/* OUTCOME */}
        <section className="nbs-section">
          <h4> Outcome</h4>

          <p>
            The product was developed from my designs and released as a pilot
            for a partner newborn screening lab to begin testing.
          </p>

          <p>
            The workflow that previously required hours of manual graphing and
            data stratification has been fully automated, removing repetitive
            analysis steps and enabling scientists to focus entirely on
            interpreting results rather than preparing them.
          </p>
        </section>

        <div className="nbs-divider-strip"></div>

        <section className="nbs-section">

        <h2 className="ns-accent-title">Design Process</h2>

  <h3>Understanding the Current Workflow</h3>

  <p>
    The existing workflow at partner labs was largely manual: scientists would
    export data from the legacy system <b>SpecimenGate</b>, manually stratify
    and graph data in Excel, analyze the results, propose new cutoffs, and
    compile findings into reports for approval committee review.
  </p>

  <p>
    This process was highly time-intensive and inconsistent, especially when
    dealing with demographic variations or borderline threshold decisions.
  </p>

  <div className="nbs-process-image">
    <img
      src={currentworkflow}
      alt="Current workflow diagram"
    />
  </div>

</section>

<section className="nbs-section">



  <h3>Rewriting the Workflow</h3>

  <p>
    We needed to identify where AI could assist without removing human oversight.
    To do this, we analyzed points of highest manual effort, decision complexity,
    and error risk within the existing workflow.
  </p>

  <p>
    This led to three key intervention points where AI could reduce cognitive
    and operational burden while keeping scientists fully in control:
  </p>


  <div className="nbs-process-image">
    <img
      src={newworkflow}
      alt="New workflow diagram"
    />
  </div>

  <p>
    Based on these intervention points, we redesigned the workflow so that data
    visualization and insight generation are automated, while scientists remain
    responsible for final cutoff decisions and report approval.
  </p>

  <p>
    Rather than replacing human judgment, the system guides scientists through
    critical decision points, reducing both time and error while preserving
    full control over outcomes.
  </p>

</section>


{/* DESIGN RATIONALE */}
<section className="nbs-section">
  <h4>Design Rationale</h4>

  {/* Column headers */}
  <div className="nbs-rationale-header">
    <span>Problem</span>
    <span>Rationale</span>
    <span>Feature Requirement</span>
  </div>

  {/* Row 1 */}
  <div className="nbs-rationale-row">
    <div className="nbs-rationale-cell">
      <p>
        Scientists were accustomed to a <strong>fragmented workflow</strong> involving
        SpecimenGate exports, Excel analysis, and manual report compilation. Introducing
        a completely new system would require extensive retraining and disrupt established
        processes, creating resistance to adoption.
      </p>
    </div>
    <div className="nbs-rationale-cell">
      <p>
        By <strong>embedding automation within existing patterns</strong> rather than
        replacing them, we could reduce adoption friction and allow scientists to leverage
        familiar mental models. This respects organizational structures already in place
        while gradually introducing efficiency improvements.
      </p>
    </div>
    <div className="nbs-rationale-cell">
      <ul className="nbs-list">
        <li>Direct SpecimenGate integration for seamless data import</li>
        <li>Disorder → analyte navigation mirroring current lab taxonomy</li>
        <li>Preserved approval committee review workflow with digital enhancements</li>
        <li>Report templates matching existing format expectations</li>
      </ul>
    </div>
  </div>

  {/* Row 2 */}
  <div className="nbs-rationale-row">
    <div className="nbs-rationale-cell">
      <p>
        Borderline cutoff values and outlier interpretation require <strong>nuanced
        clinical judgment that AI cannot fully replicate.</strong> Removing human oversight
        could introduce risk in a high-stakes environment where errors have serious
        consequences for newborn health outcomes.
      </p>
    </div>
    <div className="nbs-rationale-cell">
      <p>
        Rather than automating decisions, the system should <strong>augment human
        expertise</strong> by reducing cognitive load and surfacing relevant information
        at critical decision points. This respects domain expertise while addressing
        the manual burden that slows down analysis.
      </p>
    </div>
    <div className="nbs-rationale-cell">
      <ul className="nbs-list">
        <li>AI-generated insights presented as observations, not mandates</li>
        <li>Contextual data displays (demographic breakdowns, historical trends)</li>
        <li>Interactive graph manipulation for threshold scenario exploration</li>
        <li>Manual override capability of AI outputs for all configurations</li>
      </ul>
    </div>
  </div>

  {/* Row 3 */}
  <div className="nbs-rationale-row">
    <div className="nbs-rationale-cell">
      <p>
        Scientists don't want a black box that simply outputs results. Without
        visibility into the analysis process, scientists may <strong>distrust AI
        recommendations</strong> or second-guess their own decisions.
      </p>
    </div>
    <div className="nbs-rationale-cell">
      <p>
        Building trust requires making all data configurations, decision logic, and
        analysis steps <strong>visible and easy to follow.</strong> The interface should
        support careful exploration rather than encouraging quick guesses.
      </p>
    </div>
    <div className="nbs-rationale-cell">
      <ul className="nbs-list">
        <li>Visible data configurations showing parameters being analyzed</li>
        <li>Clear explanations for AI-generated insights</li>
        <li>Real-time visibility of suggestions as approvers leave them</li>
        <li>Audit trail showing all changes and decisions made during analysis</li>
      </ul>
    </div>
  </div>
</section>

<section className="nbs-section">


  <h3>Holistic User Flow</h3>

  <p>
    To ensure the solution fit naturally into existing lab operations, we mapped
    a holistic end-to-end user flow from both the <b>lab scientist</b> and
    <b> approval committee</b> perspectives.
  </p>

 

  {/* IMAGE */}
  <div className="nbs-flow-image">
    <img
      src={holisticflow}
      alt="Holistic user flow diagram"
    />
  </div>

</section>

{/* DESIGN ITERATIONS */}
<section className="nbs-section">
  <h2 className="ns-accent-title">Design Iterations</h2>

  {/* Iteration 1 */}
  <div className="nbs-iteration">
    <div className="nbs-iteration-header">
      <span className="nbs-iteration-tag">Iteration 1</span>
      <h3 className="nbs-iteration-title">Linear Workflow (Analysis → Report)</h3>
      <p className="nbs-iteration-concept">Data setup → Analyze → Generate report + AI insights</p>
    </div>

    <div className="nbs-iteration-body">
      <div className="nbs-iteration-image-placeholder">
      <img
      src={iteration1}
      alt="iteration1"
    />
      </div>

      <div className="nbs-iteration-feedback">
        <div className="nbs-feedback-col">
          <h5 className="nbs-feedback-label nbs-label-worked">What worked</h5>
          <ul className="nbs-check-list">
            <li className="nbs-check">Clear, structured flow for first-time users</li>
          </ul>
          <h5 className="nbs-feedback-label nbs-label-didnt">What it lacked</h5>
          <ul className="nbs-check-list">
            <li className="nbs-ex">Rigid, linear workflow. Limited iteration</li>
            <li className="nbs-ex">AI only available at the end, not helpful during analysis</li>
            <li className="nbs-ex">Disconnect between analysis and reporting</li>
          </ul>
        </div>
        <div className="nbs-feedback-col nbs-feedback-user">
          <h5 className="nbs-feedback-label">User feedback</h5>
          <ul className="nbs-check-list">
            <li className="nbs-neutral">Scientists analyze data iteratively, not step-by-step</li>
            <li className="nbs-neutral">Need support during analysis, not just at the end</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Iteration 2 */}
  <div className="nbs-iteration">
    <div className="nbs-iteration-header">
      <span className="nbs-iteration-tag">Iteration 2</span>
      <h3 className="nbs-iteration-title">Integrated Analysis + Reporting</h3>
      <p className="nbs-iteration-concept">Data setup → Analyze ⇄ Report (AI always accessible)</p>
    </div>

    <div className="nbs-iteration-body">
    <div className="nbs-iteration-image-placeholder">
      <img
      src={iteration2}
      alt="iteration2"
    />
      </div>

      <div className="nbs-iteration-feedback">
        <div className="nbs-feedback-col">
          <h5 className="nbs-feedback-label nbs-label-worked">What worked</h5>
          <ul className="nbs-check-list">
            <li className="nbs-check">Supports a more iterative workflow</li>
            <li className="nbs-check">Users maintain full visibility into their report</li>
            <li className="nbs-check">AI becomes a real-time analysis tool, not just output generation</li>
          </ul>
          <h5 className="nbs-feedback-label nbs-label-didnt">What it lacked</h5>
          <ul className="nbs-check-list">
            <li className="nbs-ex">Data parameters hidden within filter, unclear what was being analyzed</li>
            <li className="nbs-ex">Loss of context when user went back a step to edit data setup</li>
            <li className="nbs-ex">Higher cognitive load with more simultaneous options</li>
          </ul>
        </div>
        <div className="nbs-feedback-col nbs-feedback-user">
          <h5 className="nbs-feedback-label">User feedback</h5>
          <ul className="nbs-check-list">
            <li className="nbs-neutral">Flexibility improves workflows, but needs structure and guidance</li>
            <li className="nbs-neutral">Balance required between power and usability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Iteration 3 */}
  <div className="nbs-iteration">
    <div className="nbs-iteration-header">
      <span className="nbs-iteration-tag">Iteration 3</span>
      <h3 className="nbs-iteration-title">Increasing Visibility and Control in Analysis</h3>
    </div>

    <div className="nbs-iteration-body">
    <div className="nbs-iteration-image-placeholder">
      <img
      src={iteration3}
      alt="iteration3"
    />
      </div>

      <div className="nbs-iteration-feedback">
        <div className="nbs-feedback-col">
          <h5 className="nbs-feedback-label nbs-label-worked">Improvements</h5>
          <ul className="nbs-check-list">
            <li className="nbs-check">Adjust data setup without losing context</li>
            <li className="nbs-check">Data parameters always visible</li>
            <li className="nbs-check">Controls accessible during analysis, supporting in-context iteration</li>
          </ul>
        
          <ul className="nbs-check-list">
      
          </ul>
        </div>
        <div className="nbs-feedback-col nbs-feedback-user">
          <h5 className="nbs-feedback-label">Key learning</h5>
          <ul className="nbs-check-list">
            <li className="nbs-neutral">Critical parameters should be defined upfront, but remain editable</li>
            <li className="nbs-neutral">Users need both clarity at the start and flexibility during analysis</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </section>

<section className="nbs-section">
<h2 className="ns-accent-title">Final Designs Coming Soon...</h2>

</section>

      </main>

      <Footer className="footerHome" />
    </div>
  );
}

export default NBSTool;
