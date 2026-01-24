import type { Day } from "../types";

interface Props {
  selectedCourse: string;
  selectedDay: Day;
  onCourseChange: (course: string) => void;
  onDayChange: (day: Day) => void;
}

const FilterBar = ({
  selectedCourse,
  selectedDay,
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
          <option value="Accounting">Accounting</option>
          <option value="Math">Math</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Computer Science">Computer Science</option>
          <option value="English">English</option>
          <option value="Physic">Physic</option>
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
