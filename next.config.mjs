/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.unsplash.com" }],
    // 외부에서 이미지를 가져오는 것 자체가 보안상 이슈가 있을 수 있기 때문에 허용해줄 수 있는 경로를 추가
  },
};

export default nextConfig;
