/**
 * Landing
 *
 * Hero section at the top of the home page. Displays the organization name,
 * tagline, and a layered decorative SVG graphic over the UNC skyline background.
 */

export default function Landing() {
  return (
    <div id="landing">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">App Team Carolina</h1>
          <h2 className="display-6">Let's create something amazing.</h2>
        </div>

        {/* Layered SVG graphic overlaid on the background image */}
        <div className="layered-graphic">
          <img className="layer image1" src="/assets/layer1.svg" alt="First Layer" />
          <img className="layer image2" src="/assets/layer2.svg" alt="Second Layer" />
          <img className="layer image3" src="/assets/layer3.svg" alt="Third Layer" />
          <img className="layer image4" src="/assets/layer4.svg" alt="Fourth Layer" />
        </div>
      </div>
    </div>
  )
}
