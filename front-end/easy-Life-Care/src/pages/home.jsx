import Slideshow from "../components/imageSlider.jsx";
import ProductList from "../components/productList.jsx";
import Bottom from "../components/bottom.jsx";
import ReviewSlider from "../components/customerReview.jsx";
import Foot from "../components/foot.jsx";

function Home() {
  return (
    <>
      <Slideshow />
      <div className="elc1">
        <div className="elc1-1">Authentic Ayurveda: Easy Life Care</div>
        <div className="elc1-2">
          Explore our collection of top selling Ayurvedic products and
          alternative medicines in India.
        </div>
      </div>
      <ProductList />
      <br />
      <div className="elc2">
        We manufacture, curate, and make available online, authentic ayurvedic
        products in India made from indigenously sourced herbs from forests and
        mountains across India renowned for their healing vegetations rich in
        medicinal properties.
      </div>
      <ReviewSlider />
      <Bottom />
      <Foot />
    </>
  );
}

export default Home;
