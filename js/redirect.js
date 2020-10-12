if (window.location.pathname === 'https://workep.com'
  || window.location.pathname === 'https://workep.com/product.html'
  || window.location.pathname === 'https://workep.com/made-for-google.html'
  || window.location.pathname === 'https://workep.com/pricing.html'
  || window.location.pathname === 'https://workep.com/partners.html'
  || window.location.pathname === 'https://workep.com/workep-for-education.html'
  || window.location.pathname === 'https://workep.com/download-apps.html') {
  $.get('https://api.workep.com/api/country-code', (response) => {
    console.log(response)
    if (response.data !== 'ES') return

    if (window.location.pathname === 'https://workep.com') {
      window.location = 'https://workep.com/es/es.html'
      return
    }

    if (window.location.pathname === 'https://workep.com/product.html') {
      window.location = 'https://workep.com/es/producto.html'
      return
    }

    if (window.location.pathname === 'https://workep.com/made-for-google.html') {
      window.location = 'https://workep.com/es/hecho-para-google.html'
      return
    }

    if (window.location.pathname === 'https://workep.com/pricing.html') {
      window.location = 'https://workep.com/es/precios.html';
      return
    }

    if (window.location.pathname === 'https://workep.com/partners.html') {
      window.location = 'https://workep.com/es/socios.html';
      return
    }

    if (window.location.pathname === 'https://workep.com/workep-for-education.html') {
      window.location = 'https://workep.com/es/workep-para-educacion.html';
      return
    }

    if (window.location.pathname === 'https://workep.com/download-apps.html') {
      window.location = 'https://workep.com/es/descargar-apps.html'
      return
    }
  })
}
