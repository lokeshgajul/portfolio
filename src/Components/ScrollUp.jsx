import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi"; // Import the scroll-up icon

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll-up button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-16 right-6 cursor-pointer bg-blue-500 text-white p-2 rounded-full`}
      onClick={scrollToTop}
    >
      <FiArrowUp size={24} />
    </div>
  );
};

export default ScrollUp;
