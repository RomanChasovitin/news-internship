const routes = {
  home: () => '/',
  category: (slug = ':slug') => `/category/${slug}`,
  newsDetails: (slug = ':slug') => `/news/${slug}`,
  search: () => '/search',
  fullNews: () => '/article/:id',
}

export { routes }
