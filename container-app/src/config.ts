export interface App {
  url: string,
  label: string,
  route: string,
  icon: string,
}

interface Config {
  apps: App[],
}

const config: Config = {
  apps: [
    {
      url: 'http://audio-app.surge.sh/',
      label: 'Audio',
      route: 'audio',
      icon: 'headphones.svg',
    },
    {
      url: 'http://ecommerce-application.surge.sh/',
      label: 'Ecommerce',
      route: 'ecommerce',
      icon: 'ecommerce.svg',
    },
  ],
};

export default config;
