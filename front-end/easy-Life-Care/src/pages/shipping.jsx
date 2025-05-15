import "../css/shipping.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Bottom from "../components/bottom";
import Foot from "../components/foot";

function Shipping() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/shipping") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    };
  }, [location.pathname]);

  return (
    <div className="shipping-container">
      <h1 className="shipping-header">Shipping Policy</h1>
      <div className="shipping-content">
        <p>
          At Easy Life Care, we understand the importance of timely delivery of
          your orders. That's why we work with reliable shipping carriers to get
          your products to you as quickly and safely as possible. Below you'll
          find everything you need to know about our shipping policies.
        </p>

        <h2>Order Processing Time</h2>
        <p>
          We strive to process all orders within 2 business days from the time
          they are placed. During high volume periods, such as holidays,
          processing time may be slightly longer. If there is any delay in
          processing your order, we will notify you via email.
        </p>

        <h2>Delivery Time</h2>
        <p>
          Usually, we ship your order from 48 hours to 5 working days. The
          delivery time for your order will depend on the shipping method you
          selected and the destination of your order. We partner with reputable
          shipping carriers to ensure that your order arrives in a timely
          manner. Please note that delivery times may be longer during peak
          shipping seasons or due to weather conditions.
        </p>

        <h2>Order Changes and Cancellations</h2>
        <p>
          If you need to make changes or cancel your order, please contact us as
          soon as possible. We will do our best to accommodate your request, but
          please note that we may not be able to make changes or cancel your
          order once it has been processed.
        </p>

        <h2>Shipping Address</h2>
        <p>
          Please ensure that your shipping address is correct and complete when
          placing your order. We are not responsible for orders that are shipped
          to an incorrect or incomplete address.
        </p>

        <h2>Lost or Damaged Packages</h2>
        <p>
          In the event that your package is lost or damaged during shipping,
          please contact us as soon as possible. We will work with the shipping
          carrier to resolve the issue and get your order to you as quickly as
          possible.
        </p>

        <p>
          If you have any questions about our shipping policies, please don't
          hesitate to contact us. We're here to help!
        </p>
        <Bottom />
        <Foot />
      </div>
    </div>
  );
}

export default Shipping;
