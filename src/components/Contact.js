import { Link } from "react-router";
import { GITHUB_URL, LinkedIn_URL } from "../../utils/constants";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="max-w-md mx-auto text-center mt-32 px-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-8">Contact Us</h1>
      <div className="flex justify-center gap-6">
        <Link to={GITHUB_URL} target="_blank">
          <h1 className="bg-blue-600 text-white rounded-full px-6 py-3 text-xl font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
            GitHub
          </h1>
        </Link>
        <Link to={LinkedIn_URL} target="_blank">
          <h1 className="bg-blue-600 text-white rounded-full px-6 py-3 text-xl font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
            LinkedIn
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
