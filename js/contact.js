/* ============================================================
   MACRAME MATRIX — Contact Form → WhatsApp Handler
   ============================================================ */

(function () {
  'use strict';

  var WHATSAPP_NUMBER = '918262995455'; // Replace with actual number

  var form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (form.querySelector('[name="name"]') || {}).value || '';
      var email = (form.querySelector('[name="email"]') || {}).value || '';
      var subject = (form.querySelector('[name="subject"]') || {}).value || 'General Inquiry';
      var message = (form.querySelector('[name="message"]') || {}).value || '';

      if (!name.trim() || !message.trim()) {
        alert('Please fill in your name and message.');
        return;
      }

      var whatsappMessage = 'Hi Monika! I reached out via macramematrix.com.\n\n'
        + 'Name: ' + name + '\n'
        + 'Email: ' + email + '\n'
        + 'Subject: ' + subject + '\n'
        + 'Message: ' + message;

      var encoded = encodeURIComponent(whatsappMessage);
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encoded, '_blank');

      // Show confirmation
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        var originalText = btn.textContent;
        btn.textContent = 'Opening WhatsApp...';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      }
    });
  }

})();
