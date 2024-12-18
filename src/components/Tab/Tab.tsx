import "bootstrap/dist/css/bootstrap.css";
import "./Tab.css";

function Tab({ text, img, textRight }: any) {
  return (
    <div className={textRight === "true" ? "main right p-4" : "main left p-4"}>
      <div className="row row-cols-auto justify-content-center">
        <div className="col d-flex align-items-center justify-content-center tabcol">
          {textRight === "true" ? (
            <div>
              <img
                src={img}
                alt=""
                className="img-fluid rounded-4 border border-5"
              />
            </div>
          ) : (
            <p className="tabtext">{text}</p>
          )}
        </div>
        <div className="col d-flex align-items-center justify-content-center tabcol">
          {textRight === "true" ? (
            <p className="tabtext">{text}</p>
          ) : (
            <div>
              <img
                src={img}
                alt=""
                className="img-fluid rounded-4 border border-5"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tab;