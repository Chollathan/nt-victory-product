import React from 'react'

function Chatbutton() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <a
                href="https://lin.ee/ph7rGso" // เปลี่ยนเป็น URL LINE ของคุณ
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
            >
                <i className="fab fa-line text-2xl"></i> {/* ใช้ไอคอน LINE จาก FontAwesome */}
            </a>
        </div>
    )
}

export default Chatbutton