import React from "react";

function TopBar() {
    return (
        <div className="bg-gray-800 text-white py-2 text-sm">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                {/* ซ้าย */}
                <div className="text-center md:text-left">
                    <p>NT VICTORY PRODUCT Co.,Ltd</p>
                </div>

                {/* ขวา */}
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-center md:text-right">
                    <a href="mailto:rukwongnattawat@gmail.com" className="hover:underline">rukwongnattawat@gmail.com</a>
                    <a href="tel:0612353532" className="hover:underline">061-235-3532</a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
