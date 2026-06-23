/* EXERCÍCIO 4 */
const toggle = document.getElementById('toggle-tema');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark')
        ? 'Ativar tema claro'
        : 'Ativar tema escuro';
});

/* EXERCÍCIO 5 */
const hueInput = document.getElementById('hue');
const hueValor = document.getElementById('hue-valor');

hueInput.addEventListener('input', (e) => {
    const valor = e.target.value;
    document.documentElement.style.setProperty('--hue', valor);
    hueValor.textContent = valor;
});