import { AnimatePresence, motion } from "framer-motion"
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const ContactBtn = () => {
    const [expand, setExpand] = useState<boolean>(true)

    const handleClick = () => {
        setExpand(!expand)
    }
    return (
        <motion.div
            className="shadow-lg p-4 rounded-full bg-gradient-to-b from-purple-300 to-indigo-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}

        >
            <div className="flex flex-col items-center">
                <AnimatePresence>
                    {expand && (
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href="mailto:ods04139@naver.com">
                                <EmailIcon sx={{ fontSize: '28px', cursor:'pointer' }}/>
                            </a>
                            <a href="https://github.com/sonprogrammer" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon sx={{ fontSize: '28px', cursor:'pointer' }}/>
                            </a>
                            <a href="tel:01039755037">
                                <CallIcon sx={{ fontSize: '28px', cursor:'pointer' }} />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div>
                    {expand ? (
                        <ExpandLessIcon onClick={handleClick} sx={{ fontSize: '28px', marginTop: '10px', cursor:'pointer' }}/>
                    ) : (
                        <ExpandMoreIcon onClick={handleClick} sx={{ fontSize: '28px', cursor:'pointer', '&:hover': {
                            backgroundColor: 'transparent'
                        }}}/>
                    )}
                </div>

            </div>
        </motion.div>
    )
}

export default ContactBtn
