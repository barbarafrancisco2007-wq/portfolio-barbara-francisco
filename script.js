const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuButton.textContent = open ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  menuButton.textContent = '☰';
}));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Pedido de ilustração — ${data.get('service')}`;
  const body = `Olá, Bárbara!\n\nO meu nome: ${data.get('name')}\nO meu email: ${data.get('email')}\nProjeto: ${data.get('service')}\n\nSobre o projeto:\n${data.get('message')}`;
  const status = document.querySelector('#form-status');
  status.textContent = 'A abrir o teu programa de email. Se não abrir, escreve para barbarafrancisco.ilustradora@gmail.com.';
  window.location.href = `mailto:barbarafrancisco.ilustradora@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});