var item = document.getElementById("timeline");


function infoPrompt(data) {
    let returnData = ``;
    for (let prompt of data) {
        returnData = returnData + `<div class="info"><h1>${prompt.title}</h1><p>${prompt.text}</p></div>`
    }
    return returnData;
};

let tabEnabled = 0;

window.onkeydown = (e) => {
    if (e.key == 'Tab') {
        tabEnabled += 1;
        setTimeout(() => {
            tabEnabled -= 1;
        }, 150);
    }
};

let iconMargin = 30;
let activePoint = null;


for (let info of INFO) {
    let newIcon = document.createElement('span');
    newIcon.classList.add('icon');
    newIcon.tabIndex = 0;
    document.getElementById('timeline').appendChild(newIcon);
    let newLabel = document.createElement('p');
    newLabel.classList.add('label');
    newLabel.innerText = info.year;
    newIcon.appendChild(newLabel);
    newIcon.style.left = `${iconMargin}px`;
    iconMargin += 75;

    // Focus
    newIcon.addEventListener('focus', (e) => {
        if (tabEnabled > 0) {
            newIcon.style.border = '3px solid rgba(0, 153, 255, .5)';
        } else {
            newIcon.style.border = '3px solid hsl(255, 28%, 25%)';
        };
    });
    newIcon.addEventListener('blur', (e) => {
        newIcon.style.border = '3px solid hsl(255, 28%, 25%)';
    });

    // Click
    newIcon.addEventListener('click', (e) => {
        console.debug(`Switched to ${newLabel.innerHTML}`);
        try { activePoint.classList.remove('enabled'); } catch (error) {};
        activePoint = newIcon;
        newIcon.classList.add('enabled');
        data = info.data;

        // Fade out
        for (let oldElement of document.querySelectorAll('.info')) {
            vivi.start({element: oldElement, duration: ".25s", timingFunction: "ease-out", to: { opacity: '0%'}, callback: function() {
                setTimeout(() => {
                    oldElement.style.opacity = 0;
                }, 240);
            }});
        };

        // Fade in new stuff
        setTimeout(function() {
            document.querySelector('#data-container').innerHTML = infoPrompt(data);
            for (let oldElement of document.querySelectorAll('.info')) {
                vivi.start({element: oldElement, duration: ".25s", timingFunction: "ease-in", to: { opacity: '100%'}, delay: 200, callback: function() {
                    setTimeout(() => {
                        oldElement.style.opacity = 1;
                    }, 230);
                }});
            };
        }, 245);
    }, true);
};


document.getElementById('timeline-bar').style.width = iconMargin * 2 + 'px';