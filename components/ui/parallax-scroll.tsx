"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: (string | { src: string; isPortrait?: boolean })[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 4);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    const getImageSrc = (image: string | { src: string; isPortrait?: boolean }) => {
        return typeof image === "string" ? image : image.src;
    };

    const isPortrait = (image: string | { src: string; isPortrait?: boolean }) => {
        return typeof image === "string" ? false : image.isPortrait;
    };

    return (
        <div className={cn("items-start w-full", className)} ref={gridRef}>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-10 px-10"
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                        >
                            <img
                                src={getImageSrc(el)}
                                className={cn(
                                    "w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 shadow-lg",
                                    isPortrait(el) ? "aspect-[2/3]" : "aspect-[4/3]"
                                )}
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <img
                                src={getImageSrc(el)}
                                className={cn(
                                    "w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 shadow-lg",
                                    isPortrait(el) ? "aspect-[2/3]" : "aspect-[4/3]"
                                )}
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <img
                                src={getImageSrc(el)}
                                className={cn(
                                    "w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 shadow-lg",
                                    isPortrait(el) ? "aspect-[2/3]" : "aspect-[4/3]"
                                )}
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
