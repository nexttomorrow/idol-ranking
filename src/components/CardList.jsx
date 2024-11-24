import React, { useState } from 'react';
import { rankingData } from '../data/rankingData';
import IdolModal from './FloatingSearch/IdolModal';
import { FaHeart } from 'react-icons/fa';

function CardList({ limit = 0, showMoreButton = true, className = '' }) {
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedIdols = limit > 0 
    ? rankingData.slice(0, limit) 
    : rankingData;

  const handleIdolClick = (idol) => {
    setSelectedIdol(idol);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 ${className}`}>
        {displayedIdols.map(idol => (
          <button
            key={idol.id}
            onClick={() => handleIdolClick(idol)}
            className="group relative bg-[#1a1b1e] rounded-2xl
                     overflow-hidden
                     transition-all duration-300
                     hover:-translate-y-1
                     hover:shadow-xl hover:shadow-purple-500/10
                     focus:outline-none focus:ring-2 focus:ring-purple-500
                     w-full"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <img
                src={idol.image}
                alt={idol.name}
                className="w-full h-full object-cover
                         transition-transform duration-300
                         group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 z-20
                           px-3 py-1 rounded-full text-sm
                           bg-black/30 backdrop-blur-md 
                           border border-white/10
                           text-white font-medium
                           transition-all duration-300
                           group-hover:bg-black/50">
                {idol.type}
              </span>
              <span className="absolute top-3 right-3 z-20
                          px-2.5 py-1 rounded-full text-sm
                          bg-black/30 backdrop-blur-md
                          border border-white/10
                          flex items-center gap-1.5
                          transition-all duration-300
                          group-hover:bg-black/50">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-white text-sm font-medium">{idol.rating}</span>
              </span>
            </div>

            <div className="p-5">
              <div className="text-left">
                <h3 className="text-lg font-bold text-white mb-1 
                             transition-colors duration-300
                             group-hover:text-purple-400">
                  {idol.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4 
                             transition-colors duration-300
                             group-hover:text-gray-300">
                  {idol.name} 공식 팬클럽
                </p>
              </div>
              <div className="flex items-center gap-2 
                             bg-black/20 rounded-full px-4 py-2
                             transition-all duration-300
                             group-hover:bg-purple-500/10">
                <FaHeart className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs text-purple-400 font-medium">FAN</span>
                <span className="text-xs text-white font-medium">
                  {(idol.likes / 1000000).toFixed(1)}M
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <IdolModal
        idol={selectedIdol}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default CardList; 