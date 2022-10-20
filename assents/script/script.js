

let navItem = Array.from(document.querySelectorAll('.nav-item'));

let open = []

navItem.forEach((element) => {
    element.addEventListener('click', () => { 
        hideAll(element)
        expandeElement (element)
    });
    
    if ( !element.querySelector('.popup') ) return
    
    styleElement(element, 'paddingRight', '23px')
});

window.onclick = () => {
    navItem.forEach((secondElement) => {
        let popup = secondElement.querySelector('.popup');

        if (!popup) return;

        popup.setAttribute('aria-expanded', false);
        secondElement.classList.replace('toggle-up', 'toggle-down');
    });
}



function hideAll(firstElement) {
    navItem.forEach((secondElement) => {
        let popup = secondElement.querySelector('.popup');

        if (firstElement === secondElement || !popup) return;

        popup.setAttribute('aria-expanded', false);
        secondElement.classList.replace('toggle-up', 'toggle-down');
    });
}

function expandeElement(element) {
    let popup = element.querySelector('.popup');
    let isExpanded = popup.getAttribute('aria-expanded');

    if (!(element.classList.contains('toggle-up') || element.classList.contains('toggle-down'))) {
        element.classList.add('toggle-down');
    }

    if (isExpanded === 'true') {
        popup.setAttribute('aria-expanded', false);
        element.classList.replace('toggle-up', 'toggle-down');
    } else {
        popup.setAttribute('aria-expanded', true);
        element.classList.replace('toggle-down', 'toggle-up');
    }
}

function styleElement(element, propety, value) {
    element.style[propety] = value;
}
