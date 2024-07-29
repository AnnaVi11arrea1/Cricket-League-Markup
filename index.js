document.addEventListener("DOMContentLoaded", () => {
        const container = document.createElement('div');
        container.className = 'container';
    
        const sections = document.querySelectorAll('section');
        const parent = sections[0].parentNode;
        const footer = document.querySelector('footer');

        sections.forEach((section) => {
            container.appendChild(section);
        });
 
        parent.insertBefore(container, footer);

});