// Placeholder submit handler — wire this to a real form backend (e.g. Formspree,
// Tally, or a simple serverless endpoint) before this page goes live.
document.getElementById('lead-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const note = document.getElementById('form-note');
  note.hidden = false;
  e.target.reset();
});
