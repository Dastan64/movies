import React from "react";

export interface PopupProps {
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void;
}
