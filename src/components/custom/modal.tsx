/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, openModal, closeModal };
};

interface ModalProps {
    children: React.ReactNode | ReactElement;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-6">
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-4xl"
                >
                    &times;
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;