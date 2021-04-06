export default function HoldingPageTemplate() {

  let date = new Date();
  let currentYear = date.getUTCFullYear();
  return (
    <>
      <main>
        <section className="logoContainer">
          <div className="imageContainer">
            <svg
              id="Layer_1"
              className="logo"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 106 118"
            >
              <path
                className="cls-1"
                d="M66.3,29.39c-9.14-.48-18.59,9.09-17.85,18.41a2.86,2.86,0,0,0,3.08,2.62c6.65-.57,15-12.05,16.54-18.68A1.91,1.91,0,0,0,66.3,29.39Z"
              />
              <path
                className="cls-1"
                d="M36.87,82.72a4.38,4.38,0,0,0,0,3.82c.4.8,1,1.38,1.79,1.15,5.16-.13,9.78-8.42,10.88-11.89C43.76,76.16,39.18,77.82,36.87,82.72Z"
              />
              <path
                className="cls-1"
                d="M76.79,4.77C53-5.67,23.07,10.15,9.93,40.1s-4.51,62.69,19.28,73.13,53.72-5.38,66.86-35.33S100.58,15.21,76.79,4.77ZM73.7,77.64a4.9,4.9,0,0,1,1.94,4.6c-1,6.54-13-5.24-17.41-5.59-16.79,35.62-40.32,10.9-21.3-4.24,3.32-2.85,11.19-4.24,16-4.55,2.44-3,3.16-7.83,4.78-11.27a1.15,1.15,0,0,0-.54-.69c-19.13,9.47-19.37-16-8.87-25.54,5.41-5.66,14.91-9.73,22.21-7.16a8,8,0,0,1,5.2,6.46c1.36,9.26-3.91,9.2-7.89,19.06-3,7.63-4.11,13-7.64,21.07C63.75,70.34,70.39,75.12,73.7,77.64Z"
              />
            </svg>
          </div>
          <div className="title">
            <h4>Website Coming Soon</h4>
          </div>
        </section>
        <section className="form">
          <form>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
            ></input>
            <input type="submit" value="SUBSCRIBE TO UPDATES"></input>
          </form>
        </section>
      </main>
      <footer className="footer">
        <div>
          <p>© { currentYear } GREYNODE LIMITED ~ ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
}
