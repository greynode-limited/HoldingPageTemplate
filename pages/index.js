import Head from 'next/head'

export default function HoldingPageTemplate() {
    return (
        <>
            <Head>
                <title>Greynode Holding Page</title>
            </Head>
            <main>
                <section className="imageContainer">
                    <div className="image">
                        <svg className="logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 82" width="250px" height="250px">
                            <path className="cls-1" d="M1.86,34.29c0-18.12,13.91-32.72,33.5-32.72A34.25,34.25,0,0,1,57.89,9.7L49.37,19a19.3,19.3,0,0,0-13.72-5c-11.07,0-19.49,9-19.49,20.28s8.23,20.38,19.49,20.38a20.1,20.1,0,0,0,14.6-6.37V39H39.47V29H62.79V53.69C57.21,62,46.92,67.11,35.46,67.11,15.87,67.11,1.86,52.51,1.86,34.29Z" fill="#fff"/>
                            <path className="cls-1" d="M73.49,17.05H86.42v9.4c1.37-4,6.37-10.38,17.14-10.38v14.3c-11.36,0-17,5.19-17,16.85V66H73.49Z" fill="#fff"/>
                            <path className="cls-1" d="M107.35,41.54a25.15,25.15,0,0,1,25.37-25.47c13.32,0,23.81,11.36,23.81,25.27a42.54,42.54,0,0,1-.3,4.7H120.67c1.57,6.76,7.15,10,13.62,10a24.28,24.28,0,0,0,13.22-3.82l4.9,9.4A32.93,32.93,0,0,1,134.19,67C119.89,67,107.35,57.7,107.35,41.54Zm36.83-4.21A11.83,11.83,0,0,0,132.33,27c-5.68,0-10.58,4.12-11.85,10.29Z" fill="#fff"/>
                            <path className="cls-1" d="M165.82,68.48c6.08,0,8.33-2.06,10.09-5.88L177,60.45l-20.47-43.4h13.32L179.73,40C181.2,43.4,183,48.3,183,48.3s2.05-5.78,3.13-8.62L195,17.05h13.12L186.39,67.4c-5.28,12-14.49,13-20.57,13Z" fill="#fff"/>
                        </svg>
                    </div>
                    <div className="mainText">
                        <h4>Website Coming Soon</h4>
                    </div>
                </section>
                <section className="form">
                   <form>
                       <div className="fullName">
                            <input type="text" name="fullname" placeholder="Full Name"></input>
                       </div>
                       <div className="email">
                            <input type="email" name="email" placeholder="Email Address"></input>
                       </div>
                       <div className="btn">
                            <input type="submit" value="SUBSCRIBE TO UPDATES"></input>
                       </div>
                   </form>
                </section>
            </main>
            <footer className="footer">
                <div>
                    <p>© 2021 GREYNODE LIMITED ALL RIGHTS RESERVED</p>
                </div>
            </footer>
        </>
    )
}

