import { useTheme } from "../context/colorTheme";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const TermsOfService = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-cyan-500"
        >
          Terms of Service
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`space-y-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          <p className="text-sm text-gray-500">Last Updated: November 29, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">1. Agreement to Terms</h2>
            <p>
              By accessing and using the services of Saad Abbas (Mobile App Developer), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">2. Services Provided</h2>
            <p>
              Saad Abbas provides professional mobile application development services including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Android application development using Java and Kotlin</li>
              <li>Cross-platform development using Flutter and React Native</li>
              <li>iOS application development</li>
              <li>Mobile UI/UX design and consultation</li>
              <li>App Store deployment and optimization</li>
              <li>API integration and backend services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">3. Project Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Project Scope:</strong> All projects require a detailed scope document agreed upon by both parties before work begins.</li>
              <li><strong>Timeline:</strong> Project timelines are estimates and may vary based on complexity and client feedback cycles.</li>
              <li><strong>Revisions:</strong> Each project includes a specified number of revision rounds as agreed in the contract.</li>
              <li><strong>Payment Terms:</strong> Payment schedules will be outlined in individual project contracts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">4. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive full ownership rights to the final application code. Saad Abbas retains the right to showcase project work in portfolio materials unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">5. Confidentiality</h2>
            <p>
              All client information, project details, and proprietary data shared during the development process will be kept strictly confidential and will not be disclosed to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">6. Warranty and Support</h2>
            <p>
              A post-launch support period will be included with each project as specified in the contract. This typically includes bug fixes and minor adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">7. Limitation of Liability</h2>
            <p>
              Saad Abbas will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">8. Changes to Terms</h2>
            <p>
              These terms may be updated periodically. Continued use of services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> iamsaadabbas@gmail.com<br />
              <Link to="contact" smooth={true} duration={800} className="text-cyan-500 underline cursor-pointer">
                Or use the contact form
              </Link>
            </p>
          </section>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
