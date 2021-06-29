const routes = {
  home: () => '/',
  category: (slug = ':slug') => `/category/${slug}`,
  newsDetails: (slug = ':slug', url = '') => `/news/${slug}${url ? `?url=${url}` : ''}`,
  search: () => '/search',
}

export { routes }
