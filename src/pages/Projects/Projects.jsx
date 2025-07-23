import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import imrewardImage from "../../assets/images/imreward.png";
import smartocImage from "../../assets/images/smartoc.png";
import topkashImage from "../../assets/images/topkash.png";
import clea from "../../assets/images/clea.png";

const projects = [
  {
    title: "IMREWARD",
    description:
      "imreward provides marketing campaign tools that help e-commerce businesses engage their customers with interactive promotions such as Spin Wheel, Scratch and Win, and others. You can integrate our service with your e-commerce platform to run these campaigns and offer rewards to your customers, such as discounts, coupons, or free products.",
    src: "rock.jpg",
    link: imrewardImage,
    color: "#5196fd",
    // githubLink: "https://github.com/olovajs/olova",
    // liveLink: "https://olova.js.org/",
  },
  {
    title: "Smart Food Ordering Cafe - Freelance ",
    description:
      "SmartOC is a campus-focused food ordering app designed to simplify and speed up the ordering process for university students and staff. Built to support busy campus lifestyles, SmartOC allows users to browse menus, place orders, and receive real-time updates from food vendors around the university , all from their mobile devices.",
    src: "tree.jpg",
    link: smartocImage,
    color: "#8f89ff",
  },
  {
    title: "MICRO LOAN",
    description:
      "🚀 CodeWhisperer A powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
    src: "water.jpg",
    link: "https://placehold.co/600x400/0066cc/ffffff?text=MICRO+LOAN+FINANCIAL+SERVICES",
    color: "#fff",
  },
  {
    title: "TOPKASH",
    description:
      "TOPKASH is Southeast Asia's leading mobile app for currency exchange and international money transfers. It offers competitive exchange rates, comprehensive fund management and fast transfer methods. The app is safe, convenient, and easy to use, making it a great way to store currencies and manage your finances internationally.",
    src: "house.jpg",
    link: topkashImage,
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
  },
  {
    title: "GIFTPACE",
    description:
      "GIFTPACE is a dynamic coupon generation and distribution platform designed to help businesses engage users through personalized and time-sensitive rewards. Whether it's for promotions, events, or customer loyalty, GIFTPACE enables businesses to generate unique coupon codes in bulk, track usage, and deliver them directly to end users with ease.",
    src: "house.jpg",
    link: "https://placehold.co/600x400/4A9782/ffffff?text=GIFTPACE+APP",
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
  },
  {
    title: "CLEADOC",
    description:
      "CLEADOC is the largest POCT platform in Malaysia, health tech aggregator and provider, that enables convenient hybrid healthcare solutions for the people.",
    src: "house.jpg",
    link: clea,
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
  },
  {
    title: "CEMRI",
    description:
      "CEMRI is an advanced clinic management system built as an extended version of CLEA, specifically designed to streamline operations within clinical environments. From patient registration and appointment scheduling to medical record handling and prescription management, CEMRI offers a complete digital solution for modern clinics. Developed with healthcare workflows in mind, CEMRI improves efficiency, reduces administrative workload, and ensures accurate patient data tracking.",
    src: "house.jpg",
    link: "https://placehold.co/600x400/932F67/ffffff?text=CEMRI",
    color: "#ed649e",
    githubLink: "https://github.com/seraprogrammer/CodeKori",
    liveLink: "https://codekori.js.org",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main ref={container}>
        {" "}
        {/* Remove bg-black */}
        <section className="text-white w-full">
          {" "}
          {/* Remove bg-slate-950 */}
          {projects.map((project, i) => {
            // Adjust the scaling factor to be more gradual
            // This ensures even the last projects maintain a reasonable size
            const targetScale =
              1 - Math.min(0.45, (projects.length - i) * 0.03);

            // Adjust the animation range to be more distributed
            // This prevents all animations from ending at the same point
            const startRange = i * 0.15; // More gradual start points
            const endRange = Math.min(1, startRange + 0.5); // Distributed end points

            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[startRange, endRange]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          // Adjust the top positioning to be more gradual for more projects
          top: `calc(-5vh + ${i * Math.max(5, 25 - projects.length)}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
