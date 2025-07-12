import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-beige-100 font-sans">
      {/* Header */}
      <header className="bg-brown-800 text-white py-12 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold text-beige-100 drop-shadow-lg">O2 Park</h1>
          <p className="text-2xl font-semibold text-beige-200 mt-2">Sustainable Living</p>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url(/src/assets/o2-park-background.jpg)' }}>
        <div className="absolute inset-0 bg-brown-900 bg-opacity-60"></div> {/* Earthy overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-transparent"></div> {/* Blur effect with fallback */}
        <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center relative z-10 px-4"
        >

          <h2 className="text-6xl font-extrabold text-beige-100 drop-shadow-2xl mb-12">O2 Park: Sustainable Living</h2>
          <p className="text-2xl font-semibold text-beige-200 drop-shadow-lg mb-16">Revolutionizing agriculture with nature</p>
          <motion.a
            href="https://calendly.com/adhirajmali17/o2-exploration-call"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 2.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block px-6 py-3 bg-brown-600 text-beige-100 font-bold rounded-full hover:bg-brown-700"
          >
            Book Now
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-beige-200">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-brown-800 text-center mb-8"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg font-medium text-brown-700 text-center max-w-3xl mx-auto"
          >
            O2 Park is a collective of learners, teachers, and revolutionists dedicated to agricultural innovation and sustainable smart farming. Our mission is to create a self-sustainable environment and economy through initiatives like bamboo plantations, residue-free farming, and eco-tourism.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-beige-300">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-brown-800 text-center mb-8"
          >
            Our Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bamboo Plantation', desc: 'Mass bamboo plantation in Nandurbar and partnerships with MH Govt.' },
              { title: 'Banana Farming', desc: '100 acres in Rajasthan, 25 acres in Telangana, and 110 acres in Odisha.' },
              { title: 'Eco-Tourism', desc: 'ABC Retreat in Morbi, Jaipur, and Pathmeda for agro and eco-tourism.' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-beige-100 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-brown-600">{project.title}</h3>
                <p className="mt-2 text-brown-700 font-medium">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 bg-beige-200">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-brown-800 mb-8"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg font-medium text-brown-700 max-w-3xl mx-auto"
          >
            To create a self-sustainable environment and economy (S2E2 Model) by expanding agro and eco-tourism globally, promoting residue-free farming, and fostering job opportunities through innovative agricultural practices.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-brown-800 text-beige-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg font-medium mb-4"
          >
            O2 Park & Ventures Private Limited<br />
            Talun, Barwani, Madhya Pradesh 451551, India<br />
            Phone: +91 9081039222, +91 8277738222<br />
            Email: o2myadda@gmail.com<br />
            Website: o2myadda.com<br />
            Last Updated: 03:59 PM IST, July 12, 2025
          </motion.p>
          <motion.a
            href="https://calendly.com/adhirajmali17/o2-exploration-call"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-brown-600 text-beige-100 font-bold rounded-full hover:bg-brown-700"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-beige-100 py-4 text-center">
        <p className="text-lg font-medium">© 2025 O2 Park & Ventures Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;