const routes = {
  home: () => '/',
  category: (slug = ':slug') => `/category/${slug}`,
  search: (slug = ':slug') => `/search/${slug}`,
}

export { routes }
