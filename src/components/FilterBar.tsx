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
          Filter by Course
        </label>
        <select
          id="course-filter"
          className="filter__select"
          value={selectedCourse}
          onChange={(e) => onCourseChange(e.target.value)}
        >
          <option value="">All Courses</option>
          {subjects.map((subject) => {
            return <option value={subject}>{subject}</option> 
          })}
        </select>
      </div>

      <div className="filter__group">
        <label htmlFor="day-filter" className="filter__label">
          Filter by Day
        </label>
        <select
          name="filter__select"
          id="day-filter"
          className="filter__select"
          value={selectedDay}
          onChange={(e) => onDayChange(e.target.value as Day)}
        >
          <option value="">All Days</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </div>
    </section>
  );
};

export default FilterBar;