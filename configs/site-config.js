import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Ohm Khur. All Rights Reserved.`,
  author: {
    name: "OhmKhay",
    accounts: [
      {
        url: "https://github.com/OhmKhay",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/ohmkhur",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://linkedin.com/in/ohm-khur",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },

      {
        url: "mailto:ohmkhur@gmail.com",
        label: "Mail ahmad",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
