import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; 

const MobileSection = () => {
  const [copied, setCopied] = useState<string>("");

  const contactItems = [
    { label: "Phone", icon: <CallIcon />, text: "010-3975-5037" },
    { label: "Email", icon: <EmailIcon />, text: "ods04139@naver.com" },
    { label: "GitHub", icon: <GitHubIcon />, text: "github.com/sonprogrammer", link: "https://github.com/sonprogrammer" }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };

  return (

    <div className="bg-gradient-to-b from-white to-purple-50 flex flex-col justify-center items-center py-20 px-6 rounded-t-[3rem]">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-black text-slate-900 mb-2">
          Contact Me
        </h2>
        <p className="text-purple-600 font-medium tracking-wide uppercase text-sm">
          함께 성장할 준비가 되어 있습니다
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex items-center gap-4 p-5 bg-white border border-purple-100 rounded-2xl shadow-[0_4px_20px_rgba(168,85,247,0.05)] active:scale-95 transition-all"
            onClick={() => !item.link && handleCopy(item.text)}
          >
        
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
              {item.icon}
            </div>

            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="font-bold text-slate-700 truncate group-hover:text-purple-600 transition-colors"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                >
                  {item.text}
                </a>
              ) : (
                <span className="font-bold text-slate-700 truncate">{item.text}</span>
              )}
            </div>


            {!item.link && (
              <div className="ml-auto text-slate-300">
                <ContentCopyIcon sx={{ fontSize: 18 }} />
              </div>
            )}


            <AnimatePresence>
              {copied === item.text && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold"
                >
                  성공적으로 복사되었습니다!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    
    </div>
  );
};

export default MobileSection;