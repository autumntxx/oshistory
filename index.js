var item = document.getElementById("timeline");

document.getElementById('imageview').addEventListener('click', (e) => {
    document.getElementById('imageview').classList.remove('enabled');
    document.getElementById('imageview-caption').classList.remove('enabled');
    setTimeout(() => { makeImageDebounce = false; }, 1000);
});

function makeInfo(data) {
    document.getElementById('data-container').innerHTML = '';
    for (let prompt of data) {
        let div = document.createElement("div");
        let title = document.createElement("h1");
        let text = document.createElement("p");
        div.style.opacity = '0';

        title.innerHTML = prompt.title;
        text.innerHTML = prompt.text;
        div.classList.add('info');

        div.appendChild(title);
        div.appendChild(text);

        if (prompt.image) {
            let imicon = document.createElement('span');
            imicon.classList.add('material-icons-round', 'imicon');
            imicon.innerHTML = 'image';
            div.appendChild(imicon);
            div.style.cursor = 'context-menu';
            let imgurl = prompt.image.url;

            fetch(prompt.image.url).then(response => response.blob()).then((blob) => {
                var objectURL = URL.createObjectURL(blob);
                imgurl = objectURL;
            }).catch((e) => {});
            div.addEventListener('click', (e) => {
                console.log('Clicked!')
                let imageview = document.getElementById('imageview');
                let caption = document.getElementById('imageview-caption');
                imageview.src = imgurl;
                caption.innerHTML = prompt.image.caption;
                caption.href = prompt.image.source;
                imageview.addEventListener('load', (e) => {
                    imageview.classList.add('enabled');
                    caption.classList.add('enabled');
                });
            });
        };

        document.getElementById('data-container').appendChild(div);
    }
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

let currentPoint = 0;
for (let info of INFO) {
    const thisPoint = currentPoint;
    let newIcon = document.createElement('span');
    newIcon.classList.add('icon');
    newIcon.classList.add(`icon-${currentPoint}`);
    currentPoint += 1;
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

        window.sessionStorage.setItem('tab', thisPoint);


        // Fade out
        for (let oldElement of document.querySelectorAll('.info')) {
            oldElement.style.opacity = 0;
        };

        // Fade in new stuff
        setTimeout(function() {
            makeInfo(data);
            setTimeout(() => {
                for (let element of document.querySelectorAll('.info')) {
                    element.style.opacity = 1;
                };
            }, 5);
        }, 400);
    }, true);
};


document.getElementById('timeline-bar').style.width = iconMargin * 2 + 'px';

setTimeout(() => {
    if (!Cookies.get('feedbackBlocked') && screen.width > 810) {
        document.getElementById('feedback').classList.add('enabled');
    };
}, 20000);

document.getElementById('feedback-submit').onclick = (e) => {
    if (document.getElementById('feedback-textarea').value.length < 8) {
        document.getElementById('feedback-textarea').value = 'Please write a longer message';
        return;
    };
    
    sfd(document.getElementById('feedback-textarea').value);
    document.getElementById('feedback-textarea').value = 'Sent!';
    
    setTimeout(() => {
        document.getElementById('feedback').classList.remove('enabled');
        Cookies.set('feedbackBlocked', true, { expires: 16 });
    }, 500);
};

try {
    document.querySelector(`.icon-${window.sessionStorage.getItem('tab')}`).click();
} catch {};

document.getElementById('feedback-close').addEventListener('click', (e) => {
    document.getElementById('feedback').classList.remove('enabled');
    Cookies.set('feedbackBlocked', true, { expires: 1 });
});

let keyboardControlsEnabled = true;

document.body.addEventListener('keydown', (e) => {
    if (!keyboardControlsEnabled) {
        return;
    };
    try {
        if (e.key == 'ArrowLeft') {
            document.querySelector(`.icon-${parseInt(window.sessionStorage.getItem('tab')) - 1}`).click();
            document.querySelector(`.icon-${parseInt(window.sessionStorage.getItem('tab')) - 1}`).scrollIntoView();
        } else if (e.key == 'ArrowRight') {
            document.querySelector(`.icon-${parseInt(window.sessionStorage.getItem('tab')) + 1}`).click();
            document.querySelector(`.icon-${parseInt(window.sessionStorage.getItem('tab')) + 1}`).scrollIntoView();
        };
        keyboardControlsEnabled = false;
        setTimeout(() => {
            keyboardControlsEnabled = true;
        }, 350);
    } catch {};
});