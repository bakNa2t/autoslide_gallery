document.addEventListener("DOMContentLoaded", () => {
    const slide_img = document.getElementById("slide_img");
    const arrows = document.querySelectorAll("a");
    const description = document.getElementById("desc_img");
    const number_img = document.getElementById("count_container");

    let i = 0;

    const images = [
        "./images/img1.jpg", 
        "./images/img2.jpg", 
        "./images/img3.jpg", 
        "./images/img4.jpg", 
        "./images/img5.jpg", 
        "./images/img6.jpg", 
        "./images/img7.jpg", 
        "./images/img8.jpg", 
        "./images/img9.jpg", 
        "./images/img10.jpg", 
        "./images/img11.jpg", 
        "./images/img12.jpg", 
        "./images/img13.jpg", 
        "./images/img14.jpg", 
        "./images/img15.jpg", 
        "./images/img16.jpg", 
        "./images/img17.jpg", 
        "./images/img18.jpg", 
        "./images/img19.jpg", 
        "./images/img20.jpg", 
        "./images/img21.jpg", 
        "./images/img22.jpg", 
        "./images/img23.jpg", 
        "./images/img24.jpg", 
        "./images/img25.jpg", 
        "./images/img26.jpg", 
        "./images/img27.jpg", 
        "./images/img28.jpg", 
        "./images/img29.jpg", 
        "./images/img30.jpg", 
        "./images/img31.jpg", 
        "./images/img32.jpg", 
        "./images/img33.jpg", 
        "./images/img34.jpg", 
        "./images/img35.jpg", 
        "./images/img36.jpg", 
        "./images/img37.jpg", 
        "./images/img38.jpg", 
        "./images/img39.jpg", 
        "./images/img40.jpg", 
        "./images/img41.jpg", 
        "./images/img42.jpg", 
        "./images/img43.jpg", 
        "./images/img44.jpg", 
        "./images/img45.jpg", 
    ];

    const descriptions = [
        "August 2021, Zelenogradsk. Amazing sunset and slightly churning sea",
        "August 2021, Zelenogradsk. The Baltic Sea breakwaters",
        "August 2021, Zelenogradsk. Waiting for the waves on the evening Baltic Sea",
        "August 2021, Zelenogradsk. After riding the waves on the evening Baltic Sea",
        "August 2021, Zelenogradsk. Watch the Balric Sea sunset",
        "August 2021, Zelenogradsk. The last rays of the setting sun break through the clouds",
        "August 2021, Zelenogradsk. Summer kitesurfing",
        "August 2021, Zelenogradsk. Watching the kitesurfing",
        "August 2022, The Curonian (Courish) Spit. Alone with the sea",
        "August 2022, The Curonian (Courish) Spit. Looking for a way",
        "August 2022, The Curonian (Courish) Spit. The last trace",
        "August 2019, Lysefjord (Norway). Seven Sisters waterfall during the sunset 1/2",
        "August 2019, Lysefjord (Norway). Seven Sisters waterfall during the sunset 2/2",
        "August 2019, Sognefjorden (Norway) 1/2",
        "August 2019, Sognefjorden (Norway) 2/2",
        "August 2019, Nærøyfjorden (Norway). A place hidden from all eyes",
        "August 2019, Sognefjorden (Norway). On the way to Bergen",
        "August 2019, Ålesund (Norway). Molja Lighthouse",
        "August 2019, Stavanger (Norway). Quality Airport Hotel by the runway",
        "August 2019, Stavanger (Norway). View of the colorful houses on Mellomstraen street",
        "August 2019, Stavanger (Norway). Fountain on the lake in Byparken",
        "August 2019, Stavanger (Norway). Cruise ship hiding behind the houses",
        "August 2019, Bergen (Norway). View of the Vestre Torggaten",
        "August 2019, Ålesund (Norway). Aksla Viewpoint",
        "August 2019, Ålesund (Norway). Walking through the streets Notenesgata and Skansegata 1/3",
        "August 2019, Ålesund (Norway). Walking through the streets Notenesgata and Skansegata 2/3",
        "August 2019, Ålesund (Norway). Walking through the streets Notenesgata and Skansegata 3/3",
        "August 2019, Lysefjord (Norway). Breathtaking Preikestolen",
        "Juli 2022, Tula. The sky above",
        "June 2019, Tula. Touch and attraction",
        "August 2019, Helsinki.  Helsinki Cathedral is located on the Senate Square in the center of the city 1/2",
        "August 2019, Helsinki. Helsinki Cathedral is located on the Senate Square in the center of the city 2/2",
        "August 2019, Helsinki. SkyWheel Helsinki is a 40-meter tall Ferris wheel in central Helsinki",
        "August 2019, Helsinki. View of the port of Helsinki from Päävartiontori street",
        "August 2019, Stockholm. Viking Line ferry in the early morning in the Viking Line terminal",
        "August 2019, Stockholm. Sentinel on the square in front of Stockholm Palace (The Royal Palace)",
        "August 2019, Stockholm. Stockholm Cathedral(Church of Saint Nicholas) and Stockholm Palace",
        "August 2019, Stockholm. Stockholm City Hall is the seat of Stockholm Municipality in Stockholm",
        "August 2019, Oslo. The Oslo Opera House in of central Oslo, at the head of the Oslofjord",
        "August 2019, Oslo. Walking on the roof of the Oslo Opera House",
        "August 2019, Oslo. View of the center of Oslo from the roof of the Oslo Opera House",
        "August 2019, Oslo. Behind the sailing ships rises the ancient Akershus Fortress in Oslo    ",
        "August 2019, Oslo. Walking down Stranden street, Oslo City Hall (Rådhus) in the background",
        "August 2019, Oslo. Pier along Stranden street",
        "August 2019, Oslo. Sea pier near the Rådhus, along Stranden street"
    ];

    const numbers = [
        "1 / 45",
        "2 / 45",
        "3 / 45",
        "4 / 45",
        "5 / 45",
        "6 / 45",
        "7 / 45",
        "8 / 45",
        "9 / 45",
        "10 / 45",
        "11 / 45",
        "12 / 45",
        "13 / 45",
        "14 / 45",
        "15 / 45",
        "16 / 45",
        "17 / 45",
        "18 / 45",
        "19 / 45",
        "20 / 45",
        "21 / 45",
        "22 / 45",
        "23 / 45",
        "24 / 45",
        "25 / 45",
        "26 / 45",
        "27 / 45",
        "28 / 45",
        "29 / 45",
        "30 / 45",
        "31 / 45",
        "32 / 45",
        "33 / 45",
        "34 / 45",
        "35 / 45",
        "36 / 45",
        "37 / 45",
        "38 / 45",
        "39 / 45",
        "40 / 45",
        "41 / 45",
        "42 / 45",
        "43 / 45",
        "44 / 45",
        "45 / 45"
    ];

    slide_img.setAttribute("src", images[0]);
    description.innerHTML = descriptions[0];
    number_img.innerHTML = numbers[0];

//previous image
    arrows[0].addEventListener("click", () => {
        if (i == 0) {
            disableRow(arrows[0]);
        } else {
            enableRow(arrows[1]);
            autoMove(--i);
        }
    });

//next image
    arrows[1].addEventListener("click", () => {
        if (i == images.length - 1) {
            disableRow(arrows[1]);
        } else {
            enableRow(arrows[0]);
            autoMove(++i);
        }
    });

//Disable or enable arrows when they reach their limit
    function disableRow(elem) {
        elem.disabled;
        elem.classList.add("disabled");
    }

    function enableRow(elem) {
        elem.removeAttribute("disabled");
        elem.classList.remove("disabled");
    }

// // Variable that will store the identifier of the setInterval to be used in the clearInterval
    let id; 

    function autoMove(idx) {
        enableRow(arrows[0]);
        enableRow(arrows[1]);
        i = idx == images.length ? 0 : i;
        slide_img.setAttribute("src", images[i]);
        description.innerHTML = descriptions[i];
        number_img.innerHTML = numbers[i];
    }

// launch setInterval
    function autoSlide() {
        id = setInterval(() => {
            autoMove(++i);
        }, 4000);
    }

//Enable autoSlide, disable arrows
    const move = document.getElementById("move");
    move.addEventListener("click", () => {
        autoSlide();
        sliderArrows();
        move.style.display = "none";
        stop.style.display = "flex";
    });

//Disable autoSlide, enable arrows
    const stop = document.getElementById("stop");
    stop.addEventListener("click", () => {
        clearInterval(id);
        sliderArrows();
        stop.style.display = "none";
        move.style.display = "flex";
    });

// Enable or disable arrows
    function sliderArrows() {
        for (let k = 0; k < 2; k++) {
            arrows[k].classList.toggle("show-arrows")
        }
    };

    autoSlide();

//Switch dark/light mode
const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark");
});

});

