"use client";
import { motion } from "framer-motion";

interface PreviewFrameProps {
    iframeUrl: string;
}

export default function PreviewFrame({ iframeUrl }: PreviewFrameProps) {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <div 
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
                        <g fill="none" fillRule="evenodd">
                            <g transform="translate(1 1)" strokeWidth="2">
                                <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
                                <path d="M36 18c0-9.94-8.06-18-18-18"/>
                            </g>
                        </g>
                    </svg>
                </motion.div>
                <p style={{ 
                    fontFamily: 'system-ui, sans-serif',
                    color: '#666',
                    margin: 0
                }}>
                    Loading Design Prototype...
                </p>
            </div>
            <iframe
                src={iframeUrl}
                style={{ width: "100vw", height: "100vh", position: 'relative', zIndex: 2 }}
                allowFullScreen
            ></iframe>
        </div>
    );
} 