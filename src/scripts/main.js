'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbsContainer = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbsContainer.addEventListener('click', (evt) => {
    const target = evt.target;
    const clickedElement =
      target.tagName === 'IMG' ? target.parentNode : target;

    if (clickedElement.tagName === 'A' && clickedElement.hasAttribute('href')) {
      evt.preventDefault();

      const newImageSrc = clickedElement.getAttribute('href');

      largeImg.src = newImageSrc;
      largeImg.alt = clickedElement.getAttribute('title');
    }
  });
});
