import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
  CarouselIndicator,
} from "@/components/ui/carousel";
import Link from "react";

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Featured Product"
                width={1920}
                height={1080}
                className="h-[480px] w-full object-cover object-center md:h-[600px]"
                style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-gradient-to-r from-black/50 to-transparent p-6 md:p-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white md:text-5xl">
                    Elevate Your Style
                  </h2>
                  <p className="max-w-md text-lg text-white">
                    Discover our latest collection of premium leather goods,
                    designed to elevate your everyday style.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Featured Promotion"
                width={1920}
                height={1080}
                className="h-[480px] w-full object-cover object-center md:h-[600px]"
                style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-gradient-to-r from-black/50 to-transparent p-6 md:p-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white md:text-5xl">
                    Summer Sale
                  </h2>
                  <p className="max-w-md text-lg text-white">
                    Enjoy up to 50% off on our latest summer collection. Don't
                    miss out on these amazing deals!
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Featured Collection"
                width={1920}
                height={1080}
                className="h-[480px] w-full object-cover object-center md:h-[600px]"
                style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-gradient-to-r from-black/50 to-transparent p-6 md:p-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white md:text-5xl">
                    Autumn Essentials
                  </h2>
                  <p className="max-w-md text-lg text-white">
                    Explore our latest collection of stylish and cozy autumn
                    essentials, perfect for the changing seasons.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-md transition-colors hover:bg-white">
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 shadow-md transition-colors hover:bg-white">
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </CarouselNext>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2">
          <div
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === 0 ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
          />
          <div
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === 1 ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
          />
          <div
            className={`h-3 w-3 rounded-full transition-colors ${
              currentIndex === 2 ? "bg-white" : "bg-white/50 hover:bg-white"
            }`}
          />
        </div>
      </Carousel>
    </section>
  );
};

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
export default HomeSlider;
