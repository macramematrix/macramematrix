/* ============================================================
   MACRAME MATRIX — Shop Page Filters & WhatsApp Links
   ============================================================ */

(function () {
  'use strict';

  var WHATSAPP_NUMBER = '918262995455'; // Replace with actual number

  // --- Product Filtering ---
  var filterTabs = document.querySelectorAll('.filter-tab');
  var productCards = document.querySelectorAll('.product-card[data-categories]');
  var emptyState = document.getElementById('shop-empty');
  var productGrid = document.getElementById('product-grid');

  if (filterTabs.length > 0 && productCards.length > 0) {
    filterTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        // Update active state
        filterTabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        var filter = this.getAttribute('data-filter');
        var visibleCount = 0;

        productCards.forEach(function (card) {
          var categories = card.getAttribute('data-categories') || '';

          if (filter === 'all' || categories.indexOf(filter) !== -1) {
            card.style.display = '';
            card.classList.add('visible');
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Toggle empty state
        if (emptyState) {
          emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
        if (productGrid) {
          productGrid.style.display = visibleCount === 0 ? 'none' : '';
        }
      });
    });
  }


  // --- WhatsApp Product Inquiry Links ---
  document.querySelectorAll('.product-card__link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var productName = this.getAttribute('data-product') || 'a product';
      var message = encodeURIComponent(
        'Hi Monika! I\'m interested in "' + productName + '" from macramematrix.com. Could you share more details?'
      );
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank');
    });
  });

})();
