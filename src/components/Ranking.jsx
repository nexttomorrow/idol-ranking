import React from 'react';
import { rankingData } from '../data/rankingData';
import { FaHeart } from 'react-icons/fa';

function Ranking({ start, end, onIdolClick, className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {rankingData.slice(start - 1, end).map((idol, index) => (
        <button
          key={idol.id}
          onClick={() => onIdolClick(idol)}
          className="w-full flex items-center gap-4 p-3
                   transition-all duration-300
                   hover:bg-purple-500/5 rounded-xl
                   group"
        >
          {/* 순위 표시 */}
          <span className="w-6 text-center font-bold
                        text-gray-400 group-hover:text-purple-400
                        transition-colors duration-300">
            {start + index}
          </span>
          
          {/* 아이돌 이미지 */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden
                        ring-2 ring-purple-500/20 group-hover:ring-purple-500/40
                        transition-all duration-300">
            <img
              src={idol.image}
              alt={idol.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 아이돌 정보 */}
          <div className="flex-1 text-left">
            <h4 className="font-medium text-white group-hover:text-purple-400
                         transition-colors duration-300">
              {idol.name}
            </h4>
            <p className="text-sm text-gray-400 group-hover:text-gray-300
                       transition-colors duration-300">
              {idol.type}
            </p>
          </div>
          
          {/* 팬 수 */}
          <div className="flex items-center gap-2 px-3 py-1
                       bg-black/20 rounded-full
                       group-hover:bg-purple-500/10
                       transition-all duration-300">
            <FaHeart className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs text-white">
              {(idol.likes / 1000000).toFixed(1)}M
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Ranking; 