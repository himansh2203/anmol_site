import "../css/whatsappBtn.css";
const WhatsAppButton = () => {
  const phoneNumber = "918076250586"; // Replace with your actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
