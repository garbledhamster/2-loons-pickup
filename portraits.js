(() => {
  const crew = document.getElementById('crew');
  const firstPortrait = crew?.querySelector('.portrait');
  if (!firstPortrait) return;

  function updatePortraits() {
    crew.dataset.portraitState = crew.classList.contains('active') ? 'rest' : 'away';
  }

  // Commit the starting position so the first visit can transition into place.
  crew.dataset.portraitState = 'start';
  void getComputedStyle(firstPortrait).translate;
  updatePortraits();
  document.addEventListener('panelchange', updatePortraits);
})();
