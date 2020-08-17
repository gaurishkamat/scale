function getCategoryName(btn) {
    while (btn && (!btn.dataset || !btn.dataset.category)) {
        btn = btn.parentNode;
    }
    return (btn && btn.dataset && btn.dataset.category) || "Default";
}

function capitalize(s) {
    return s.slice(0,1).toUpperCase() + s.slice(1);
}

const orderings = {};
function order(category, title) {
    if (!orderings[category]) orderings[category] = [];
    if (orderings[category].indexOf(title) === -1) orderings[category].push(title);
    return (orderings[category].indexOf(title) + 1).toString().padStart(2, '0') + ' ' + title;
}

function getStateName(btn) {
    if (btn.hasAttribute("disabled")) {
        return "Disabled";
    } else if (btn.dataset.sketchState) {
        return capitalize(btn.dataset.sketchState);
    } else {
        return "Available";
    }
}

function getSizeName(btn) {
    if (btn.getAttribute("size") === "small") {
        return "Small";
    } else {
        return "Large";
    }
}
