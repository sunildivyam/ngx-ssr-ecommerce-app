export const API_URLS = {
  GLOBAL_CONFIG: '/api/remote-config',
  CATEGORIES: {
    ALL: '/api/categories',
    ADD: '/api/categories/add',
    UPDATE: '/api/categories/update',
    DELETE: '/api/categories/delete',
    LIST: '/api/categories/list' // Live categories
  },
  PRODUCTS: {
    ALL: '/api/products',
    ADD: '/api/products/add',
    UPDATE: '/api/products/update',
    DELETE: '/api/products/delete',
    LIST: '/api/products/list' // Live products
  },
  CART: {
    GET: '/api/cart',
    ADD: '/api/cart/add',
    UPDATE: '/api/cart/update',
    DELETE: '/api/cart/delete'
  },
  WISHLIST: {
    GET: '/api/wishlist',
    ADD: '/api/wishlist/add',
    UPDATE: '/api/wishlist/update',
    DELETE: '/api/wishlist/delete'
  }
};
