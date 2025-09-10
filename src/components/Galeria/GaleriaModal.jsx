import React from "react";

const GaleriaModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="relative bg-white rounded-lg w-[95vw] h-[95vh] sm:w-[90vw] sm:h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-[#f6f6f6] border-b border-[#e5e5e5] p-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <div className="flex items-center space-x-3">
                        <span className="text-3xl">🖼️</span>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                Galería
                            </h2>
                            <p className="text-sm text-gray-500">
                                Colección de imágenes
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div
                    className="p-6 overflow-y-auto flex justify-center items-center"
                    style={{ height: "calc(100% - 70px)" }}
                >
                    <div className="max-w-full max-h-full">
                        <img
                            src="/images/Galeria/Thinking.gif"
                            alt="Thinking"
                            className="object-contain max-h-[80vh]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GaleriaModal;