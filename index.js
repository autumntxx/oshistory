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
        let text = document.createElement("p")

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
            let imgurl = '';

            fetch(prompt.image.url).then(response => response.blob()).then((blob) => {
                var objectURL = URL.createObjectURL(blob);
                imgurl = objectURL;
            });
            div.addEventListener('click', (e) => {
                console.log('Clicked!')
                let imageview = document.getElementById('imageview');
                let caption = document.getElementById('imageview-caption');
                imageview.src = imgurl;
                caption.innerHTML = prompt.image.caption;
                caption.classList.add('enabled');
                caption.href = prompt.image.source;
                imageview.addEventListener('load', (e) => {
                    imageview.classList.add('enabled');
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
        }, 350);
    }, true);
};


document.getElementById('timeline-bar').style.width = iconMargin * 2 + 'px';