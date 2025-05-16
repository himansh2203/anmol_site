import "../css/about.css"; // Import the CSS filert useLocation from react-router-dom
import Bottom from "../components/bottom"; // Import the Bottom component
import Foot from "../components/foot"; // Import the Foot component

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          <strong>Easy Life Care</strong> is dedicated to offering Ayurvedic
          solutions addressing a spectrum of health concerns prevalent in
          contemporary lifestyles. The Company is devoted to advocating holistic
          well-being by leveraging natural remedies rooted in the ancient
          science of Ayurveda. The solutions provided are exclusively derived
          from Charak Samhita, an ancient Ayurvedic text renowned for offering
          comprehensive insights and remedies for various health and lifestyle
          challenges. Through its commitment to Ayurvedic principles, it aims to
          contribute to the overall health and betterment of individuals,
          emphasizing the efficacy of traditional wisdom in promoting a balanced
          and healthier lifestyle.
        </p>

        <h2>Our Vision</h2>
        <p>
          “The vision of the Company is to be a global leader in Ayurveda,
          bridging traditional practices with contemporary health needs. We aim
          to set new standards in personalized wellness, enhancing life quality
          worldwide through our unique, effective solutions.”
        </p>

        <h2>Our History</h2>
        <p>
          Established on 20th June 2019, Easy Life Care Shopping Ltd is a
          publicly incorporated, non-government company based in Delhi with
          offices across major cities in India Our founder,{" "}
          <strong> Mr. Anmol Kumar</strong> , had a vision to create a company
          that would provide authentic Ayurvedic products and alternative
          medicine to people all over India . His passion for Ayurveda and its
          ability to heal the mind, body, and spirit led him to establish Easy
          Life Care Shopping Limited.
        </p>

        <h2>Our Mission</h2>
        <p>
          <strong>Easy Life Care</strong>'s mission is to revolutionize wellness
          with personalized Ayurvedic solutions, merging traditional wisdom and
          modern lifestyles. We focus on niche therapeutic areas, delivering
          premium quality and exceptional service, striving to become a global
          synonym for innovative, effective health products.
        </p>

        <h2>
          Ayurveda and its Holistic Approach to Physical and Mental Health
        </h2>
        <p>
          Ayurveda is an ancient system of medicine that originated in India
          over 5,000 years ago. It is a holistic system of medicine that aims to
          promote health and wellbeing by creating balance and harmony in the
          mind, body, and spirit. Ayurveda recognizes that every individual is
          unique and that their body type, or dosha, determines their physical
          and mental characteristics.
        </p>
        <p>
          Ayurveda, literally meaning science of life, is not just any other
          system of medicine. This ancient system is based on prevention rather
          than just cure. Ayurveda embraces the concept of you and nature - the
          whole, rather than the parts. Ayurveda is primarily based on the
          concept of universal interconnectedness (prakriti) and life forces
          (doshas).
        </p>
        <p>
          To strive towards and achieve balance, with the external environment
          and of mind, body and spirit is the core of the Ayurvedic system of
          alternative medicine and wellbeing.
        </p>
        <p>
          This balance is achieved not just by herbal medicine which Ayurveda
          prescribes, but combined with healthy lifestyle choices like balanced
          diet, regular exercise, peaceful life and harmony with nature.
        </p>
        <p>
          According to the teachings of Ayurveda, Vata, Kapha and Pitta
          (tridoshas) constitute a person’s physical, mental and spiritual
          countenance.
        </p>
        <p>
          Each dosha dictates a certain aspect of your body, be it emotions,
          nutrition or the lifestyle choices. Any imbalance of these doshas may
          result in one or other kind of illness thus imbalancing the harmony.
        </p>
        <p>
          Ayurveda strives to redress this balance through natural herbs
          concocted as medicines, stress management through physical activities,
          and by suggesting healthy food choices.
        </p>
        <p>
          Ayurveda is an important aspect of the alternative medicine system in
          India. In fact, with challenges that come with our modern lifestyle
          and sedentary urban life - often stressful, Ayurveda is fast becoming
          one of the major systems of medicine and healthcare in India.
        </p>

        <h2>Authentic Ayurvedic Products</h2>
        <p>
          <strong>Easy Life Care</strong> Group offers a wide range of Ayurvedic
          products for various health conditions, including piles, diabetes,
          sexual health, stamina booster, immunity booster, infertility, joint
          pain, and hair care. All our formulations are based on the teachings
          of Ayurveda and are made from indigenously sourced herbs from forests
          and mountains in India, known for their natural diversity and
          medicinal properties.
        </p>
        <p>
          Our products are rigorously tested and meet GMB and ISO standards, as
          well as the Ministry of Ayush Government of India's approval. We
          believe that our customers deserve the best, and that's why we use
          only the highest quality ingredients in our products.
        </p>

        <h2>Free Home Delivery and Payment Options</h2>
        <p>
          At Easy Life Care Group, we understand the importance of convenience.
          That's why we offer free home delivery across all locations in India
          within 48 hours to 5 days max. We also offer cash on delivery options
          and a return and refund policy.
        </p>
        <p>
          Thank you for choosing <strong>Easy Life Care</strong> Group as your
          partner in wellness. We are committed to providing you with the
          highest quality, authentic Ayurvedic products and alternative
          medicine. Our passion for Ayurveda and its ability to heal the mind,
          body, and spirit is what drives us, and we look forward to serving
          you.
        </p>
      </div>
      <Bottom />
      <Foot />
    </div>
  );
}

export default AboutUs;
