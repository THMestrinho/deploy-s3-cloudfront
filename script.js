document.getElementById('timeBtn').addEventListener('click', () => {
  document.getElementById('time').textContent = new Date().toLocaleString('pt-BR');
});
