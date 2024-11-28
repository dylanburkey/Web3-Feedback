// Add scroll indicators to TOC
const toc = document.querySelector('.toc');
const tocList = document.querySelector('.toc-list');

function updateScrollIndicators() {
  if (!toc || !tocList) return;
  
  const hasOverflow = tocList.scrollWidth > tocList.clientWidth;
  if (!hasOverflow) {
    toc.removeAttribute('data-scroll');
    return;
  }

  const position = tocList.scrollLeft;
  const maxScroll = tocList.scrollWidth - tocList.clientWidth;

  if (position === 0) {
    toc.setAttribute('data-scroll', 'start');
  } else if (Math.ceil(position) >= maxScroll) {
    toc.setAttribute('data-scroll', 'end');
  } else {
    toc.setAttribute('data-scroll', 'both');
  }
}

// Update on load and scroll
window.addEventListener('load', updateScrollIndicators);
tocList?.addEventListener('scroll', updateScrollIndicators);
window.addEventListener('resize', updateScrollIndicators); 