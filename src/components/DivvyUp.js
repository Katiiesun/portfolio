import "../static/DivvyUp.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

function DivvyUp() {
  const DivvyUpBanner = process.env.PUBLIC_URL + "images/DivvyUp-banner.png";
  const divvyUserFlow = process.env.PUBLIC_URL + "images/divvy-userflow.JPG";
  const divvyWireframes =
    process.env.PUBLIC_URL + "images/Screenshot 2024-11-14 at 1.09.13 PM.png";
  const divvyEventIteration =
    process.env.PUBLIC_URL + "images/divvy-event-iteration.png";
  const addfriendCard = process.env.PUBLIC_URL + "images/add-friend-card.png";
  const divvyonboarding =
    process.env.PUBLIC_URL + "images/divvy onboarding.png";
  const divvyhome = process.env.PUBLIC_URL + "images/divvy home and plan.png";
  const divvyplan = process.env.PUBLIC_URL + "images/divvy adding event.png";
  const divvyAI = process.env.PUBLIC_URL + "images/divvy ai.png";
  const divvysplit = process.env.PUBLIC_URL + "images/divvy bill splitter.png";
  const divvypersona = process.env.PUBLIC_URL + "images/Group 54.png";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navigation className="projectsnav" />
      {/* <div className="construction-msg">
        <h1> This page is under construction! 🔧👷🏻‍♀️</h1>
      </div> */}
      <div className="DivvyUp-header">
        <img src={DivvyUpBanner} alt="background" />
      </div>
      <div className="cs-section1">
        <div className="cs-overview">
          <h1>Background</h1>
          <h2>
            As someone who frequently plans outings and trips with friends, I
            recognized a recurring set of frustrations in managing group
            schedules and expenses. My friends and I often relied on text
            messages, Google Docs, or even mental notes to organize our plans
            and track who paid for what. By the end of each outing, determining
            how much everyone owed and ensuring timely payments became a hassle.
          </h2>
          <h2>
            To address these needs, I designed DivvyUp, an all-in-one group
            planning and bill-splitting app. DivvyUp allows users to coordinate
            events, track expenses, and manage payments seamlessly in one
            platform, solving the pain points around planning, cost-sharing, and
            accountability.{" "}
          </h2>
        </div>
        <div className="subbud-intro">
          <div className="subbud-skills">
            <h1>SKILLS</h1>
            <h2>Product thinking</h2>
            <h2>App architecture</h2>
            <h2>Interaction design</h2>
          </div>
          <div className="project-duration">
            <h1>TOOLS</h1>
            <h2>Figma</h2>
          </div>
          <div className="project-duration">
            <h1>DURATION</h1>
            <h2>September - November 2024</h2>
          </div>
        </div>
      </div>
      <div className="divvy-section2">
        <div className="cs-overview">
          <h1>User Research</h1>
          <h2>
            I started by talking with frequent group planners to validate common
            pain points around organizing events and tracking expenses. My own
            experience, combined with insights from others, emphasized the need
            for a cohesive app that combines both planning and bill-splitting,
            while addressing the frustration of forgotten payments and lost
            accountability.
          </h2>
          <h2>
            Additionally, I looked into what sources had to say online.
            According to Forbes, almost half of all users (47%) now lean on apps
            to split bills due to inflation, with this percentage even higher
            among millennials and Gen Z. For these demographics, 58% split bills
            at least once a week, while 29% do so daily. This trend highlights a
            growing need for tools that simplify cost-sharing, especially as
            shared expenses become more frequent and complex.{" "}
          </h2>
          <h1>From these insights, I concluded 3 key findings:</h1>
        </div>
        <div className="keyFindingsDivvy">
          {" "}
          <div className="keyFinding-1">
            <h2>1. Scattered Planning</h2>
            <h3>
              Planning is often scattered across multiple platforms, such as
              text messages, Google Docs, and personal mental notes, making it
              difficult to keep track of details. This approach adds complexity
              to organizing and following through with plans.
            </h3>
          </div>
          <div className="keyFinding-2">
            <h2>2. Expense Tracking + Calculations</h2>
            <h3>
              People often struggle with tracking payments made during group
              outings or trips and determining how much each person owes at the
              end. This process can be challenging and confusing, especially
              when expenses are shared across multiple people and activities
            </h3>
          </div>
          <div className="keyFinding-3">
            <h2>3. Accountability</h2>
            <h3>
              {" "}
              Payment reminders are frequently overlooked in group chats or
              buried in notes apps, leading to delayed or forgotten repayments
              due to a lack of clear accountability. Additionally, asking others
              to pay back can often feel uncomfortable or awkward.
            </h3>
          </div>
        </div>
        <img src={divvypersona} alt="divvyUp user flow" />
      </div>
      <div className="divvy-section3">
        <h1>Ideation</h1>
        <h2>
          {" "}
          Next, I moved into the ideation phase, where I prioritized key
          features to maximize the app's impact on user experience and mapped
          out the user flow to ensure seamless interactions.
        </h2>
        <img src={divvyUserFlow} alt="divvyUp user flow" />
        <h2> I then started wireframing my ideas in Figma! </h2>
        <img src={divvyWireframes} alt="divvyUp user flow" />
      </div>
      <div className="divvy-section4">
        <h1>
          Design Iteration: Enhancing the Schedule with Multi-Payment Tracking
        </h1>
        <h2>
          One of the key design iterations I made during the development of
          DivvyUp was refining the way payments were logged within scheduled
          events. In my initial design, each event in the schedule allowed for
          only one payment entry. This design decision stemmed from the idea
          that users, when on the go, could quickly log a payment directly in
          the schedule at the exact time it was made. This approach provided a
          straightforward way to record expenses in real-time and automatically
          associate them with specific activities in the day’s plan.
        </h2>
        <img src={divvyEventIteration} alt="Adding event design iteration" />

        <h2>
          However, through testing and further reflection on typical group
          outings, I recognized a significant limitation in this approach: most
          planned events throughout the day involve multiple payments. For
          instance, during an afternoon at an amusement park, various people
          might make individual payments for entry tickets, food, souvenirs, and
          more. Limiting each event to a single payment didn’t align with the
          way groups generally manage their expenses in such scenarios, where
          costs are often shared multiple times within a single event block.
        </h2>
        <h2>
          To better serve the needs of users and to improve the app's scheduling
          functionality, I prioritized an iteration that allowed multiple
          payments to be logged within each event. This enhancement enables
          users to record each expense made by different group members
          throughout an event, making the schedule far more flexible and
          representative of real-life spending patterns. This change was
          essential to maintaining a seamless experience, as it allowed users to
          track shared costs without needing to create separate events for each
          payment, thereby reducing complexity and enhancing usability.
        </h2>
        <div className="iteration-2">
          {" "}
          <h1>Design Iteration: Streamlining the 'Adding Friends' Process</h1>
          <h2>
            Another one of the design iterations I focused on was streamlining
            the process of adding friends to a plan. Initially, my idea was for
            users to search for a friend, tap on their profile, and then press
            "Add Friend." However, during testing it was brought to my attention
            that this setup wasn't intuitive in showing that users could
            continue searching for more friends afterward.
          </h2>
          <img src={addfriendCard} alt="Iteration of adding friend card" />
          <h2>
            In the final design, I addressed this by enabling users to easily
            manage who's on the plan. Newly added friends now appear immediately
            under a section labeled "Added to Plan," clearly indicating that
            users can keep adding friends without needing to exit and re-enter
            the pop-up after each addition. This approach makes the process
            smoother and more intuitive, allowing users to add multiple friends
            seamlessly.
          </h2>
        </div>
      </div>
      <div className="divvy-section5">
        <div className="divvy-onboarding">
          {" "}
          <h1>Onboarding Screens</h1>
          <img src={divvyonboarding} alt="divvyUp onboarding screens" />
          <h1>Home page</h1>
        </div>

        <div className="divvy-final">
          {" "}
          <img src={divvyhome} alt="divvyUp home and plans screens" />
          <h2>
            Users can view both the payments they owe and those owed to them
            directly on the homepage. When a friend sends a payment, users can
            mark it as "resolved," promoting accountability and encouraging
            timely repayments. Additionally, the homepage provides an overview
            of upcoming plans, making it easy for users to stay on top of both
            financial and social commitments.
          </h2>
        </div>
        <div className="divvy-onboarding">
          {" "}
          <h1>Adding event in a plan</h1>
          <img src={divvyplan} alt="divvyUp plan and adding event screens" />
          <h2>
            When creating a plan, you can easily schedule events in an hourly
            view. Within these events, both you and your friends can log
            payments, track who paid for what, and specify how the costs are
            split among the group.
          </h2>
          <h2>
            Our planning feature also makes it simple to adjust the plan's month
            and date whenever needed. Users can modify these details directly on
            the same screen, eliminating the need to navigate elsewhere. This
            ensures a smooth rescheduling process without the user thinking they
            might lose the existing schedule they created.
          </h2>
        </div>
        <div className="divvy-onboarding">
          {" "}
          <h1>Curating a plan with generative AI</h1>
          <img src={divvyAI} alt="divvyUp AI generated plans" />
          <h2>
            The app's generative AI plan curator is perfect for times when users
            aren’t sure what to do. By selecting preferences like location, time
            of day, activity type, price range, and group size, users receive a
            curated lineup of activity suggestions tailored to their group. Each
            recommendation is editable, allowing users to create a unique,
            personalized experience for any outing.
          </h2>
        </div>
        <div className="divvy-onboarding">
          {" "}
          <h1>Split bills without creating a plan</h1>
          <img src={divvysplit} alt="divvyUp bill splitting feature" />
          <h2>
            The Bill Splitter section allows users to quickly split bills
            without prior planning, making it perfect for spontaneous outings.
            It also lets users manage current bills, view recent transactions,
            and start new bills. For ongoing expenses, like a multi-day trip,
            users can create draft bills to track shared costs before finalizing
            and dividing expenses.
          </h2>
        </div>
      </div>
      <div className="divvy-section6">
        {" "}
        <h1>Next steps</h1>
        <h2>
          -Conduct further usability testing with target users to validate
          multi-payment logging, scheduling, and AI plan suggestions.
        </h2>
        <h2>
          -Explore integrating in-app payment options (e.g., PayPal) to allow
          users to settle bills directly within the app.
        </h2>
      </div>

      <section class="more-work">
        <h1>Continue Reading</h1>

        <div class="carousel-wrapper">
          {/* <button class="carousel-btn left" aria-label="Scroll left">←</button> */}

          <div class="carousel" id="carousel">
      <a href="/wealthApp" class="carousel-card">
        <img src="images/wealthApp.png" alt="Wealth App" />
        <h2>Designing a future-ready navigation solution for Canada’s #1 insurance provider</h2>
      </a>

            <a href="/heymilo" class="carousel-card">
              <img src="images/heymilo-mockup.png" alt="HeyMilo AI" />
              <h2>
                Redesigning an ATS dashboard and navigation system to streamline
                recruiter workflows
              </h2>
            </a>


            <a href="/clearSpider" class="carousel-card">
              <img src="images/clearspiderBarcode.png" alt="ClearSpider" />
              <h2> Reimagining a product landing page for increased visual engagement</h2>
            </a>
          </div>

          {/* <button class="carousel-btn right" aria-label="Scroll right">→</button> */}
        </div>
      </section>

      <Footer className="footerSubBud" />
    </div>
  );
}

export default DivvyUp;
