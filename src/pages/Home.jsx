import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Ranking from '../components/Ranking';
import IdolModal from '../components/FloatingSearch/IdolModal';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import { FaHeart, FaComment, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import VoteCard from '../components/VoteCard';
import { voteData } from '../data/voteData';

// CustomArrow 컴포넌트 추가
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10
              ${direction === 'prev' ? '-left-5' : '-right-5'}
              w-10 h-10 flex items-center justify-center
              bg-white dark:bg-gray-800 rounded-full
              shadow-lg dark:shadow-gray-900/30
              border border-gray-200 dark:border-gray-700
              text-gray-600 dark:text-gray-400
              hover:bg-gray-50 dark:hover:bg-gray-700
              transition-all duration-200`}
  >
    {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
  </button>
);

// rankingGroups 데이터 수정
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
  }
];

function Home() {
  // 모달 상태 관리 추가
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

  // 반응형 슬라이더 설정 개선
  const commonSliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    dotsClass: "slick-dots !bottom-[-3rem]",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul className="flex items-center justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700
                        hover:bg-purple-400 dark:hover:bg-purple-500
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                        dark:focus:ring-offset-gray-900
                        transition-all duration-200"></button>
    )
  };

  // 슬라이더 설정 확장
  const sliderSettings = {
    ...commonSliderSettings,
  };

  const rankingSliderSettings = {
    ...commonSliderSettings,
  };

  // 페이지 최상단 이동 핸들러 추가
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0f1115] transition-colors duration-200">
      {/* 배너 섹션 */}
      <Banner />

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* 인기 아이돌 섹션 */}
        <section className="mb-16 lg:mb-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center 
                         justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                인기 아이돌
              </h2>
              <p className="mt-2 text-sm lg:text-base text-gray-400">
                지금 가장 인기있는 K-POP 아이돌
              </p>
            </div>
            <Link 
              to="/fanpage"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full
                        bg-[#1a1b1e] hover:bg-[#24252a]
                        transition-all duration-300"
            >
              <span className="text-gray-300 font-medium">더보기</span>
              <HiArrowLongRight className="w-5 h-5 text-gray-400 
                                        group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* 그리드 레이아웃 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            <CardList 
              limit={12} 
              showMoreButton={false}
              className="contents"
            />
          </div>
        </section>

        {/* 아이돌 랭킹 섹션 개선 */}
        <section className="mb-16 lg:mb-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center 
                          justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                아이돌 랭킹
              </h2>
              <p className="mt-2 text-sm lg:text-base text-gray-400">
                실시간 팬덤 규모 기준 TOP 30
              </p>
            </div>
            <Link 
              to="/ranking"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full
                        bg-[#1a1b1e] hover:bg-[#24252a]
                        transition-all duration-300"
            >
              <span className="text-gray-300 font-medium">전체 순위 보기</span>
              <HiArrowLongRight className="w-5 h-5 text-gray-400 
                                        group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 랭킹 그리드 개선 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {rankingGroups.map((group, index) => (
              <div key={group.title} 
                   className="group bg-[#1a1b1e] rounded-2xl overflow-hidden
                            transition-all duration-300
                            hover:shadow-xl hover:shadow-purple-500/10
                            hover:-translate-y-1">
                <div className="p-6">
                  {/* 헤더 섹션 */}
                  <div className="flex items-center justify-between mb-4
                                pb-4 border-b border-gray-800">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1
                                  group-hover:text-purple-400
                                  transition-colors duration-300">
                        {group.title}
                      </h3>
                      <p className="text-sm text-gray-400
                                  group-hover:text-gray-300
                                  transition-colors duration-300">
                        {group.subtitle}
                      </p>
                    </div>
                    <span className="flex items-center justify-center
                                  w-10 h-10 rounded-full
                                  bg-purple-500/10
                                  text-purple-400 font-bold">
                      {index + 1}
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
        </section>

        {/* 투표 섹션 */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                팬 투표
              </h2>
              <p className="mt-2 text-gray-400">
                아이돌 소속사의 공식 투표에 참여해보세요
              </p>
            </div>
            <Link 
              to="/vote"
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full
                        bg-[#1a1b1e] hover:bg-[#24252a]
                        transition-all duration-300"
            >
              <span className="text-gray-300 font-medium">전체 투표 보기</span>
              <HiArrowLongRight className="w-5 h-5 text-gray-400 
                                        group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 투표 슬라이더 */}
          <div className="relative px-8">
            <Slider {...sliderSettings}>
              {voteData.slice(0, 12).map(vote => (
                <div key={vote.id} className="px-4">
                  <Link 
                    to={`/votes/${vote.id}`}
                    className="block transition-transform duration-300 hover:-translate-y-1"
                  >
                    <VoteCard 
                      vote={vote}
                      className="bg-[#1a1b1e] rounded-2xl overflow-hidden"
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </section>
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

export default Home; 