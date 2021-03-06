var countryCodes = [
  'mx',
  'co',
  'ar',
  've',
  'pe',
  'cl',
  'gt',
  'ec',
  'cu',
  'bo',
  'do',
  'hn',
  'sv',
  'py',
  'ni',
  'cr',
  'pr',
  'pa',
  'uy',
  'gq',
]

if (window.location.pathname === '/'
  || window.location.pathname === '/product.html'
  || window.location.pathname === '/made-for-google.html'
  || window.location.pathname === '/pricing.html'
  || window.location.pathname === '/partners.html'
  || window.location.pathname === '/workep-for-education.html'
  || window.location.pathname === '/download-apps.html') {
  $.get('https://api.workep.com/api/country-code', function (response) {
    var countryCode = response.data.toLowerCase()

    if (!countryCodes.includes(countryCode.toLowerCase())) return

    if (window.location.pathname === '/') {
      window.location = 'https://workep.com/es/es.html'
      return
    }

    if (window.location.pathname === '/product.html') {
      window.location = 'https://workep.com/es/producto.html'
      return
    }

    if (window.location.pathname === '/made-for-google.html') {
      window.location = 'https://workep.com/es/hecho-para-google.html'
      return
    }

    if (window.location.pathname === '/pricing.html') {
      window.location = 'https://workep.com/es/precios.html';
      return
    }

    if (window.location.pathname === '/partners.html') {
      window.location = 'https://workep.com/es/socios.html';
      return
    }

    if (window.location.pathname === '/workep-for-education.html') {
      window.location = 'https://workep.com/es/workep-para-educacion.html';
      return
    }

    if (window.location.pathname === '/download-apps.html') {
      window.location = 'https://workep.com/es/descargar-apps.html'
      return
    }
  })
}
