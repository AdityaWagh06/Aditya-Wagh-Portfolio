import React, { useState, useEffect, memo, useMemo } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

// TypingText Component - Handles the animated text display
// To customize:
// - Modify 'words' array to change the rotating texts
// - Adjust 'typingSpeed' (in ms) for typing speed
// - Change 'period' (in ms) for pause duration between words
const TypingText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200); // Typing animation speed - lower = faster

  // Array of texts to cycle through - Add or modify phrases here
  const words = [
    "AI/ML Enthusiast",
    "Web Developer",
    "Photographer",
    "UI Designer"
  ];
  const period = 2000; // Pause duration between words

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  });

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 4);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(200);
    }
  };

  return (
    // Customize text color and animation here
    <span className="text-gray-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

// MainTitle Component - Contains the main heading text
// To customize:
// - Modify text sizes in className (text-4xl, text-5xl, etc.)
// - Adjust gradient colors in 'from-[#color] to-[#color]'
// - Change font weight (font-bold) or tracking (tracking-tight)
const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      {/* First word styling */}
      <span className="relative inline-block">
        {/* Background gradient effect - customize colors here */}
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        {/* Text gradient - modify colors here */}
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Frontend
        </span>
      </span>
      <br />
      {/* Second word styling */}
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
));

// Main Home Component
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const socialLinks = useMemo(() => [
    { href: "https://github.com", icon: Github },
    { href: "https://linkedin.com", icon: Linkedin },
    { href: "https://instagram.com", icon: Instagram },
    { href: "mailto:someone@example.com", icon: Mail }
  ], []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll function - adjust offset values here
  const scrollToSection = (id, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  // Social Icon Component - customize icon sizes and hover effects here
  const SocialIcon = ({ href, icon: Icon }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-gray-400 hover:text-white transition transform hover:scale-110"
    >
      {/* Adjust icon sizes for mobile/desktop here */}
      <Icon size={window.innerWidth < 640 ? 24 : 36} />
      {/* Icon hover effect - customize colors here */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-30 blur-sm"></span>
    </a>
  );

  return (
    // Main container - customize background color here
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      {/* Loading animation wrapper */}
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Main content container - adjust padding here */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-32 min-h-screen">
          {/* Content layout grid - modify gap and alignment here */}
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pt-16 pb-8 lg:pt-0 lg:pb-0 gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div
              className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="space-y-4">
                <MainTitle />

                {/* Typing Text Container - adjust font sizes here */}
                <div
                  className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <TypingText />
                </div>

                {/* Subtitle text - customize font sizes and colors here */}
                <p
                  className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  Crafting Innovative Digital Solutions through Code and Creativity
                </p>

                {/* Buttons Container - customize spacing and alignment here */}
                <div
                  className="flex space-x-4 mt-6 justify-center lg:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  {/* Button styling - customize colors and hover effects here */}
                  <button
                    onClick={() => scrollToSection("Portfolio", 100)}
                    className="px-5 py-2 text-white bg-transparent border-2 border-slate-600 rounded-lg shadow-lg hover:bg-[#322e7b] transition"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => scrollToSection("Contact")}
                    className="px-5 py-2 text-white bg-transparent border-2 border-slate-600 rounded-lg shadow-lg hover:bg-[#322e7b] transition"
                  >
                    Contact Me
                  </button>
                </div>

                {/* Social Icons Container - adjust spacing here */}
                <div
                  className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-6"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  {socialLinks.map((link, index) => (
                    <SocialIcon key={index} {...link} />
                  ))}
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-0"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              {/* Image with hover shadow effect */}
              <img
                src="/cod2.png"
                alt="Tech Animation"
                className="w-full max-w-[280px] sm:max-w-lg rounded-full object-cover shadow-inherit transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/50"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);