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

document.querySelector('#contact-form').addEventListener('submit', async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const request = `Pedido de ilustração — ${data.get('name')}\nEmail: ${data.get('email')}\nProjeto: ${data.get('service')}\n\n${data.get('message')}`;
  const status = document.querySelector('#form-status');
  try {
    await navigator.clipboard.writeText(request);
    status.textContent = 'Pedido copiado! Cola-o numa mensagem de email e envia-o para a Bárbara.';
  } catch {
    const helper = document.createElement('textarea');
    helper.value = request;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.append(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
    status.textContent = 'Pedido preparado e copiado. Cola-o numa mensagem para a Bárbara.';
  }
});
