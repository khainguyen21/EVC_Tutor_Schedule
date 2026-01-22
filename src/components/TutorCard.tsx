import type { Tutor } from "../types";
import LocationBadge from "./LocationBadge";

interface Props {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: Props) => {
  const cardClass = `tutor-card ${tutor.type ? `tutor-card--${tutor.type}` : ""}`;

  return (
    <div className={cardClass}>
      <div className="tutor-card__name">{tutor.name}</div>
      {tutor.role && <div className="tutor-card__role">{tutor.role}</div>}

      <div className="tutor-card__subjects">{tutor.subjects.join(", ")}</div>

      <div className="schedule-list">
        {tutor.schedule.map((slot, index) => {
          return (
            <div key={index} className="schedule-item">
              <span className="schedule-item__day">{slot.day}</span>
              <span className="schedule-item__time">
                {slot.startTime} - {slot.endTime}
              </span>
              <LocationBadge location={slot.location}></LocationBadge>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TutorCard;
