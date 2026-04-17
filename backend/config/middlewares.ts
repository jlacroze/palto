module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://palto-ten.vercel.app',
        'http://localhost:5173'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      headers: '*',
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];