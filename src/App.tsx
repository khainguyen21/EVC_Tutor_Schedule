import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { type Tutor, type Day } from "./types";
import FilterBar from "./components/FilterBar";
import SubjectSection from "./components/SubjectSection";
import {
  getUniqueFields,
  sortSubjectAlphabetically,
} from "./utils/subjectMapping";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import ScrollToTop from "./components/ScrollToTop";
import TutoringRules from "./components/TutoringRules";

const App = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [courseFilter, setCourseFilter] = useState("");
  const [dayFilter, setDayFilter] = useState<Day>("");
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    setLoading(true);
    fetch("/data/schedule.json")
      .then((response) => response.json())
      .then((data) => {
        setTutors(data.tutors);
        if (data.lastUpdated) setLastUpdated(data.lastUpdated);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Group tutors by subject field using an empty object
  const groupedByField: Record<string, Tutor[]> = {};

  tutors.forEach((tutor) => {
    // Get all unique fields based on what course the tutor teaches
    const fields = getUniqueFields(tutor.subjects);

    // Add this tutor to each field they teach
    fields.forEach((field) => {
      if (!groupedByField[field]) {
        groupedByField[field] = [];
      }
      groupedByField[field].push(tutor);
    });
  });

  // console.log(groupedByField)
  // console.log(Object.keys(groupedByField));

  // Filter fields based on course filter
  const fieldsToShow = courseFilter
    ? Object.keys(groupedByField).filter((field) =>
        field.toLowerCase().includes(courseFilter.toLowerCase()),
      )
    : Object.keys(groupedByField);

  console.log(Object.keys(groupedByField));
  // Sort fields alphabetically
  const sortedFields = sortSubjectAlphabetically(Object.keys(groupedByField));
  const sortedFieldsToShow = sortSubjectAlphabetically(fieldsToShow);

  // Functions to handle state updates
  const handleCourseChange = (course: string) => {
    setCourseFilter(course);
    setFiltering(true);
    setTimeout(() => setFiltering(false), 300);
  };
  const handleDayChange = (day: Day) => {
    setDayFilter(day);
    setFiltering(true);
    setTimeout(() => setFiltering(false), 300);
  };

  // console.log(fieldsToShow)
  return (
    <div className="container">
      <Header />
      <main>
        <InfoSection
          title="EVC Campus Tutoring Drop-In Schedule & NetTutor Online Tutoring"
          intro={
            <>
              <strong>Spring 2026 Drop-In Tutoring</strong> – Students can
              access our EVC tutoring team during the below drop-in days and
              times through <strong>February 2nd</strong> through{" "}
              <strong>May 22nd, 2026</strong>. Tutors are available for drop-in
              tutoring on a first come, first served basis.
            </>
          }
        >
          <h3
            style={{
              color: "var(--primary-color)",
              margin: "20px 0 12px 0",
              fontSize: "1.1rem",
            }}
          >
            On-Campus Locations
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginBottom: "12px",
            }}
          >
            Click any location to get directions via Google Maps
          </p>
          <div style={{ marginBottom: "20px" }}>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=37.301583,-121.765167"
              target="_blank"
              rel="noopener noreferrer"
              className="location-badge location-badge--clickable location-badge--library"
              title="Get directions to LE-237 Library Building"
            >
              LE-237 Campus Tutoring (Library Building)
              <span className="location-badge__external-icon">↗</span>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=37.300333,-121.764194"
              target="_blank"
              rel="noopener noreferrer"
              className="location-badge location-badge--clickable location-badge--msrc"
              title="Get directions to MS-112 Math & Science Resource Center"
            >
              MS-112 Math & Science Resource Center (MS3 Building)
              <span className="location-badge__external-icon">↗</span>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=37.300694,-121.761333"
              target="_blank"
              rel="noopener noreferrer"
              className="location-badge location-badge--clickable location-badge--bio"
              title="Get directions to SQ-231 Biology Lab"
            >
              SQ-231 Biology Lab (Sequoia Building)
              <span className="location-badge__external-icon">↗</span>
            </a>
          </div>
          <h3
            style={{
              color: "var(--primary-color)",
              margin: "20px 0 12px 0",
              fontSize: "1.1rem",
            }}
          >
            NetTutor Online Tutoring
          </h3>
          <p style={{ marginBottom: "16px", lineHeight: 1.7 }}>
            EVC students can access <strong>NetTutor</strong> for all subjects
            by logging into their Canvas course:
          </p>
          <ol className="nettutor-steps">
            <li>Log into the Canvas course you need tutoring for</li>
            <li>
              Open <strong>Pisces/NetTutor Online Tutoring</strong> on the
              Canvas left-hand navigation
            </li>
            <li>
              Open NetTutor to see all subjects tutored, then click on your
              subject (e.g., Math Statistics) to see the drop-in schedule in the
              upper right-hand corner
            </li>
            <li>
              During drop-in hours: meet with a tutor live, schedule an
              appointment, OR drop off a question for feedback
            </li>
            <li>
              When meeting with a live tutor, follow their instructions to
              receive tutoring through the Drawing Canvas and/or video chat
            </li>
            <li>
              For writing help, use the{" "}
              <strong>Writing and Paper Center</strong> option at the bottom of
              the Subjects page to drop off papers for feedback
            </li>
          </ol>
          <p style={{ marginTop: "16px" }}>
            <a
              href="https://youtu.be/VlrPU34FzuY"
              target="_blank"
              rel="noopener noreferrer"
              className="info-section__cta"
            >
              <span>Watch NetTutor Tutorial (YouTube)</span>
            </a>
          </p>
        </InfoSection>

        <TutoringRules />

        <div>
          {lastUpdated && (
            <p className="last-updated">
              Last updated:{" "}
              {new Date(lastUpdated + "T00:00:00").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <FilterBar
            selectedCourse={courseFilter}
            selectedDay={dayFilter}
            subjects={sortedFields}
            onCourseChange={handleCourseChange}
            onDayChange={handleDayChange}
          />

          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading tutor schedules...</p>
            </div>
          ) : (
            <section className={filtering ? "schedule filtering" : "schedule"}>
              {sortedFieldsToShow.length > 0 ? (
                (() => {
                  // Render all sections and check if any tutors match the day filter
                  const sections = sortedFieldsToShow.map((field) => {
                    // Filter tutors by day for this field
                    const tutorsInField = groupedByField[field];
                    const filteredTutors = dayFilter
                      ? tutorsInField.filter((tutor) =>
                          tutor.schedule.some((slot) => slot.day === dayFilter),
                        )
                      : tutorsInField;

                    // Only render if there are tutors in this field that tutor on the day filter
                    if (filteredTutors.length === 0) {
                      return null;
                    }

                    return (
                      <SubjectSection
                        key={field}
                        fieldName={field}
                        tutors={filteredTutors}
                      />
                    );
                  });

                  // Check if any sections have tutors
                  const hasTutors = sections.some(
                    (section) => section !== null,
                  );

                  return hasTutors ? (
                    sections
                  ) : (
                    <div className="no-results">
                      <p>
                        No tutors found for {courseFilter || "these filters"}{" "}
                        course
                        {dayFilter && ` on ${dayFilter}`}. Please try different
                        day!
                      </p>
                    </div>
                  );
                })() // This is an arrow function, therefore we need to call it by adding () at the end
              ) : (
                <div className="no-results">
                  <p>Sorry, no tutors found for these filters</p>
                </div>
              )}
            </section>
          )}
        </div>
        <section className="become-tutor-banner">
          <h2>Become an EVC Tutor</h2>
          <p>
            Now hiring student tutors! Earn <strong>$18.00/hour</strong> while
            helping fellow students.
          </p>
          <Link to="/become-a-tutor" className="become-tutor-banner__link">
            Learn More & Apply →
          </Link>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
