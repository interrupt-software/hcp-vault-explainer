window.onload = function () {
    const interactiveOverlay = document.querySelector(".slide-interactive-overlay");
    const interactiveBoxes = document.querySelectorAll(".slide-interactive-box");

    interactiveBoxes.forEach(interactiveBox => {

        const clickable = interactiveBox.getAttribute("data-clickable");

        if (clickable === "true") {
            interactiveBox.addEventListener('click', () => {
                // TO DO 
                //    Set location of the overlay to ease in from the left or the right
                //    according to the selected map location.
                // const boxPosition = interactiveBox.getAttribute('data-position');
                // if (boxPosition === "right") {
                //     interactiveOverlay.setAttribute("data-visible", true);
                // } else if (boxPosition === "left") {
                //     interactiveOverlay.setAttribute("data-visible", true);
                // }
                const overlayDiv = document.getElementById("overlay-content");
                const explainer = interactiveBox.getAttribute("data-explainer");
                const content = 'explainer_' + explainer + '.html'
                fetch(content)
                    .then(r => r.text())
                    .then(t => overlayDiv.innerHTML = t);

                interactiveOverlay.setAttribute("data-visible", true);
            })
        }

    })

    document.getElementById('overlay-close').onclick = function () {
        interactiveOverlay.setAttribute("data-visible", false);
    }
}