import React from "react";

type PageTitleProps = {
  title: string;
  backgroundImage?: string; // Optional: for background image
  children?: React.ReactNode; // For breadcrumbs or subtext
};

export default function PageTitle({ title, backgroundImage, children }: PageTitleProps) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-16 md:py-20"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }
          : {}
      }
    >
      {/* Overlay for dark effect if backgroundImage is set */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-[#2d5363]/90 pointer-events-none" />
      )}
      <div className={backgroundImage ? "relative flex flex-col items-center" : ""}>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">{title}</h1>
        {children && (
          <div className="bg-white/20 rounded px-6 py-2 text-white text-lg flex items-center gap-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
