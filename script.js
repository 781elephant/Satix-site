const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

function trackEvent(name, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('contact_email_click', { location: window.location.pathname });
  });
});

document.querySelectorAll('a[href="#quote"], a[href$="#quote"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('quote_cta_click', { location: window.location.pathname });
  });
});

const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = 'Satix UAE installation inquiry';
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Site type: ${data.get('siteType') || ''}`,
      '',
      'Location and brief:',
      data.get('message') || ''
    ].join('\n');

    trackEvent('lead_form_submit', {
      form_name: 'satix_quote',
      site_type: data.get('siteType') || 'Not specified'
    });

    window.location.href = `mailto:orders@equipify.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
