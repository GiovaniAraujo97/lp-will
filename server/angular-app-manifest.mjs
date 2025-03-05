
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/lp-will/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/services"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/iphone"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/cars"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/apartments"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/mentorship"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/lp-will/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/lp-will",
    "route": "/Program%20Files/Git/lp-will/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10538, hash: 'e5cfc1fd2874aae7ee3e79bf4550260db511bd08d0c684e76c34b0c7892757bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '78957d7cad72df74c2e44f0d849873f495af8989207355f85b478567f9f54f2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4AYXMOUO.css': {size: 9895, hash: 'Vi7Vmv4hwfE', text: () => import('./assets-chunks/styles-4AYXMOUO_css.mjs').then(m => m.default)}
  },
};
