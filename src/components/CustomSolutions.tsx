import React from 'react';

// Main App component to demonstrate the CustomSolutionsSection
const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center py-16 px-4 md:px-8 lg:px-16">
            <CustomSolutionsSection />
        </div>
    );
};

interface CardProps {
    title: string;
    description: string;
    children: React.ReactNode; // For the icon/image
}

// Card component for the Custom Solutions section
const SolutionCard: React.FC<CardProps> = ({ title, description, children }) => {
    return (
        <div className="relative bg-zinc-900 rounded-3xl p-8 flex flex-col items-center text-center
                        border border-zinc-800 shadow-xl group hover:border-blue-500 transition-all duration-300">
            {/* Pseudo-element for the glowing border effect on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            bg-gradient-to-r from-blue-500 via-emerald-500 to-yellow-500 blur-sm -z-10"></div>

            <div className="mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-zinc-800">
                {children}
            </div>
            <h3 className="text-white text-3xl font-bold mb-4">{title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
        </div>
    );
};

interface BenefitPillProps {
    text: string;
    children: React.ReactNode; // For the icon
}

// Benefit Pill component for the bottom section
const BenefitPill: React.FC<BenefitPillProps> = ({ text, children }) => {
    return (
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-900 rounded-full
                        border border-zinc-700 text-white text-lg font-medium shadow-md
                        hover:border-emerald-500 transition-colors duration-300 cursor-pointer">
            <span className="text-emerald-400">{children}</span> {/* Icon color */}
            <span>{text}</span>
        </div>
    );
};

// Main CustomSolutionsSection component
const CustomSolutionsSection: React.FC = () => {
    return (
        <section className="w-full max-w-7xl mx-auto space-y-20">
            {/* New Top Part: "Custom Solutions" pill, title, and description */}
            <div className="text-center mb-16"> {/* Increased margin-bottom for separation */}
                {/* "Custom Solutions" Pill */}
                <div className="inline-block bg-zinc-800 text-zinc-400 text-base font-medium px-6 py-2 rounded-full uppercase tracking-wider mb-8">
                    Custom Solutions
                </div>
                {/* Main Title */}
                <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Create Your Custom AI Employee
                </h2>
                {/* Description */}
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Tell us what you need, and we'll create a custom AI to make your work faster and easier.
                </p>
            </div>

            {/* Existing Top section: Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SolutionCard
                    title="Optimisation"
                    description="We optimize workflows by connecting systems, automating tasks, and minimizing wasted time."
                >
                    {/* Placeholder for Optimisation icon - using an SVG that looks like a network/nodes */}
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 5V2M12 22V19M19 12H22M2 12H5M17.6569 6.34315L19.7828 4.21716M4.21716 19.7828L6.34315 17.6569M6.34315 6.34315L4.21716 4.21716M19.7828 19.7828L17.6569 17.6569" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </SolutionCard>

                <SolutionCard
                    title="Custom Projects"
                    description="We analyze your workflows and implement AI solutions to streamline and optimize them."
                >
                    {/* Placeholder for Custom Projects icon - using an SVG that looks like code brackets */}
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 3L2 12L6 21M18 3L22 12L18 21M9 5L15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </SolutionCard>

                <SolutionCard
                    title="Automation"
                    description="We automate daily tasks like customer support and emails, saving you valuable hours."
                >
                    {/* Placeholder for Automation icon - using an SVG that looks like a gear */}
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M19.4998 12C19.4998 16.1421 16.142 19.4998 11.9998 19.4998C7.8576 19.4998 4.4998 16.1421 4.4998 12C4.4998 7.8576 7.8576 4.4998 11.9998 4.4998C16.142 4.4998 19.4998 7.8576 19.4998 12Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 2V4M12 20V22M2 12H4M20 12H22M17.071 6.929L15.6568 5.51472M8.34314 18.3431L6.92892 16.9289M6.92892 7.07106L8.34314 5.65685M18.3431 15.6568L16.9289 17.071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </SolutionCard>
            </div>

            {/* Bottom section: Benefit Pills */}
            <div className="flex flex-wrap justify-center gap-4">
                <BenefitPill text="Improved Customer Experience">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14H11V21L20 10H13Z"></path></svg>
                </BenefitPill>
                <BenefitPill text="System Integration">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
                </BenefitPill>
                <BenefitPill text="Data Driven Decisions">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8V16"></path><path d="M16 12H8"></path></svg>
                </BenefitPill>
                <BenefitPill text="Scalability">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.8995C4 16.0963 4.90369 17.0995 6.09953 17.0995H7.90047C9.09631 17.0995 10 16.0963 10 14.8995V9.1005C10 7.90369 9.09631 6.9005 7.90047 6.9005H6.09953C4.90369 6.9005 4 7.90369 4 9.1005V14.8995Z"></path><path d="M14 9.89953C14 11.0963 14.9037 12.0995 16.0995 12.0995H17.9005C19.0963 12.0995 20 11.0963 20 9.89953V4.10047C20 2.90369 19.0963 1.90047 17.9005 1.90047H16.0995C14.9037 1.90047 14 2.90369 14 4.10047V9.89953Z"></path><path d="M4 14.8995C4 16.0963 4.90369 17.0995 6.09953 17.0995H7.90047C9.09631 17.0995 10 16.0963 10 14.8995V9.1005C10 7.90369 9.09631 6.9005 7.90047 6.9005H6.09953C4.90369 6.9005 4 7.90369 4 9.1005V14.8995Z"></path><path d="M14 19.8995C14 21.0963 14.9037 22.0995 16.0995 22.0995H17.9005C19.0963 22.0995 20 21.0963 20 19.8995V14.1005C20 12.9037 19.0963 11.9005 17.9005 11.9005H16.0995C14.9037 11.9005 14 12.9037 14 14.1005V19.8995Z"></path></svg>
                </BenefitPill>
                <BenefitPill text="Enhanced Productivity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"></path><path d="M14 2V8H20"></path><path d="M9 13H15"></path><path d="M9 17H15"></path><path d="M10 9H14"></path></svg>
                </BenefitPill>
                <BenefitPill text="24/7 Availability">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6V12L16 14"></path></svg>
                </BenefitPill>
                <BenefitPill text="Data Safeguard">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"></path></svg>
                </BenefitPill>
                <BenefitPill text="Analytics">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3V21H21"></path><path d="M7 13L10.5 9.5L14 13L17.5 9.5L21 13"></path></svg>
                </BenefitPill>
            </div>
        </section>
    );
};

export default App; // Exporting App for immediate preview