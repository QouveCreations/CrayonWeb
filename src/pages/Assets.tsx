import React from "react";
import {
  assetData,
  type AssetItem,
  type AssetType,
  type PreviewType
} from "../data/assets";

import { FaDownload, FaFileArchive, FaFilePdf, FaImage } from "react-icons/fa";
import { FileIcon, FileText } from "lucide-react";

// Import deiner Design-System Komponenten
import { CrayonButton } from ".././components/CrayonButton.tsx";
import { CrayonCard } from ".././components/CrrayonCard.tsx";
import { CrayonBadge } from ".././components/CrayonBadge.tsx";

const Assets = () => {

  // Korrigiertes Mapping: Nutzt ausschließlich die echten Varianten deiner CrayonBadge
  const TypeBadge: React.FC<{ type: AssetType }> = ({ type }) => {
    const badgeVariants: Record<AssetType, "red" | "pink" | "purple" | "gray"> = {
      png: "red",      // Haupt-Bildmedien im typischen Crayon-Rot
      jpg: "red",      // Alternative Bitmaps ebenfalls im Rot-Ton
      svg: "pink",     // Vektorgrafiken abgesetzt in Pink
      pdf: "purple",   // Dokumente/Guides in Lila
      zip: "gray",     // Archive/Brandkits im neutralen Grau mit Border
    };

    return (
        <CrayonBadge variant={badgeVariants[type] || "gray"}>
          {type}
        </CrayonBadge>
    );
  };

  // Einheitliche Preview-Boxen (16:9-Verhältnis) verhindern Layout-Springen
  const AssetPreview: React.FC<{ preview: PreviewType }> = ({ preview }) => {
    if (preview.type === "image") {
      return (
          <div className="w-full aspect-video bg-neutral-950/40 rounded-xl p-4 border border-white/5 flex items-center justify-center overflow-hidden group-hover:border-white/10 transition-colors">
            <img
                src={preview.path}
                alt="Asset Preview"
                className="max-w-full max-h-32 object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
      );
    } else if (preview.type === "icon") {
      let IconComponent;
      switch (preview.name) {
        case "FaFileArchive":
          IconComponent = FaFileArchive;
          break;
        case "FaFilePdf":
          IconComponent = FaFilePdf;
          break;
        default:
          IconComponent = FaImage;
      }

      return (
          <div className="w-full aspect-video flex items-center justify-center bg-white/5 border border-white/5 rounded-xl group-hover:border-white/10 transition-colors">
            <IconComponent className="text-5xl text-gray-500 group-hover:text-gray-400 transition-colors duration-300" />
          </div>
      );
    }
    return null;
  };

  // Holt das Style-Guide Asset aus den Daten für die untere Sektion
  const styleGuideAsset = assetData.find((asset) =>
      asset.name.toLowerCase().includes("style guide")
  );

  return (
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 pb-24">

        {/* Hero Header */}
        <header className="py-16 md:py-20 text-center" data-aos="fade-up">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#ff0040]/10 flex items-center justify-center border border-[#ff0040]/25">
            <FileIcon className="w-8 h-8 text-[#ff0040]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
            Official <span className="accent-gradient-text">Assets</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            All official Crayon logos, brand kits, and style guides for media and
            partners available for direct download.
          </p>
        </header>

        {/* Assets Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetData.map((asset: AssetItem, index) => (
                <CrayonCard
                    key={asset.id}
                    className="p-4 flex flex-col justify-between group"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                >
                  <div className="space-y-4">
                    {/* 16:9 Medien-Vorschau */}
                    <AssetPreview preview={asset.preview} />

                    {/* Datei-Metadaten */}
                    <div className="px-1">
                      {/* items-center sorgt für die saubere vertikale Ausrichtung mit der Badge */}
                      <div className="flex justify-between items-center gap-4 mb-2">
                        <h2 className="text-xl font-bold text-white tracking-tight line-clamp-1">
                          {asset.name}
                        </h2>
                        <TypeBadge type={asset.type} />
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 h-10">
                        {asset.description}
                      </p>
                    </div>
                  </div>

                  {/* Download-Button */}
                  <div className="pt-4 mt-2 px-1">
                    <a
                        href={asset["download-path"]}
                        download
                        className="w-full block"
                    >
                      <CrayonButton
                          variant="secondary"
                          icon={FaDownload}
                          className="w-full justify-center text-xs py-2.5"
                      >
                        Download File
                      </CrayonButton>
                    </a>
                  </div>
                </CrayonCard>
            ))}
          </div>
        </section>

        {/* Branding Guide Info-Box */}
        <section id="branding-cta" className="max-w-4xl mx-auto" data-aos="fade-up">
          <CrayonCard accentBorder={true} className="text-center p-8 md:p-12">
            <FileText className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              Questions about Branding?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              If you require detailed guidelines regarding logo scaling, specific hex-codes, or placement rules, please consult our Style Guide.
            </p>
            <div className="flex justify-center">
              <a
                  href={styleGuideAsset ? styleGuideAsset["download-path"] : "#"}
                  download={!!styleGuideAsset}
              >
                <CrayonButton variant="primary" icon={FileText}>
                  View Style Guide
                </CrayonButton>
              </a>
            </div>
          </CrayonCard>
        </section>

      </main>
  );
};

export default Assets;