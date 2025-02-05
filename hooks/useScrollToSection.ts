'use client';

export const useScrollToSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigation = (e: React.MouseEvent, href: string, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return { handleNavigation };
}; 