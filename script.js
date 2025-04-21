document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Add hover effect to download button
const downloadBtn = document.querySelector('.download-btn');
downloadBtn.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.05)';
  this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
});

downloadBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)';
  this.style.boxShadow = 'none';
});

downloadBtn.addEventListener('click', function() {
  console.log('Proposal downloaded at:', new Date().toLocaleString());
});