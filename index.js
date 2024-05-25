const tituloPricipal = document.querySelector('.calc__numbers');
const screen = document.querySelector('.calc__result');

document.addEventListener('DOMContentLoaded', () => {
    const switchInputs = document.querySelectorAll('input[name="colorSwitch"]');

    switchInputs.forEach(input => {
        input.addEventListener('change', (event) => {
            const value = event.target.value;
            document.body.className = `theme-${value}`;
        });
    });
});