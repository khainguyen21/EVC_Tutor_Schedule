import React, { useEffect, useState } from "react";
import { type Tutor, type Day } from "./types";

const App = () => {
  // State for the tutor data
  // Without the [], tutors starts as undefined,
  //  which will cause .filter() to crash.
  // By starting with an empty array [],
  //  your code works even before the data loads.
  const [tutors, setTutors] = useState<Tutor[]>([]);

  // State for the filters
  const [courseFilter, setCourseFilter] = useState("");
  const [dayFilter, setDayFilter] = useState<Day>("");

  // Fetch data on component mount
  useEffect(() => {
    fetch("/data/schedule.json")
      .then((response) => response.json())
      .then((data) => setTutors(data.tutors))
      .catch((error) => console.error(error));
  }, []);

  // Filter the tutors based on the selected filters (course and day)
  const filteredTutors = tutors?.filter((tutor) => {
    const matchCourse = courseFilter
      ? tutor.subjects.some((s) =>
          s.toLowerCase().includes(courseFilter.toLowerCase()),
        )
      : true;
    const matchDay = dayFilter
      ? tutor.schedule.some((slot) => slot.day === dayFilter)
      : true;
    return matchCourse && matchDay;
  });

  return <div>App</div>;
};

export default App;
