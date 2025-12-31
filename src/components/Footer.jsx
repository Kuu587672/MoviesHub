import React from "react";

function Footer() {
    return (
        <div className="flex items-center justify-center h-20 md:h-30 border-t border-gray-700">
            <p className="max-w-[1400px] text-white text-sm">
                Developed by{" "}
                <a
                href="https://github.com/Kuu587672"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    relative
                    text-white
                    font-semibold
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-white
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                "
                >
                Ranadeb Roy
                </a>{" "}
                &copy; 2026
            </p>
        </div>
    )
}

export default Footer;