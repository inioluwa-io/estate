import { Grid } from "@mui/material";
import Carousel from "./components/carousel";
import logo from "./logo.svg";
import "./App.scss";
import InitialMap from "./components/map";

function App() {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lakowe heights</h1>
        <p className ="font-2x">
          Lakowe Lakes Golf & Country Estate, Lekki - Epe Expy, Lagos, Nigeria
        </p>
      </header>
      <section className="first-section">
        <Grid container spacing={2}>
          <Grid item lg={8} xs={12}>
            <main>
              <Carousel />
              <div className="grey">
                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    Property Type: Apartment
                  </Grid>
                  <Grid item md={6} xs={12}>
                    Property Type: Apartment
                  </Grid>
                  <Grid item md={6} xs={12}>
                    Property Type: Apartment
                  </Grid>
                  <Grid item md={6} xs={12}>
                    Property Type: Apartment
                  </Grid>
                </Grid>
              </div>
              <div className="grey">
                <h4 className="title">FEATURES</h4>
                <Grid container spacing={2}>
                  <Grid item md={4} xs={12}>
                    24/7 Security
                  </Grid>
                  <Grid item md={4} xs={12}>
                    24/7 Security
                  </Grid>
                  <Grid item md={4} xs={12}>
                    24/7 Security
                  </Grid>
                  <Grid item md={4} xs={12}>
                    24/7 Security
                  </Grid>
                </Grid>
              </div>
              <div className="grey">
                <h4 className="title">DETAILS</h4>
                <p>
                  Elevate your lifestyle with this unique product within the
                  Lakowe Lakes Golf and Country Estate. A luxurious block of
                  flats right at the edge of the estate and the budding district
                  of Lagos New Town
                </p>

                <section className="form-unit">
                  <h3>Reserve A Unit</h3>
                  <form>
                    <div className="row">
                      <div className="form-wrapper flex-column">
                        <div className="select-box">
                          <div className="custom-arrow"></div>
                          <select htmlFor="title">
                            <option>Mr.</option>
                          </select>
                        </div>
                        <span className="label" id="first">
                          Title
                        </span>
                      </div>
                      <div className="form-wrapper flex-column">
                        <input htmlFor="first" />
                        <span className="label" id="first">
                          First
                        </span>
                      </div>
                      <div className="form-wrapper flex-column">
                        <input htmlFor="last" />
                        <span className="label" id="last">
                          Last
                        </span>
                      </div>
                    </div>
                    <div className="column">
                      <label className="label" id="email">
                        Email
                      </label>
                      <div className="form-wrapper flex-column">
                        <input htmlFor="email" type="email" />
                      </div>
                    </div>
                    <div className="column">
                      <label className="label" id="phone">
                        Phone
                      </label>
                      <div className="form-wrapper flex-column">
                        <input htmlFor="phone" type="text" />
                      </div>
                    </div>
                    <div className="column">
                      <label className="label" id="phone">
                        I am interested in
                      </label>
                      <div className="form-wrapper flex-column">
                        <div className="select-box">
                          <div className="custom-arrow"></div>
                          <select htmlFor="title">
                            <option>Studio bedroom</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <label className="label" id="phone">
                        Where do you live?
                      </label>
                      <div className="form-wrapper flex-column">
                        <div className="select-box">
                          <div className="custom-arrow"></div>
                          <select htmlFor="title">
                            <option>Studio bedroom</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <label className="label" id="phone">
                        Have you previously bought a Lakowe home?
                      </label>
                      <Grid spacing={2} container>
                        <Grid item xs={6}>
                          <input type="radio" name="prev-home" value="no" />
                          Yes
                        </Grid>
                        <Grid item xs={6}>
                          <input type="radio" name="prev-home" value="no" />
                          No
                        </Grid>
                      </Grid>
                    </div>
                    <div className="flex text-align justify-center">
                      <button className="btn-submit">Reserve</button>
                    </div>
                  </form>
                </section>
                <ul className="socials">
                  <li>
                    <a href="f" className="link-btn blue">
                      Share on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="f" className="link-btn light-blue">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="f" className="link-btn green">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grey">
                <h4 className="title">DOWNLOAD FURTHER INFORMATION</h4>

                <a href="">Bronchure</a>
              </div>
            </main>
          </Grid>
          <Grid item lg={4} xs={12}>
            <aside>
              <ul>
                <li>
                  <div className="label">From #53,892,395</div>
                </li>
                <li>
                  <a href="#map">See Map</a>
                </li>
                <li>
                  <a href="#map">Add to Compare</a>
                </li>
              </ul>
            </aside>
          </Grid>
        </Grid>
      </section>

      <section id="map" className="margin-top-md">
        <InitialMap location={location} zoomLevel={17} />
      </section>
    </div>
  );
}

export default App;
