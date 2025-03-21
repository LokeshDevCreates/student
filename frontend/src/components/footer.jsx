import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-800 dark:bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        <div>
          <AnimatedText>
            <h2 className="text-xl font-semibold mb-4">About</h2>
          </AnimatedText>
          <p className="text-white text-sm">
            A diverse range of courses and teaching methods ensures that
            students have access to quality education tailored to their
            individual goals and passions. From foundational knowledge to
            advanced skills, each program is designed to nurture growth and
            success.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/saecautonomous/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl cursor-pointer hover:text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/company/saec-sa-engineering-college-autonomous/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700" />
            </a>
            <a
              href="https://x.com/dev_saec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            </a>
            <a
              href="https://www.saec.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Plus"
            >
              <FaGooglePlusG className="text-xl cursor-pointer hover:text-red-500" />
            </a>
            <a
              href="https://www.instagram.com/saec_autonomous/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
            </a>
          </div>
        </div>
        <div>
          <AnimatedText>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          </AnimatedText>
          <ul className="space-y-2 text-white text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/courses", label: "Academics" },
              { to: "/campus", label: "Campus" },
              { to: "/profile", label: "Profile" },
            ].map(({ to, label }) => (
              <AnimatedText key={label}>
                <li>
                  <Link to={to} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              </AnimatedText>
            ))}
          </ul>
        </div>
        <div>
          <AnimatedText>
            <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
          </AnimatedText>
          <ul className="space-y-2 text-white text-sm">
            {[
              { to: "/contact", label: "Contact" },
              { to: "/frequent", label: "FAQ" },
              { to: "/contact", label: "Support" },
              { to: "/campus", label: "Terms of Services" },
            ].map(({ to, label }) => (
              <AnimatedText key={label}>
                <li>
                  <Link to={to} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              </AnimatedText>
            ))}
          </ul>
        </div>
        <div>
          <AnimatedText>
            <h2 className="text-xl font-semibold mb-4">Research</h2>
          </AnimatedText>
          <ul className="space-y-2 text-white text-sm">
            {[
              { to: "https://www.saec.ac.in/research-h-s/", label: "Research – Humanities & Science" },
              { to: "https://www.saec.ac.in/research-computer-science-engineering/", label: "Research – Computer Science & Engineering" },
              { to: "https://www.saec.ac.in/others/research-2/", label: "Research Centre" },
              { to: "https://www.saec.ac.in/research-mba/", label: "Research – MBA" },
            ].map(({ to, label }) => (
              <AnimatedText key={label}>
                <li>
                  {to.startsWith("http") ? (
                    <a href={to} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {label}
                    </a>
                  ) : (
                    <Link to={to} className="hover:text-white">
                      {label}
                    </Link>
                  )}
                </li>
              </AnimatedText>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-white text-xl mt-10">
        © 2025 S.A Engineering College. All rights reserved. Made by Team RML
      </div>
    </footer>
  );
};

const AnimatedText = ({ children, className }) => {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-36"></span>
    </div>
  );
};

export default Footer;
