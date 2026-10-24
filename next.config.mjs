/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/roofing-services', destination: '/servicos-de-alvenaria/', permanent: true },
      { source: '/roof-repairs', destination: '/pequenos-reparos/', permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: '/reboco-de-paredes/', permanent: true },
      { source: '/roof-leak-repairs', destination: '/impermeabilizacao/', permanent: true },
      { source: '/roof-maintenance', destination: '/manutencao-predial/', permanent: true },
      { source: '/flat-roofing', destination: '/pintura-residencial/', permanent: true },
      { source: '/slate-and-tile-roofing', destination: '/reformas-residenciais/', permanent: true },
      { source: '/roof-replacements', destination: '/construcao-residencial/', permanent: true },
      { source: '/gutter-repairs', destination: '/assentamento-de-pisos/', permanent: true },
      { source: '/chimney-repairs', destination: '/servicos-de-alvenaria/', permanent: true },
      { source: '/general-plumbing', destination: '/servicos-de-alvenaria/', permanent: true },
      { source: '/hot-water-systems', destination: '/pintura-residencial/', permanent: true },
      { source: '/blocked-drains', destination: '/servicos-de-alvenaria/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
