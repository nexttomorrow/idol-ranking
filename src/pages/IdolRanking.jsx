import React, { useState } from 'react';
import Ranking from '../components/Ranking';
import IdolModal from '../components/FloatingSearch/IdolModal';

// commonStyles 객체 추가
const commonStyles = {
  layout: {
    page: "min-h-screen bg-[#0f1115]",
    container: "container mx-auto px-4 lg:px-8 pt-32 pb-20"
  },
  header: {
    wrapper: "mb-12",
    title: "text-3xl lg:text-4xl font-bold text-white mb-4",
    subtitle: "text-base lg:text-lg text-gray-400"
  },
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6",
  card: {
    base: "bg-[#1a1b1e] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1",
    header: "flex items-center justify-between mb-4 pb-4 border-b border-gray-800",
    title: "text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300",
    subtitle: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
  },
  badge: "flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 font-bold"
};

// rankingGroups 데이터 추가
const rankingGroups = [
  { 
    title: 'TOP 1-10', 
    subtitle: '최상위 인기 아이돌',
    start: 1, 
    end: 10 
  },
  { 
    title: 'TOP 11-20',
    subtitle: '급상승 중인 아이돌',
    start: 11, 
    end: 20 
  },
  { 
    title: 'TOP 21-30',
    subtitle: '주목받는 신인',
    start: 21, 
    end: 30 
  },
  { 
    title: 'TOP 31-40',
    subtitle: '성장하는 아이돌',
    start: 31, 
    end: 40 
  },
  { 
    title: 'TOP 41-50',
    subtitle: '잠재력 있는 아이돌',
    start: 41, 
    end: 50 
  },
  { 
    title: 'TOP 51-60',
    subtitle: '새로운 도전',
    start: 51, 
    end: 60 
  }
];

function IdolRanking() {
  // 모달 상태 관리
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIdolClick = (idol) => {
    setSelectedIdol(idol);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIdol(null);
  };

  return (
    <div className={commonStyles.layout.page}>
      <div className={commonStyles.layout.container}>
        {/* 헤더 섹션 */}
        <div className={commonStyles.header.wrapper}>
          <h1 className={commonStyles.header.title}>
            아이돌 랭킹
          </h1>
          <p className={commonStyles.header.subtitle}>
            팬덤 규모를 기준으로 한 K-POP 아이돌 순위를 확인해보세요
          </p>
        </div>
        
        {/* 랭킹 그리드 */}
        <div className={commonStyles.grid}>
          {rankingGroups.map((group, index) => (
            <div key={group.title} 
                 className={commonStyles.card.base}>
              <div className="p-6">
                {/* 헤더 섹션 */}
                <div className={commonStyles.card.header}>
                  <div>
                    <h3 className={commonStyles.card.title}>
                      {group.title}
                    </h3>
                    <p className={commonStyles.card.subtitle}>
                      {group.subtitle}
                    </p>
                  </div>
                  <span className={commonStyles.badge}>
                    {Math.floor((index / 2) + 1)}
                  </span>
                </div>
                
                {/* 랭킹 리스트 */}
                <div className="space-y-2">
                  <Ranking 
                    start={group.start} 
                    end={group.end}
                    onIdolClick={handleIdolClick}
                    className="hover:bg-purple-500/5 rounded-xl
                              transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      <IdolModal
        idol={selectedIdol}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default IdolRanking;