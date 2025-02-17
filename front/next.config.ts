import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com','picsum.photos'], // 허용할 이미지 호스트 도메인 추가
  },
};

export default nextConfig;
