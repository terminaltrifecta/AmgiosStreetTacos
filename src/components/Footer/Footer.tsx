import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="background">
      <div className="p-4 container text-center mainfooter">
        <div className="row row-cols-auto w-100">
          <div className="col footercol">
            <h4>Column</h4>
            <a href="">
              <p>link</p>
            </a>
            <a href="">
              <p>link</p>
            </a>
            <a href="">
              <p>link</p>
            </a>
          </div>

          <div className="col footercol">
            <h4>Column</h4>
            <a href="">
              <p>link</p>
            </a>
            <a href="">
              <p>link</p>
            </a>
            <a href="">
              <p>link</p>
            </a>
          </div>

          <div className="col footercol">
            <h4>Column</h4>
            <a href="">
              <p>link</p>
            </a>
            <a href="">
              <p>link</p>
            </a>
            <a href="">
              <p>link</p>
            </a>
          </div>

          <div className="col footercol">
            <h4>Social Media</h4>
            <div className="socials-row">
              <a
                href="https://facebook.com/"
                style={{ color: "rgb(20, 10, 2)" }}
              >
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
              <a
                href="https://instagram.com/"
                style={{ color: "rgb(20, 10, 2)" }}
              >
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="finePrint row">
          <p>
            @{new Date().getFullYear()} Amigos Street Tacos. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
    // Footer ^
  );
}

export default Footer;
