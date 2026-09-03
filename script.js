const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

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

    window.location.href = `mailto:orders@equipify.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
