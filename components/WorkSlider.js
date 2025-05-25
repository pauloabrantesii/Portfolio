// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Bluma-Clientes",
          path: "/icone_bluma.png",
          url: "https://apps.apple.com/br/app/bluma/id1060352606",
          bgColor: "bg-[#ff944e]",
          description: "Bluma",
        },
        {
          title: "Bluma-especialistas",
          path: "/bluma_especialista.png",
          url: "https://apps.apple.com/us/app/bluma-especialistas/id1350240798",
          bgColor: "bg-[#01373e]",
          description: "Especialistas",
        },
        {
          title: "CSF",
          path: "/csf.png",
          url: "https://apps.apple.com/br/app/csf/id1592396532",
          bgColor: "bg-[#fff]",
          description: "CSF",
        },
        {
          title: "Spark-Mobile",
          path: "/spark.png",
          url: "https://sparkmobile.com.br/",
          bgColor: "bg-[#fff]",
          description: "Spark",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer h-full">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className={`relative rounded-lg overflow-hidden flex items-center justify-center group ${image.bgColor}`}
                    key={index}
                  >
                    <Link
                      href={`${image.url}`}
                      target="_blank"
                      className="w-full h-full flex items-center justify-center relative"
                    >
                      {/* description */}
                      <div className="absolute top-4 left-4 z-20">
                        <h3 className="text-white text-xl font-bold drop-shadow-lg">
                          {image.description}
                        </h3>
                      </div>
                      <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                        {/* image */}
                        <div className="w-[80%] h-[80%] relative">
                          <Image
                            src={image.path}
                            fill
                            className="object-contain"
                            alt={image.title}
                          />
                        </div>
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
