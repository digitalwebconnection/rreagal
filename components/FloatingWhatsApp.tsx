"use client";

export default function FloatingWhatsApp() {
  const phone = "7211161521";
  const message = "Hello! I’m interested in your project.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-green-500 p-3 shadow-lg hover:bg-green-600 transition"
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.24-.12-1.41-.7-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.77.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.19-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.36.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.48-.4-.41-.54-.41-.14 0-.3-.02-.46-.02s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.05.14-1.14-.06-.09-.22-.14-.46-.26zM16.02 3.25c-7.06 0-12.78 5.72-12.78 12.78 0 2.26.59 4.38 1.63 6.22L3 29l6.93-1.82a12.72 12.72 0 0 0 6.09 1.55c7.06 0 12.78-5.72 12.78-12.78S23.08 3.25 16.02 3.25zm0 23.17c-2.13 0-4.11-.62-5.78-1.68l-.41-.26-4.12 1.08 1.1-4.02-.27-.41a9.91 9.91 0 0 1-1.66-5.57c0-5.47 4.46-9.93 9.93-9.93s9.93 4.46 9.93 9.93-4.46 9.93-9.93 9.93z"/>
        </svg>
      </a>
    </div>
  );
}
