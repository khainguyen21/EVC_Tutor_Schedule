import type { Day } from "../types";

interface Props {
  selectedCourse: string;
  selectedDay: Day;
  subjects: string[];
  onCourseChange: (course: string) => void;
  onDayChange: (day: Day) => void;
}

const FilterBar = ({
  selectedCourse,
  selectedDay,
  subjects,
  onCourseChange,
  onDayChange,
}: Props) => {
  return (
    <section className="filter">
      <div className="filter__group">
        <label className="filter__label" htmlFor="course-filter">
          Need help? Which subject?
        </label>
        <select
          id="course-filter"
          className="filter__select"
          value={selectedCourse}
          onChange={(e) => onCourseChange(e.target.value)}
        >
          <option value="">All Courses</option>
          {subjects.map((subject) => {
            return <option value={subject}>{subject}</option>;
          })}
        </select>
      </div>

      <div className="filter__group">
        <label className="filter__label">When are you coming to campus?</label>
        <div className="day-pills">
          {(
            [
              "",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ] as const
          ).map((day) => (
            <button
              key={day}
              className={`day-pill ${selectedDay === day ? "day-pill--active" : ""}`}
              onClick={() => onDayChange(day as Day)}
              aria-pressed={selectedDay === day}
            >
              {day === "" ? "Any Day" : day.slice(0, day.length)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
