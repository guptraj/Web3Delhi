"use client";

import SpecialPrize from "@/components/sub/SpecialPrizeCardImage";
import revealing from "@/public/revealing.png";

export default function Tracks() {
  const tracks: any[] = [
    {
      trackName: "Polygon",
      trackLogo: revealing,
      trackText:
        "Best hack built on Ethereum: $150 & \nEthereum + Polygon: $200",
      color: "#07A158",
    },
    {
      trackName: "Solana",
      trackLogo: revealing,
      trackText:
        "$100 for best beginners project, $250 for best intermediate project, $500 for the best advanced project",
      color: "#07A158",
    },

    {
      trackName: "QuillAudits",
      trackLogo: revealing,
      trackText:
        "Wagsi grants worth $1500, Schwags for top developers using Quillcheck API/Quillai API, Best projects can pitch their projects to our incubator.",
      color: "#07A158",
    },
    {
      trackName: "QuillAudits",
      trackLogo: revealing,
      trackText:
        "Wagsi grants worth $1500, Schwags for top developers using Quillcheck API/Quillai API, Best projects can pitch their projects to our incubator.",
      color: "#07A158",
    },
  ];
  return (
    <section
      id="tracks"
      className="w-full flex flex-col justify-center items-center overflow-hidden  mb-8 z-[45]  "
    >
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-['Space Grotesk'] text-[30px] md:text[45px] lg:text-[54px] md:mt-4">
          Track Prizes
        </h1>

        {tracks.length > 0 ? (
          <>
            <div className="w-full px-12 grid grid-cols-1 gap-2 mb-4 justify-center items-center sm:grid-cols-2 sm:grid-rows-auto cursor-pointer">
              {tracks.map((track) => (
                <SpecialPrize
                  key={track.trackName}
                  trackName={track.trackName}
                  trackLogo={track.trackLogo}
                  trackText={track.trackText}
                  color={track.color}
                />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
