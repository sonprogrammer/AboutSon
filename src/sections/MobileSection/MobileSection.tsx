import { useState } from "react";
import { motion } from "framer-motion";
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const MobileSection = () => {
  const [copied, setCopied] = useState<string>("");

  const contactItems = [
    { icon: <CallIcon className="text-purple-600 text-xl" />, text: "010-3975-5037" },
    { icon: <EmailIcon className="text-purple-600 text-xl" />, text: "ods04139@naver.com" },
    { icon: <GitHubIcon className="text-purple-600 text-xl" />, text: "github.com/sonprogrammer", link: "https://github.com/sonprogrammer" }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500); // 1.5초 후 알림 제거
  };

  return (
    <div className="bg-gradient-to-t from-purple-300 to-stone-50 min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-purple-800">
        Thanks For Reading!
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-md">
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-md cursor-pointer relative"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={() => !item.link && handleCopy(item.text)}
          >
            {item.icon}
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                className="font-medium text-gray-700 hover:text-purple-800 transition-colors duration-300"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              <span className="font-medium text-gray-700">{item.text}</span>
            )}

            {/* 복사되었을 때 표시 */}
            {copied === item.text && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-purple-700 font-semibold">
                Copied!
              </span>
            )}
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default MobileSection;
