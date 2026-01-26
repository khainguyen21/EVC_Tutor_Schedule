import { useEffect, useState } from "react";
import { type Tutor, type Day } from "./types";
import FilterBar from "./components/FilterBar";
import SubjectSection from "./components/SubjectSection";
import { getUniqueFields } from "./utils/subjectMapping";

const App = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [courseFilter, setCourseFilter] = useState("");
  const [dayFilter, setDayFilter] = useState<Day>("");

  // Fetch data on component mount
  useEffect(() => {
    fetch("/data/schedule.json")
      .then((response) => response.json())
      .then((data) => setTutors(data.tutors))
      .catch((error) => console.error(error));
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

  // Functions to handle state updates
  const handleCourseChange = (course: string) => {
    setCourseFilter(course);
  };
  const handleDayChange = (day: Day) => {
    setDayFilter(day);
  };

  // console.log(fieldsToShow)
  return (
    <div className="container">
      <div>
        <FilterBar
          selectedCourse={courseFilter}
          selectedDay={dayFilter}
          onCourseChange={handleCourseChange}
          onDayChange={handleDayChange}
        />

        <main className="schedule">
          {fieldsToShow.length > 0 ? (
            (() => {
              // Render all sections and check if any tutors match the day filter
              const sections = fieldsToShow.map((field) => {
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
              const hasTutors = sections.some((section) => section !== null);

              return hasTutors ? (
                sections
              ) : (
                <div className="no-results">
                  <p>
                    No tutors found for {courseFilter || "these filters"}
                    {dayFilter && ` on ${dayFilter}`}. Try different filters!
                  </p>
                </div>
              );
            })() // This is an arrow function, therefore we need to call it by adding () at the end
          ) : (
            <div className="no-results">
              <p>Sorry, no tutors found for these filters</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;