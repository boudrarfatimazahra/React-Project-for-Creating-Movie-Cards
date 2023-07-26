import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import TrailerCard from "./TrailerCard";
const Movies = () => {
  const location = useLocation();
  const item = location.state;
  console.log(location);
  const navigate = useNavigate();

  return (
    <>
      <div className="cardMovie">
        <button onClick={() => navigate(-1)}>
          Go To Back
          <IoChevronBackCircleOutline />
        </button>
        <div className="imageMovie">
          <img src={item.imageText} alt="Anime" />
        </div>
        <div className="infoCard">
          <div className="info">
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
          <div className="date">
            <p>PREMIERE DATE {item.date}</p>
          </div>
          <div className="button">
            <div className="buttonDescr buttColor1">Animation</div>
            <div className="buttonDescr buttColor2">Action</div>
            <div className="buttonDescr buttColor3">Drama</div>
          </div>
          <div className="actors">
            <h1>Actors</h1>
            <p>{item.actors.name1}</p>
            <p>{item.actors.name2}</p>
            <p>{item.actors.name3}</p>
          </div>
          <div style={{ width: "70%" }}>
            <TrailerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
