import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const banners = [
    {
      id: 1,
      title: 'LE SSERAFIM',
      subtitle: 'EASY',
      description: '르세라핌의 시그니처 사운드와 함께 돌아온 신곡 EASY',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMjBfMTg1%2FMDAxNzA4NDAwMDYwNTI1.1yu_MQbS6vQXtNP5ApvfaXCTMhEjfNJ9yaJ1mjiIdkcg.HQd4iu7Ce9eD-oEamQlr9o7Bgn1Jxh32mMyyrePvGJ0g.JPEG%2F%25B8%25A3%25BC%25BC%25B6%25F3%25C7%25CB_%25C0%25CC%25C1%25F6_%25B0%25A1%25BB%25E7%25C7%25D8%25BC%25AE5.jpg&type=sc960_832',
      tag: 'NEW RELEASE',
      buttonText: '뮤직비디오 보기',
      buttonLink: 'https://youtu.be/EfpFi4hcH3E'
    },
    {
      id: 2,
      title: 'NewJeans',
      subtitle: 'Super Shy',
      description: '뉴진스의 청량한 매력이 돋보이는 여름 시그니처 송',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F028%2F2023%2F08%2F25%2F0002653772_001_20230825132509358.jpg&type=sc960_832',
      tag: 'HOT',
      buttonText: '팬페이지 가기',
      buttonLink: '/fanpage/newjeans'
    },
    {
      id: 3,
      title: 'SEVENTEEN',
      subtitle: '음악의 신',
      description: '세븐틴의 10주년 기념 스페셜 앨범 발매',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMjZfNDcg%2FMDAxNjk4MzE4MDM3NzQ3.CAEt-e1yWDCizdcN2VlJ4JaV1E4LSJn4nBUcr96LSGMg.VtEVdIDiBkWyQGWTygjgPzNIujsUb4Z2uhZIoEsnfHEg.JPEG.surly-_-%2F4.JPG&type=sc960_832',
      tag: 'SPECIAL',
      buttonText: '자세히 보기',
      buttonLink: '/fanpage/seventeen'
    },
    {
      id: 4,
      title: 'IVE',
      subtitle: 'I AM',
      description: '아이브의 첫 정규 앨범 발매 기념 쇼케이스',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F408%2F2023%2F05%2F03%2F0000187698_002_20230503103505993.jpg&type=sc960_832',
      tag: 'SHOWCASE',
      buttonText: '예매하기',
      buttonLink: '/showcase/ive'
    },
    {
      id: 5,
      title: 'BTS',
      subtitle: '데뷔 10주년',
      description: 'BTS와 아미가 함께 만든 10년의 역사',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MTZfOTUg%2FMDAxNjg2ODc5MzU5Mzg4.aOqfV8RsUWgjUCdnDw2z0AFjXvpDL4K5kgYuUJjehYgg.ZyeIyTezYNOkXCFN7hPKKPjq_Dzv9972l1LFnj0W8Bsg.PNG.jongy0644%2Fimage.png&type=sc960_832',
      tag: 'ANNIVERSARY',
      buttonText: '축하하기',
      buttonLink: '/bts/10th'
    },
    {
      id: 6,
      title: 'BLACKPINK',
      subtitle: 'BORN PINK',
      description: '블랙핑크 데뷔 10주년 기념 콘서트',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F108%2F2023%2F09%2F01%2F0003178512_002_20230901151701397.jpg&type=sc960_832',
      tag: 'CONCERT',
      buttonText: '공연 정보',
      buttonLink: '/concert/blackpink'
    },
    {
      id: 7,
      title: 'TWICE',
      subtitle: 'READY TO BE',
      description: '트와이스 미니 12집 컴백 쇼케이스',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMDZfOTEg%2FMDAxNjc1NjkxNTI0NzM0.QEhqJaisXTo4BvQnTIMhu7-teEMRMRnnaui_Nui0MnEg.TIgNbBVU8t2o1PRDPvsrUQqjzak7Y9f0OfHve7qx-HAg.JPEG.human9831%2F20230206_154112001.jpg&type=sc960_832',
      tag: 'COMEBACK',
      buttonText: '앨범 미리보기',
      buttonLink: '/album/twice'
    },
    {
      id: 8,
      title: 'Stray Kids',
      subtitle: '5-STAR',
      description: '스트레이 키즈의 새로운 도전',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMzBfMTgx%2FMDAxNzAxMzQ3MDE0MTU0.gBfYyy48RCZ2i3Kj6ow8KUKjQjZXoq9uxmV70QNe6ccg.h-WLHni9v60oC07lfiPN-P2gbp7DC165wqNsRv_iXM8g.JPEG.sosorodo%2F737ab104.jpg&type=sc960_832',
      tag: 'NEW ALBUM',
      buttonText: '자세히 보기',
      buttonLink: '/album/straykids'
    },
    {
      id: 9,
      title: 'aespa',
      subtitle: 'Drama',
      description: '에스파의 새로운 시그니처 사운드',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMTFfMTQx%2FMDAxNjM2NTcwMzQ2ODg2.LEAK4T8ehjijDLQ3XgCkPl5OtoXli6m5TtKmTIyKOc4g.yjUq-7lwZed5oq3BIA8VO55nenu6qNl93-C1LU8ZWOwg.JPEG.ksy1327%2F243417457_337825511474613_7668435415179885661_n.jpeg&type=sc960_832',
      tag: 'NEW RELEASE',
      buttonText: '뮤직비디오 보기',
      buttonLink: '/mv/aespa'
    },
    {
      id: 10,
      title: 'TXT',
      subtitle: 'Sugar Rush Ride',
      description: '투모로우바이투게더의 달콤한 여정',
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMDFfMjg0%2FMDAxNTgwNTQ3OTI0MjEx.xt7B6H6H33Xu-1ZsoBeWAAFPcIohSHd8HQkR8WhkV_og.2GN9h8b1YyiFgDMGoZvVSckK-LnQ8f6V3GVGHZVOyp0g.JPEG.pihksky%2FNaverBlog_20200201_180523_00.jpg&type=sc960_832',
      tag: 'HOT',
      buttonText: '팬페이지 가기',
      buttonLink: '/fanpage/txt'
    }
  ];

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-30
                 w-12 h-12 flex items-center justify-center
                 bg-white/10 hover:bg-white/20 backdrop-blur-md
                 rounded-full border border-white/10
                 text-white/80 hover:text-white
                 transition-all duration-300
                 shadow-lg shadow-black/20
                 group"
    >
      <svg
        className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-30
                 w-12 h-12 flex items-center justify-center
                 bg-white/10 hover:bg-white/20 backdrop-blur-md
                 rounded-full border border-white/10
                 text-white/80 hover:text-white
                 transition-all duration-300
                 shadow-lg shadow-black/20
                 group"
    >
      <svg
        className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="relative">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .animate-progress {
            animation: progress 5s linear;
            transform-origin: left;
          }
        `
      }} />
      <section className="relative h-[600px] overflow-hidden rounded-2xl">
        <Slider {...settings} className="h-full">
          {banners.map((banner) => (
            <div key={banner.id} className="relative h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#15192B]/90 to-transparent z-10" />
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 container mx-auto px-6 flex flex-col justify-center">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-1.5 bg-purple-500/80 
                             text-white text-sm font-medium rounded-full mb-4">
                    {banner.tag}
                  </span>
                  <h2 className="text-6xl font-bold text-white mb-2">
                    {banner.title}
                  </h2>
                  <h3 className="text-4xl font-bold text-white/90 mb-4">
                    {banner.subtitle}
                  </h3>
                  <p className="text-lg text-white/80 mb-8">
                    {banner.description}
                  </p>
                  <a
                    href={banner.buttonLink}
                    className="inline-flex items-center px-6 py-3 
                           bg-white/10 hover:bg-white/20 backdrop-blur-md 
                           text-white rounded-full 
                           transition-all duration-300 group"
                  >
                    {banner.buttonText}
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Banner; 