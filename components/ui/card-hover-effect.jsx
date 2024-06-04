// "use client"
// import { cn } from "@/utils/cn";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// const HoverEffect = ({
//     items,
//     className,
// }) => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     return (
//         <div
//             className={cn(
//                 "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 sm:py-10 gap-2 px-2",
//                 className
//             )}
//         >
//             {items.map((item, idx) => (
//                 <div
//                     key={idx}
//                     className="relative group block h-full w-full cursor-pointer"
//                     onMouseEnter={() => setHoveredIndex(idx)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                     <AnimatePresence>
//                         {hoveredIndex === idx && (
//                             <motion.span
//                                 className="absolute inset-0 h-full w-full bg-dark/5 dark:bg-light/5 block rounded-3xl"
//                                 layoutId="hoverBackground"
//                                 initial={{ opacity: 0 }}
//                                 animate={{
//                                     opacity: 1,
//                                     transition: { duration: 0.15 },
//                                 }}
//                                 exit={{
//                                     opacity: 0,
//                                     transition: { duration: 0.15, delay: 0.2 },
//                                 }}
//                             />
//                         )}
//                     </AnimatePresence>
//                     <Card>
//                         <CardTitle className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl py-0"}>{item.title}</CardTitle>
//                         <CardDescription className={`text-sm sm:text-base`} >{item.description}</CardDescription>
//                     </Card>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Card = ({
//     className,
//     children,
// }) => {
//     return (
//         <div
//             className={cn(
//                 "rounded-2xl h-full w-full p-2 sm:p-4 overflow-hidden bg-[#CCF8E4] dark:bg-[#313131] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//                 className
//             )}
//         >
//             <div className="relative z-50">
//                 <div className="p-4">{children}</div>
//             </div>
//         </div>
//     );
// };

// const CardTitle = ({
//     className,
//     children,
// }) => {
//     return (
//         <h4 className={cn("dark:text-light text-dark font-bold tracking-wide", className)}>
//             {children}
//         </h4>
//     );
// };

// const CardDescription = ({
//     className,
//     children,
// }) => {
//     return (
//         <p
//             className={cn(
//                 "mt-3 font-medium text-zinc-700 dark:text-zinc-300 tracking-wide leading-relaxed",
//                 className
//             )}
//         >
//             {children}
//         </p>
//     );
// };

// export { HoverEffect, Card, CardTitle, CardDescription };
"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const HoverEffect = ({
    items,
    className,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-3 sm:py-5 md:py-10 px-1 sm:px-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group  block p-2 h-full w-full cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-dark/5 dark:bg-light/5 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl py-0"}>{item.title}</CardTitle>
                        <CardDescription className={`text-sm sm:text-base`} >{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
};

const Card = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#CCF8E4] dark:bg-[#313131] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

const CardTitle = ({
    className,
    children,
}) => {
    return (
        <h4 className={cn("dark:text-light text-dark font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};

const CardDescription = ({
    className,
    children,
}) => {
    return (
        <p
            className={cn(
                "mt-3 font-medium text-zinc-700 dark:text-zinc-300 tracking-wide leading-relaxed",
                className
            )}
        >
            {children}
        </p>
    );
};

export { HoverEffect, Card, CardTitle, CardDescription };