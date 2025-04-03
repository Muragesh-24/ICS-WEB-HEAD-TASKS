import { Link } from "react-router-dom";
import "../index.css";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.code}`} className="course-card">
     
      <h2>{course.code}</h2>
    </Link>
  );
};

export default CourseCard;
