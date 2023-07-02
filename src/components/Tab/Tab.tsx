import "bootstrap/dist/css/bootstrap.css";
import './Tab.css';

interface Props {
  text: string;
  img: string;
  textRight: boolean;
}

function Tab({ text, img, textRight }: any) {
  return (
    <div className={textRight === "true" ? "right" : "left"}>
      <div className="row row-cols-2 justify-content-md-cente w-100">
        <div className="col d-flex align-items-center justify-content-center">
          {textRight === "true" ? (
            <img src={img} alt="" className="img-fluid" />
          ) : (
            <p>{text}</p>
          )}
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          {textRight === "true" ? (
            <p>{text}</p>
          ) : (
            <img src={img} alt="" className="img-fluid" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab;