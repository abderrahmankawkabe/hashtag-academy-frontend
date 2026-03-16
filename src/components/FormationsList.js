import { Link } from "react-router-dom";
import formationsData from "./formationsData";
import "./FormationsList.css"


function FormationsList() {

  const formations = Object.keys(formationsData);

  return (
    <div className="container">

      <div className="formations-grid">

        {formations.map((key) => {

          const formation = formationsData[key];

          return (
            <Link key={key} to={`/formations/${key}`} className="my-formation-card" >

              <img src={formation.image} alt={formation.title} />

              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>

              <p>{formation.definition}</p>

            </Link>
          );

        })}

      </div>
    </div>
  );
}

export default FormationsList;