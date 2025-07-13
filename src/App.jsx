import { motion } from "framer-motion";
import React, { useState } from "react"; // Import useState
import o2ParkBackground from './assets/o2-park-background.jpg'; // Import the background image

export default function App() {
  // Magnifier state and handlers
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMagnifierActive, setIsMagnifierActive] = useState(false);
  const [revealedContent, setRevealedContent] = useState("");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnterMain = () => setIsMagnifierActive(true);
  const handleMouseLeaveMain = () => {
    setIsMagnifierActive(false);
    setPosition({ x: -100, y: -100 });
    setRevealedContent(""); // Clear revealed content
  };

  // Function to activate magnifier with content and redirect
  const activateMagnifier = (content) => {
    setRevealedContent(content);
    setIsMagnifierActive(true);
    if (content.startsWith("Book Session for")) {
      // Redirect to Calendly link after a short delay to show the magnifier
      setTimeout(() => {
        window.location.href = "https://calendly.com/adhirajmali17/o2-exploration-call";
      }, 500); // 500ms delay to allow magnifier to display
    }
  };

  // Function to deactivate magnifier
  const deactivateMagnifier = () => {
    setRevealedContent("");
  };

  const o2Verticals = [
    {
      name: "O2 Purodhyãan",
      content: [
        "Operations: Mass Bamboo Plantation",
        "70%-90% Man-Made Forest",
        "70-30 Sutra",
        "Farming: Bagayat & Contract Farming",
        "Vegetables, Fruits, Herbs & Medicinal Plants",
        "Oxygen Generating Plants",
        "Community Connect: Kisan Pathshala",
        "घर से अंतर्राष्ट्रीय स्तर तक",
      ],
    },
    {
      name: "O2 Self & Help",
      content: [
        "Our projects: Green cover developed in hilly terrain in Anjad, MP",
        "Green cover developed in hilly terrain of Borlai, MP",
        "Adopted District Daang, Gujarat",
        "100 FPOs created in Gujarat along with State Govt",
        "Sustainability of Tribes through Project on IFR / CFR, Distt Nandurbar, MH",
        "Free Education on Agriculture: Kisan Pathshala",
      ],
    },
    {
      name: "O2 Udhyãm",
      content: [
        "Next Generation Green Energy",
        "Consultancy / M&O for various CBG Plants",
        "Supply of Raw Material to various Industries",
        "Value addition in the bi-products",
        "Unique Product Lines",
        "Raw Material Source projects: Terragrn Private Limited, South Africa (Bamboo Chips)",
        "JMG Corporation, Raw material supply for CBG plants",
        "M&O for CBG Plant by HPCL at Pathmeda (in process)",
        "Raw material supply to Reliance for their upcoming CBG plants in Gujarat State",
        "Value addition of Liquid Fertilisers, Surat CBG Plant",
      ],
    },
    {
      name: "O2 Hãat",
      content: [
        "Our E-Commerce Platform",
        "Range of Unique Products for domestic & International market",
        "Traceability through Block Chain Technology",
        "Product Lines & Services",
      ],
    },
    {
      name: "(Advekam Bodhi Chetanam) ABC Retreãt Agro / Eco Tourism",
      content: [
        "Resort",
        "Bamboo Cottages",
        "Mud / Tree Houses",
        "Restaurant",
        "Ayurveda Centre",
        "Spiritual Park",
        "Farm to Plate",
        "Krishi Teertha",
        "Entertainment Zone",
        "Adventure Zone",
        "Game Zone",
        "Suspense Zone",
        "Retail Zone",
        "Gurukulum",
        "Prani Sanrakshan",
        "Event Management",
      ],
    },
    {
      name: "O2 Mantrãa",
      content: [
        "Expert Consultancy with end to end Solutions in Farming",
        "Residue Free Farming Concept",
        "70 : 30 Sutra",
        "Smart Farming",
        "Soil Investigation",
        "Banana & Bamboo Industry (Farmers & Exporter)",
        "Carbon, Water & Soil Credits offset",
        "S2E2",
      ],
    },
    {
      name: "O2 Dãan",
      content: [
        "Community Support Initiatives",
        "Donation Programs for Sustainable Agriculture",
        "Support for Tribal Education and Livelihood",
        "Partnerships for Green Initiatives",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${o2ParkBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterMain}
      onMouseLeave={handleMouseLeaveMain}
      className="cursor-none" // Hide default cursor
    >
      {/* Header with O2 Title and Background Image */}
      <header className="bg-cover bg-center h-64 flex items-center justify-center relative text-center">
        <div className="absolute inset-0 bg-brown-900 bg-opacity-60"></div>
        <div className="absolute inset-0 backdrop-blur-md bg-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-white text-8xl font-extrabold drop-shadow-2xl"
        >
          <span className="font-bold">O2</span> PARK
          <p className="font-bold">Sustainable Living</p>
        </motion.div>
      </header>

      {/* Card Section */}
      <div style={container}>
        {o2Verticals.map((vertical, i) => (
          <Card
            i={i}
            name={vertical.name}
            content={vertical.content}
            key={vertical.name}
            activateMagnifier={activateMagnifier}
            deactivateMagnifier={deactivateMagnifier}
          />
        ))}
      </div>

      {/* Magnifier Component */}
      {isMagnifierActive && (
        <motion.div
          className="absolute w-40 h-40 rounded-full overflow-hidden border-4 border-lime-300 shadow-2xl pointer-events-auto flex items-center justify-center text-center cursor-pointer z-100"
          style={{
            top: position.y - 80,
            left: position.x - 80,
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px) saturate(150%) brightness(120%)",
            WebkitBackdropFilter: "blur(8px) saturate(150%) brightness(120%)",
          }}
          animate={{
            top: position.y - 80,
            left: position.x - 80,
            scale: isMagnifierActive ? 1 : 0,
          }}
          initial={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {revealedContent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-xl font-semibold px-4"
            >
              {revealedContent}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Footer with Contact Info */}
      <footer style={{ textAlign: "center", padding: "20px", background: "rgba(0, 0, 0, 0.6)", color: "white", position: "relative", bottom: 0, width: "100%" }}>
        <p>O2 Park & Ventures Private Limited</p>
        <p>Talun, Barwani</p>
        <p>Madhya Pradesh 451551</p>
        <p>India</p>
        <p>Contact Details</p>
        <p>9081039222</p>
        <p>8827738222</p>
      </footer>
    </div>
  );
}

function Card({ name, content, i, activateMagnifier, deactivateMagnifier }) {
  const background = `linear-gradient(306deg, ${hue(340 - i * 30)}, ${hue(10 + i * 30)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card"
        onMouseEnter={() => activateMagnifier(`Book Session for ${name}`)}
        onMouseLeave={deactivateMagnifier}
      >
        <h3 className="text-2xl font-bold text-brown-800 mb-2">{name}</h3>
        <ul className="text-brown-700 list-disc list-inside">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container = {
  margin: "100px auto",
  maxWidth: 800,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  width: 350,
  height: 450,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#ffffff",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  padding: 20,
  overflowY: "auto",
};