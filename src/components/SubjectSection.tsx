import type { Tutor } from "../types";
import { filterSubjectsByField } from "../utils/subjectMapping";
import TutorCard from "./TutorCard";

interface Props {
  fieldName: string;
  tutors: Tutor[];
}

const SubjectSection = ({ fieldName, tutors }: Props) => {
  return (
    <section className="subject">
      <div className="subject__title">{fieldName}</div>
      <div className="subject__cards">
        {tutors.map((tutor) => {
          // Only show tutors have subjects in current field
          const displaySubjects = filterSubjectsByField(
            tutor.subjects,
            fieldName,
          );

          return (
            <TutorCard
              key={tutor.name}
              tutor={tutor}
              displaySubjects={displaySubjects}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SubjectSection;