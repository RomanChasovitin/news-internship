const routes = {
  home: () => '/',
  category: (slug = ':slug') => `/category/${slug}`,
}

export { routes }
