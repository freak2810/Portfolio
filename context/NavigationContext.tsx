import { createContext, useContext, useState } from 'react';

interface NavigationModalContextData {
	isOpen: boolean;
	closeModal: () => void;
	openModal: () => void;
}

const NavigationModalContext = createContext<NavigationModalContextData>({
	isOpen: false,
	closeModal: () => null,
	openModal: () => null,
});

export const useNavigationContext = () => useContext(NavigationModalContext);

export default function NavigationModalContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		// @ts-ignore
		<NavigationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
		</NavigationModalContext.Provider>
	);
}
