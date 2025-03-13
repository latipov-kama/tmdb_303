export function render(arr, playce, Component) {
    playce.innerHTML = "";

    arr.forEach(item => {
        const element = Component(item);

        playce.appendChild(element);
    });
}
