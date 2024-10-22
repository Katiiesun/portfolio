import "../static/subbud.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";

const subbudBanner = process.env.PUBLIC_URL + "images/subbud-banner.png";
const designEmpathize = process.env.PUBLIC_URL + "images/design-empathize.png";
function Subbud() {
  return (
    <div>
      <div className="subbud-header">
        <Navigation className="projectsnav" />
        <img src={subbudBanner} alt="subbud banner" />
      </div>
      <div className="subbud-section1">
        <div className="subbud-overview">
          <h1>
            SubBud is a simple yet powerful subscription management app
            providing users with full visibility and control over their
            services, insights into their spending and usage, as well as a way
            to discover new subscriptions that fit their needs and interests.
          </h1>
        </div>
        <div className="subbud-intro">
          <div className="subbud-skills">
            <h1>SKILLS</h1>
            <h2>User research</h2>
            <h2>App architecture</h2>
            <h2>Interaction design</h2>
          </div>
          <div className="project-duration">
            <h1>TOOLS</h1>
            <h2>Figma</h2>
          </div>
          <div className="project-duration">
            <h1>DURATION</h1>
            <h2>2 weeks, April 2024</h2>
          </div>
        </div>
      </div>
      <div className="subbud-section2">
        <h1>The challenge</h1>
        <h2>
          "How might we simplify the management of subscription services to
          minimize financial waste and improve convenience as well as
          discoverability for users?"
        </h2>
      </div>
      <div className="designProcess1">
        <h1>Design Process</h1>
        <img src={designEmpathize} alt="Design Process Empathize" />
        <h2>
          In this step, the goal was to gain a better understanding of user
          needs, pain points, and motivations. I gathered research through
          various sources including:{" "}
        </h2>
        <h3>
          -Interviewed a few of my peers that use multiple subscription services{" "}
        </h3>
        <h3>
          {" "}
          -Conducted secondary research through competitor products and user
          reviews
        </h3>
      </div>
      <div className="userInterviews">
        <h1>User interviews key findings</h1>
        <h2>
          After conducting user interviews with a few of my peers, I established
          6 key findings that needed to be considered when designing my
          solution.
        </h2>
        <div className="keyFindings">
          <div className="keyFindings-row1">
            {" "}
            <div className="keyFinding1">
              <h2>1. Awareness of Renewals</h2>
              <h3>
                Many of those interviewed aren't aware of their upcoming
                subscription payment dates and manually set reminders to cancel
                free trials.
              </h3>
            </div>
            <div className="keyFinding2">
              <h2>2. Difficulty Cancelling</h2>
              <h3>
                Multiple of those interviewed find the cancellation process for
                subscriptions difficult and time-consuming.
              </h3>
            </div>
            <div className="keyFinding3">
              <h2>3. Managing Multiple Services</h2>
              <h3>
                Interviewees reported difficulty in efficiently managing
                multiple subscriptions, specifically keeping track of which
                services they're paying for, managing shared subscriptions and
                noticing overlapping services.
              </h3>
            </div>
          </div>
          <div className="keyFindings-row2">
            <div className="keyFinding4">
              <h2>4.Lack of Discovery</h2>
              <h3>
                Multiple people expressed challenges in discovering new,
                relevant subscriptions that'll be beneficial to their needs and
                cater to their interests.{" "}
              </h3>
            </div>
            <div className="keyFinding5">
              <h2>5. Usage Tracking</h2>
              <h3>
                Users reported that they sometimes go long periods of time
                without using certain services but continue paying due to a lack
                of awareness with usage, resulting in money being wasted.{" "}
              </h3>
            </div>
            <div className="keyFinding6">
              <h2>6. Total Expense Visibility</h2>
              <h3>
                Those interviewed struggle with gaining a clear view of their
                overall spending on subscriptions, often leading to budget
                mismanagement and overspending.{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subbud;
