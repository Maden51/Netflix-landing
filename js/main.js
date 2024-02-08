const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab content item

function selectItem() {
  removeBorder();
  removeShow();
  // add border to current tab
  this.classList.add('active');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('active'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab changes
tabItems.forEach(item => item.addEventListener('click', selectItem));