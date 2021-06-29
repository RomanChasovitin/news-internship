const routes = {
  home: () => '/',
  category: (slug = ':slug') => `/category/${slug}`,
  search: () => '/search',
}

export { routes }
