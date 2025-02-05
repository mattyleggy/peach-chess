"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    size?: number;
}

export function Logo({ className, size = 150, ...props }: LogoProps) {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-primary", className)}
            width={size}
            height={Math.ceil((size / 1010) * 211)}
            {...props}
            viewBox="0 0 563.15 116.98"
        >
            <path
                d="M263.34,66.87c-.95,15.87-11.56,23.59-32.43,23.59s-31.93-8.19-32.99-25.02h14.04c1.18,9.01,7.55,13.57,18.95,13.57,7.3,0,12.25-1.43,15.15-4.38,1.92-1.96,2.87-4.55,2.81-7.67,0-4.86-2.99-8.18-8.86-9.86-4.47-1.34-9.53-2.68-14.89-4.1l-2.13-.57c-16.07-4.1-23.88-11.27-23.88-21.88.36-16.94,10.24-25.17,30.23-25.17h.44c18.64,0,28.45,7.69,29.92,23.51h-8.18c-2.97,0-5.02-1.33-6.45-4.2l-.02-.04-.03-.05c-3.14-5.32-8.78-8.02-16.77-8.02-9.8.13-14.99,3.99-15.42,11.46v.05s-.01.04-.01.04c0,6.25,5.81,10.59,17.75,13.27,7.14,1.68,13.75,3.6,20.21,5.87,8.92,3.05,13.03,9.47,12.56,19.6Z"
                className="fill-black"
            />
            <path
                d="M297.17,8.36c-1.04-1.06-2.74-1.6-5.06-1.6h-7.17v10.07h13.71v-3.4c.05-2.32-.44-4.01-1.48-5.07ZM292.11,25.73h-7.17v63.48h13.71v-56.93c0-4.59-1.96-6.55-6.54-6.55Z"
                className="fill-black"
            />
            <path
                d="M371.94,32.45c-4.85-4.67-12.17-6.97-22.02-6.97h-.38c-19.79.36-29.42,10.85-29.42,32.05s8.18,32.93,25.01,32.93c7.8,0,13.76-3.07,17.72-9.12l2.76-4.21v11.82c0,14.01-8.06,16.95-14.82,16.95s-11.43-2.36-13.06-7.04h-15.33c4.02,12.19,12.71,18.12,26.5,18.12,20.38-.37,30.29-8.22,30.29-24.01v-39.33c0-9.48-2.39-16.52-7.25-21.19ZM349.78,78.76c-9.84,0-15.04-6.96-15.45-20.68,0-14.38,5.29-21.65,15.7-21.65,4.37,0,7.88,1.31,10.44,3.9,3.53,3.57,5.22,9.36,5.14,17.72-.54,13.76-5.87,20.71-15.83,20.71Z"
                className="fill-black"
            />
            <path
                d="M453.71,51.63v37.58h-6.99c-4.8-.34-6.85-2.38-6.85-6.8v-34.26c-.43-7.78-4.82-11.72-13.06-11.72s-12.67,4.07-12.81,11.8v40.98h-13.96v-37.58c0-18.1,8.84-26.9,27.02-26.9,9.01,0,15.79,2.22,20.15,6.61,4.37,4.41,6.56,11.23,6.5,20.29Z"
                className="fill-black"
            />
            <path
                d="M499.31,24.73c-13.87,0-21.8,5.02-24.18,15.34h13.84c1.46-3.12,5.11-4.65,11.1-4.65,7.69,0,11.83,2.36,12.3,7.01v.15c0,6.66-9.12,7.78-12.12,8.15-16.71,1.62-27.11,5.6-27.46,20.41,0,12.17,8.27,19.46,22.11,19.46,1.07,0,2.17-.05,3.29-.13,18.61-1.3,27.65-9.9,27.65-26.28v-22.62c-.35-11.32-9.03-16.84-26.53-16.84ZM512.63,63.44c0,10.15-6.31,16.45-16.46,16.45-6.05,0-9.48-3.17-9.91-9.18v-.06s-.01-.05-.01-.05c0-3.94,1.96-9.01,11.28-10.77,4.73-.97,9.11-2.3,13.02-3.93l2.08-.87v8.41Z"
                className="fill-black"
            />
            <path
                d="M563.15,13.43v75.78h-13.71V6.76h7.17c3.55,0,6.54,3.05,6.54,6.67Z"
                className="fill-black"
            />
            <motion.g
                animate={{
                    rotate: [0, 180, 0]
                }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 4
                }}
            >
                <polygon
                    points="125.39 11.8 131.85 11.8 130.25 32.14 126.98 32.14 125.39 11.8"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="145.67 15.5 151.26 18.73 139.71 35.55 136.88 33.91 145.67 15.5"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="161.38 28.85 164.61 34.44 146.19 43.23 144.56 40.4 161.38 28.85"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="168.31 48.26 168.31 54.72 147.97 53.13 147.97 49.86 168.31 48.26"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="164.61 68.54 161.38 74.14 144.56 62.58 146.19 59.75 164.61 68.54"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="131.85 91.19 125.39 91.19 126.98 70.84 130.25 70.84 131.85 91.19"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="111.57 87.48 105.97 84.25 117.53 67.43 120.35 69.07 111.57 87.48"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="95.85 74.14 92.62 68.54 111.04 59.75 112.67 62.58 95.85 74.14"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="88.92 54.72 88.92 48.26 109.27 49.86 109.27 53.13 88.92 54.72"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="92.62 34.44 95.85 28.85 112.67 40.4 111.04 43.23 92.62 34.44"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="105.97 18.73 111.57 15.5 120.35 33.91 117.53 35.55 105.97 18.73"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="134.89 21.76 137.07 19.96 138.05 22.6 133.63 32.8 134.89 21.76"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="148.92 28.88 151.7 28.41 151.23 31.19 142.3 37.81 148.92 28.88"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="157.51 42.06 160.15 43.04 158.35 45.22 147.31 46.48 157.51 42.06"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="158.35 57.77 160.15 59.94 157.51 60.92 147.31 56.5 158.35 57.77"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="151.23 71.79 151.7 74.58 148.92 74.1 142.3 65.17 151.23 71.79"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="138.05 80.38 137.07 83.02 134.89 81.23 133.63 70.19 138.05 80.38"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="122.34 81.22 122.34 81.22 120.17 83.02 119.18 80.38 123.61 70.19 122.34 81.22"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="108.31 74.1 105.53 74.57 106 71.79 106 71.79 114.93 65.17 108.31 74.1"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="99.73 60.92 97.08 59.94 98.88 57.77 109.92 56.5 99.73 60.92"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="98.88 45.22 97.08 43.04 99.73 42.06 99.73 42.06 109.92 46.48 98.88 45.22"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="106 31.19 105.53 28.41 108.31 28.88 114.94 37.81 106 31.19"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="119.18 22.6 120.17 19.96 122.34 21.76 123.61 32.8 119.18 22.6"
                    className="fill-primary fill-rule-evenodd"
                />
                <polygon
                    points="145.67 87.48 136.88 69.07 139.71 67.43 151.26 84.25 145.67 87.48"
                    className="fill-primary fill-rule-evenodd"
                />
            </motion.g>
            <path
                d="M44.22,42.17v5.59c0,5.07,4.03,9.1,9.1,9.1h10.66c-1.95,10.66-9.1,18.86-21.32,18.86-16.25-1.17-24.18-11.58-24.05-30.95.13-19.37,7.93-28.99,23.14-28.99,8.58,0,14.69,3.51,18.2,10.66,2.08,2.99,4.68,4.55,7.93,4.55h11.19c-.65-10.01-4.42-17.68-11.19-23.15C60.47,2.64,51.5.04,41.23.04,15.1-1-.38,19.55,0,45.68,0,71.56,15.36,91.19,40.71,91.19c12.74,0,19.11-4.42,25.35-12.48l.78,4.29c.4,4.03,4.56,6.89,8.85,6.89h4.55v-47.72h-36.02Z"
                className="fill-primary"
            />
        </svg>
    );
}
