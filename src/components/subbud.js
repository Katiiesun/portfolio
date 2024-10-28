import "../static/subbud.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

const subbudBanner = process.env.PUBLIC_URL + "images/subbud-banner.png";
const designEmpathize = process.env.PUBLIC_URL + "images/design-empathize.png";
const competitorReviews =
  process.env.PUBLIC_URL + "images/competitorReviews.png";
const competitorAnalysis =
  process.env.PUBLIC_URL + "images/competitorAnalysis.png";
const empathyMap = process.env.PUBLIC_URL + "images/empathymap.png";
const userPersona = process.env.PUBLIC_URL + "images/userpersona.png";
const ideationWireframe = process.env.PUBLIC_URL + "images/ideationsubbud.png";
const ideation = process.env.PUBLIC_URL + "images/design-ideate.png";
const prototype = process.env.PUBLIC_URL + "images/design-prototype.png";
const usabilityTesting = process.env.PUBLIC_URL + "images/usabilityTesting.png";
const iteration1 = process.env.PUBLIC_URL + "images/iterate1.png";
const iteration2 = process.env.PUBLIC_URL + "images/iterate2.png";
const iteration3 = process.env.PUBLIC_URL + "images/iterate3.png";
const finalDesign = process.env.PUBLIC_URL + "images/design-final.png";
const homepage = process.env.PUBLIC_URL + "images/subbud-home.jpeg";
const manageSubscription = process.env.PUBLIC_URL + "images/subFlow.jpeg";
const notifications = process.env.PUBLIC_URL + "images/notification.png";
const addingSub = process.env.PUBLIC_URL + "images/subBud-addingsub.jpeg";
const subAnalytics = process.env.PUBLIC_URL + "images/subBud-analytics.png";
const subExplore = process.env.PUBLIC_URL + "images/explore-portrait.png";
const linkIcon = process.env.PUBLIC_URL + "images/arrow-tr.png";

function Subbud() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="subbud-header">
        <Navigation className="projectsnav" />
        <img src={subbudBanner} alt="subbud banner" />
        <div className="subBud-prototype-link">
          {" "}
          <a
            target="_blank"
            href="https://www.figma.com/proto/R1tryGWF4H2U6obAc7WaX1/SubBud?page-id=123%3A578&node-id=553-6227&node-type=frame&viewport=606%2C215%2C0.14&t=xRdH191XcQWcN0Pg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=553%3A6227"
          >
            <h1>View Prototype</h1>
            <div className="link-icon">
              {" "}
              <img src={linkIcon} alt="link icon" />
            </div>
          </a>
        </div>
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
      <div className="secondaryResearch">
        <h1>Secondary Research</h1>
        <h2>
          Next, I conducted secondary research by looking at reviews of other
          existing products on the market, and conducting a thorough competitor
          analysis.{" "}
        </h2>
        <div className="competitor-reviews">
          {" "}
          <img src={competitorReviews} alt="competitor reviews" />
          <img src={competitorAnalysis} alt="competitor analysis" />
        </div>
        <h2>
          By comparing these features, I was able to pinpoint several gaps
          within the market:{" "}
        </h2>
        <h3>
          Edit and Cancel Subscriptions: There is a significant lack of
          platforms that allow users to edit and cancel subscriptions directly
          within the app. Users expressed a strong need for a seamless interface
          for managing subscription details and an integrated payment
          methods/wallet feature.
        </h3>
        <h3>
          Usage Analysis: Comprehensive usage tracking is rarely offered by
          competitors, yet it is crucial for users to evaluate the value of
          their subscriptions. This gap highlights the need for detailed usage
          analysis features.
        </h3>
        <h3>
          Price Increase Alerts: Many users are not notified of price increases
          for their subscriptions. The absence of price increase alerts prevents
          users from managing their budgets effectively and staying informed
          about changes in subscription costs.
        </h3>
        <h3>
          Service Discovery: It was observed that two of these products did not
          have an explore page where users can discover new subscriptions.
        </h3>

        <div className="empathyMap">
          <h1>Empathy Mapping</h1>
          <h2>
            Next, I created an empathy map to help me understand the users on a
            more personal level, enabling me to design solutions that truly
            resonate with their needs and aspirations.
          </h2>
          <img src={empathyMap} alt="empathy map" />
        </div>

        <div className="userPersona">
          <h1>User Persona</h1>
          <h2>
            After synthesizing all the research data and insights gathered, I
            turned this information into a user persona of the target user.
          </h2>
          <img src={userPersona} alt="user persona" />
        </div>
      </div>
      <div className="ideation">
        <h1>Ideation</h1>
        <img src={ideation} alt="design process ideation stage" />
        <h2>
          Now let's begin ideating! I started by translating my initial ideas
          into rough, low-fidelity wireframe drawings. These wireframes served
          as the foundation for the visual layout and user flow of the app.
        </h2>
        <h2>
          These wireframes were intentionally simple and rough, allowing me to
          explore a wide range of concepts and iterate rapidly.
        </h2>
        <img src={ideationWireframe} alt="ideation wireframes" />
      </div>
      <div className="prototype">
        <h1>Prototyping + Usability Testing</h1>
        <img src={prototype} alt="Prototyping and testing stage" />
        <h2>
          I then translated the rough sketches into more detailed and polished
          wireframes and mapped out interactions to create a high-fidelity
          prototype to be used for user testing.
        </h2>
        <h2>
          Next, I prepared instructions and questions for the participants and
          gathered points of confusion with my current design.
        </h2>

        <img src={usabilityTesting} alt="Usability testing steps" />
        </div>
        <div className="iterations">
          <h1>Design Iterations</h1>
          <h2>
            A few of the changes I made during this stage of the design process
            after receiving feedback from users!
          </h2>{" "}
          <div className="iteration1">
            {" "}
            <img src={iteration1} alt="First change to design" />
          </div>
          <div className="iteration2">
            {" "}
            <img src={iteration2} alt="Second change to design" />
          </div>
          <div className="iteration3">
            <img src={iteration3} alt="Third change to design" />
          </div>
        </div>
      <div className="finalDesign">
        <h1>Final Screens</h1>
        <div className="final-design-img">
          {" "}
          <img src={finalDesign} alt="Final design screens" />
        </div>
        <div className="homepage">
          <img src={homepage} alt="Home screens" />
          <div className="homepage-text">
            <h1>Home Screen</h1>
            <h2>
              View and manage your subscriptions, total monthly spending, and
              recent payments. Search through your subscriptions and share with
              friends and family.{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="manageSub">
        <div className="manageSub-text">
          <h1>Manage Subscription + Billing History</h1>
          <img
            src={manageSubscription}
            alt="Manage Subscription and billing history"
          />
        </div>
      </div>
      <div className="notifications">
        <img src={notifications} alt="Notifications screen" />
        <div className="notification-text">
          <h1>Notifications</h1>
          <h2>
            Turn on notifications and customize reminders for your
            subscriptions. Add multiple reminders and set the time and date for
            each.{" "}
          </h2>
        </div>
      </div>
      <div className="addingSub">
        <div className="addingSub-text">
          <h1>Adding a Subscription</h1>
        </div>
        <img src={addingSub} alt="Adding a subscription flows" />
      </div>
      <div className="subBud-analytics">
        <div className="analytics-text">
          <h1>Spending Analytics + Usage Insights</h1>
          <h2>
            The analytics page gives you full visibility into your spending as
            well as usage of each subscription. You can sort by time period and
            by subscription or category. Usage insights show which subscriptions
            you've used the most as well as ones you haven't used as much,
            providing saving suggestions.
          </h2>
        </div>
        <img src={subAnalytics} alt="Subbud Analytics Screen" />
      </div>
      <div className="subBud-explore">
        <img src={subExplore} alt="subbud explore screen" />
        <div className="subExplore-text">
          <h1>Discover Subscriptions</h1>
          <h2>
            Find new subscriptions that are catered to your interests and needs,
            recommended to you based off your current subscription types.
            Compare pricing and plans of other subscriptions to ensure best
            value.
          </h2>
        </div>
      </div>
      <Footer className="footerSubBud" />
    </div>
  );
}

export default Subbud;
