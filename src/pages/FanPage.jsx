import React from 'react';
import CardList from '../components/CardList';

function FanPage() {
  return (
    <div className="min-h-screen bg-[#0f1115]">
      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20">
        {/* 헤더 섹션 */}
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            K-POP 아이돌
          </h1>
          <p className="text-base lg:text-lg text-gray-400">
            모든 K-POP 아이돌들을 만나보세요
          </p>
        </div>

        {/* 카드 그리드 레이아웃 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-4 lg:gap-6 auto-rows-max">
          <CardList 
            limit={0} 
            showMoreButton={false}
            className="contents" 
          />
        </div>
      </div>
    </div>
  );
}

export default FanPage; 