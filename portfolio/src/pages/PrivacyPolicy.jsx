import { useTheme } from "../context/colorTheme";
import { Link } from "react-scroll";

const PrivacyPolicy = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-cyan-500">
          Privacy Policy
        </h1>

        <div className={`space-y-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          <p className="text-sm text-gray-500">Last Updated: November 29, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">1. Information We Collect</h2>
            <p className="mb-4">
              When you contact Saad Abbas for mobile app development services, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number</li>
              <li><strong>Project Information:</strong> Project requirements, business details, technical specifications</li>
              <li><strong>Website Analytics:</strong> IP address, browser type, pages visited, time spent on site</li>
              <li><strong>Communication Records:</strong> Email correspondence, meeting notes, project discussions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">2. How We Use Your Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve mobile app development services</li>
              <li>Communicate about projects, quotes, and updates</li>
              <li>Process payments and maintain financial records</li>
              <li>Analyze website traffic and improve user experience</li>
              <li>Send occasional updates about services (you can opt-out anytime)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">3. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. This includes secure data transmission (HTTPS), encrypted storage, and restricted access to sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">4. Third-Party Services</h2>
            <p className="mb-4">
              This website uses the following third-party services that may collect data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For website traffic analysis (anonymized)</li>
              <li><strong>Vercel:</strong> For website hosting and performance monitoring</li>
              <li><strong>EmailJS/Gmail:</strong> For contact form functionality</li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies governing their data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">5. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and remember your preferences. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">6. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Data may be shared only when:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Required by law or legal processes</li>
              <li>Necessary for service delivery (e.g., payment processors)</li>
              <li>You have given explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">8. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Project-related data is typically retained for 3-5 years for reference and legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">9. International Data Transfers</h2>
            <p>
              Your data may be transferred to and stored in servers located outside your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">10. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">11. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your data rights, contact:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> iamsaadabbas@gmail.com<br />
              <Link to="contact" smooth={true} duration={800} className="text-cyan-500 underline cursor-pointer font-semibold">
                Or use the contact form
              </Link>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
