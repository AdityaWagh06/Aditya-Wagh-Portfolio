import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
    const blobRefs = useRef([]);
    const cursorRef = useRef(null);
    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ];

    useEffect(() => {
        let currentScroll = 0;
        let requestId;

        const handleScroll = () => {
            const newScroll = window.pageYOffset;
            currentScroll = newScroll;

            blobRefs.current.forEach((blob, index) => {
                const initialPos = initialPositions[index];
                const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340;
                const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;
                const x = initialPos.x + xOffset;
                const y = initialPos.y + yOffset;

                blob.style.transform = `translate(${x}px, ${y}px)`;
                blob.style.transition = "transform 1.4s ease-out";
            });

            requestId = requestAnimationFrame(handleScroll);
        };

        const handleMouseMove = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(requestId);
        };
    }, []);

    return (
        <div className="fixed inset-0 ">
            <div className="absolute inset-0">
                <div ref={(ref) => (blobRefs.current[0] = ref)} className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
                <div ref={(ref) => (blobRefs.current[1] = ref)} className="absolute top-0 -right-4 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
                <div ref={(ref) => (blobRefs.current[2] = ref)} className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
                <div ref={(ref) => (blobRefs.current[3] = ref)} className="absolute -bottom-10 right-20 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 w-20 h-20 bg-white opacity-30 rounded-full filter blur-3xl transition-transform duration-200 ease-out"></div>
        </div>
    );
};

export default AnimatedBackground;
