import React from "react";

function TopBar() {
    return (
        <div className="bg-gray-800 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-6">
                    <p>NT VICTORY PRODUCT Co.,Ltd</p>
                </div>
                <div className="flex space-x-4">
                    <a href="mailto:nt_victory@gmail.com" className="hover:underline">nt_victory@gmail.com</a>
                    <a href="tel:0927711374" className="hover:underline">092-771-1374</a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;