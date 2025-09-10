import React from "react";
import "./rewards-modal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function RewardsModal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="rewards-modal-overlay" onClick={onClose}>
      <div
        className="rewards-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="rewards-modal-close" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
