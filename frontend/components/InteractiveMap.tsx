'use client';

import { useState } from 'react';

interface TourismRegion {
  id: string;
  name: string;
  description: string;
  x: number; // SVG x coordinate
  y: number; // SVG y coordinate
}

// Tourism regions with accurate coordinates for Sri Lanka map (viewBox: 0 0 400 600)
const tourismRegions: TourismRegion[] = [
  {
    id: 'colombo',
    name: 'Colombo',
    description: 'Capital city, colonial architecture, shopping, dining, and cultural experiences',
    x: 180,
    y: 180,
  },
  {
    id: 'cultural-triangle',
    name: 'Cultural Triangle',
    description: 'Ancient cities, UNESCO World Heritage sites including Sigiriya, Dambulla, Anuradhapura, and Polonnaruwa',
    x: 200,
    y: 280,
  },
  {
    id: 'hill-country',
    name: 'Hill Country',
    description: 'Tea plantations, cool climate, scenic train rides, Kandy, Nuwara Eliya, and Ella',
    x: 190,
    y: 240,
  },
  {
    id: 'south-coast',
    name: 'South Coast',
    description: 'Pristine beaches, Galle Fort, whale watching in Mirissa, and water sports',
    x: 170,
    y: 420,
  },
  {
    id: 'wildlife-parks',
    name: 'Wildlife Parks',
    description: 'Yala, Udawalawe, and Wilpattu National Parks - home to leopards, elephants, and diverse wildlife',
    x: 220,
    y: 380,
  },
  {
    id: 'east-coast',
    name: 'East Coast',
    description: 'Trincomalee, Batticaloa - pristine beaches, diving, and cultural heritage',
    x: 280,
    y: 300,
  },
];

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(selectedRegion === regionId ? null : regionId);
  };

  const selectedRegionData = tourismRegions.find(r => r.id === selectedRegion);

  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-800 mb-4">Explore Sri Lanka</h2>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto">
            Discover the diverse regions and key tourism areas across the beautiful island of Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-lg shadow-xl p-4 lg:p-8 border border-brand-200">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200 rounded-lg overflow-hidden border-4 border-brand-300">
                {/* SVG Map - Accurate Sri Lanka Shape */}
                <svg
                  viewBox="0 0 400 600"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Gradient for Sri Lanka island */}
                    <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e0f2fe" />
                      <stop offset="50%" stopColor="#bae6fd" />
                      <stop offset="100%" stopColor="#7dd3fc" />
                    </linearGradient>
                    
                    {/* Drop shadow filter */}
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#0284c7" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  
                  {/* Sri Lanka Island Shape - Accurate geographic outline */}
                  <path
                    d="M 140 80 
                       L 160 75 L 180 78 L 200 82 L 220 88 L 240 95 L 260 105 L 280 118 L 295 135 L 305 155 L 310 175 L 308 195 L 300 215 L 285 235 L 265 255 L 240 275 L 210 290 L 180 300 L 150 305 L 120 295 L 95 280 L 75 260 L 65 235 L 62 210 L 68 185 L 80 160 L 95 140 L 115 120 L 130 100 Z"
                    fill="url(#islandGradient)"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-brand-400"
                    filter="url(#shadow)"
                  />
                  
                  {/* Northern Peninsula (Jaffna area) */}
                  <path
                    d="M 200 82 
                       L 210 78 L 220 80 L 230 85 L 235 92 L 232 100 L 225 105 L 215 102 L 205 95 L 200 88 Z"
                    fill="url(#islandGradient)"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-brand-400"
                  />
                  
                  {/* Southern Peninsula detail */}
                  <path
                    d="M 150 305 
                       L 140 315 L 135 325 L 140 335 L 150 340 L 160 335 L 165 325 L 160 315 Z"
                    fill="url(#islandGradient)"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-400"
                  />
                  
                  {/* Region Markers - Clickable circles with accurate positioning */}
                  {tourismRegions.map((region) => {
                    const isSelected = selectedRegion === region.id;
                    const isHovered = hoveredRegion === region.id;
                    const cx = region.x;
                    const cy = region.y;
                    
                    return (
                      <g key={region.id}>
                        {/* Pulse animation for selected region */}
                        {isSelected && (
                          <>
                            <circle
                              cx={cx}
                              cy={cy}
                              r="30"
                              fill="currentColor"
                              className="text-brand-400 opacity-10"
                            />
                            <circle
                              cx={cx}
                              cy={cy}
                              r="20"
                              fill="currentColor"
                              className="text-brand-400 opacity-20 animate-ping"
                            />
                          </>
                        )}
                        
                        {/* Outer ring for hover effect */}
                        {isHovered && !isSelected && (
                          <circle
                            cx={cx}
                            cy={cy}
                            r="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-brand-500 opacity-50 animate-pulse"
                          />
                        )}
                        
                        {/* Main marker circle */}
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? "14" : isHovered ? "12" : "10"}
                          fill="currentColor"
                          stroke="white"
                          strokeWidth={isSelected ? "3" : "2"}
                          className={`cursor-pointer transition-all duration-300 ${
                            isSelected 
                              ? 'text-brand-600' 
                              : isHovered 
                              ? 'text-brand-500' 
                              : 'text-brand-400 hover:text-brand-500'
                          }`}
                          onClick={() => handleRegionClick(region.id)}
                          onMouseEnter={() => setHoveredRegion(region.id)}
                          onMouseLeave={() => setHoveredRegion(null)}
                        />
                        
                        {/* Inner dot for better visibility */}
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? "6" : "4"}
                          fill="white"
                          className="pointer-events-none"
                        />
                        
                        {/* Region label on hover/select */}
                        {(isSelected || isHovered) && (
                          <g>
                            {/* Label background */}
                            <rect
                              x={cx - 60}
                              y={cy - 35}
                              width="120"
                              height="24"
                              rx="12"
                              fill="currentColor"
                              className="text-brand-800 opacity-90"
                            />
                            <text
                              x={cx}
                              y={cy - 18}
                              textAnchor="middle"
                              className="text-xs font-semibold fill-white pointer-events-none"
                            >
                              {region.name}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Map overlay text */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-sm text-brand-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    Click on markers to learn more about each region
                  </p>
                </div>
              </div>

              {/* Region Legend */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {tourismRegions.map((region) => {
                  const isSelected = selectedRegion === region.id;
                  return (
                    <button
                      key={region.id}
                      onClick={() => handleRegionClick(region.id)}
                      className={`text-left p-3 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'bg-brand-100 border-brand-600 text-brand-800'
                          : 'bg-brand-50 border-brand-200 text-brand-700 hover:bg-brand-100 hover:border-brand-400'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-3 h-3 rounded-full ${
                          isSelected ? 'bg-brand-600' : 'bg-brand-400'
                        }`}></div>
                        <span className="text-sm font-semibold">{region.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Region Details Panel */}
          <div className="lg:col-span-1">
            {selectedRegionData ? (
              <div className="bg-white rounded-lg shadow-xl p-6 border border-brand-200 sticky top-24">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-800 mb-2">
                    {selectedRegionData.name}
                  </h3>
                  <p className="text-brand-600">
                    {selectedRegionData.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="w-full bg-brand-600 text-white py-2 rounded-lg font-semibold hover:bg-brand-700 transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="bg-brand-50 rounded-lg p-6 border border-brand-200 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-brand-700 font-medium mb-1">Select a Region</p>
                  <p className="text-sm text-brand-600">
                    Click on any marker or legend item to learn more about that tourism region
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

