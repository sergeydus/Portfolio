import * as React from "react"
import { motion, SVGMotionProps } from "motion/react"
import tailwindConfig from '../../../tailwind.config.js'; // Adjust path as needed

const SvgComponent: React.FC<SVGMotionProps<SVGSVGElement>> = (props) => (
    <motion.svg xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="#ff0000"
        viewBox="0 0 24 24"
        {...props}
        className="text-primary fill-current bg-primary rounded"
    >
        <path
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M17.4 19.2A9 9 0 1 1 21 12v1.5a2.5 2.5 0 0 1-5 0V8m0 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
    </motion.svg>
)
export default SvgComponent
