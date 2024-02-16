
const jsonData =
{
    "torchHolders": [
        {
            "id": 1,
            "name": "Yael Arad",
            "gender": "female",
            "description": "Yael Arad is the chairwoman of the Olympic Committee in Israel. In her past, a Jewish Olympian, and the first female athlete in the history of Israel at the Olympic Games to win an Olympic medal, when she won the silver medal at the Barcelona Olympics.",
            "year": "1993",
            "image": "./images/YaelArad.jpg"

        },
        {
            "id": 2,
            "name": "Ori Sasson",
            "gender": "male",
            "description": "Ori Sasson is a former Israeli judoka, winner of a bronze medal from the 2016 Rio de Janeiro Olympics in the weight category of over 100 kg and a bronze medal from the 2020 Tokyo Olympics in the mixed team category. Twice in a row European vice champion.",
            "year": "2017",
            "image": "./images/oriSasson.jpg"

        },
        {
            "id": 3,
            "name": "Miki Berkovich",
            "gender": "male",
            "description": "Miki is an Israeli former professional basketball player. A 193 cm shooting guard, he is one of the greatest Israeli basketball players of all time. ",
            "year": "1997",
            "image": "./images/MikiBarkovich.jpg"

        },
        {
            "id": 4,
            "name": "Tal Brody",
            "gender": "male",
            "description": " Tal Brody, nicknamed Mr. Basketball, is an American-Israeli former professional basketball player and current goodwill ambassador of Israel. Brody was drafted #12 in the National Basketball Association (NBA) draft, but chose to pass up an NBA career, to instead play basketball in Israel.",
            "year": "1973",
            "image": "./images/TalBrody.jpg"

        },
        {
            "id": 5,
            "name": "Linoy Ashram",
            "gender": "female",
            "description": "Linoy Ashram is a former Israeli artistic gymnast, the Olympic champion in the all-around competition, the runner-up of the world champion and the European all-around champion. She has 11 medals from the World Championships, of which six are silver and five bronze, and three medals from the European Championships, of which one is gold and two are bronze.",
            "year": "2022",
            "image": "./images/LinoyAshram.jpg"

        },

        {
            "id": 6,
            "name": "Yarden Gerbi",
            "gender": "female",
            "description": "Yarden Gerbi is a former Israeli judoka, winner of a bronze medal in the judo tournament at the Rio de Janeiro Olympics, world champion, runner-up world champion and runner-up European champion, winner of two bronze medals in the European Championships and eight times champion of Israel. With 33 medals in the world judo circuit, Yarden is the most decorated athlete in the judo branch in Israel",
            "year": "2017",
            "image": "./images/Yarden Gerbi.jpg"

        },
        {
            "id": 7,
            "name": "Amnon Avidan",
            "gender": "male",
            "description": "Amnon Avidan is a former Israeli basketball player, 1.88 meters tall, who played the small forward position for Maccabi Tel Aviv and the Israeli national team. In the 70s and 80s of the 20th century he served as one of the directors of Maccabi Tel Aviv.",
            "year": "1969",
            "image": "./images/Amnon Avidan.jpg"

        },
        {
            "id": 8,
            "name": "Yosef Lahav",
            "gender": "male",
            "description": "Yosef Lahav Selma is a former Israeli athlete. Israeli champion and Israeli record breaker in medium runs and long runs from 800 meters to 5000 meters. Has two silver medals from the fourth Maccabiah. He got to light the torch in the sixth Maccabiah.",
            "year": "1961",
            "image": "./images/Yosef Lahav.jpg"

        },
        {
            "id": 9,
            "name": "Debra Turner",
            "gender": "female",
            "description": "Deborah Marcus Turner is a former British-Israeli athlete. Israeli champion and Israeli record holder in the 100 meters and 200 meters, Asian champion (Bangkok 1966) and owner of 4 gold medals in Maccabiah as a representative of Great Britain, from two Maccabiahs (fifth in 1957 and sixth in 1961).",
            "year": "1965",
            "image": "./images/Debora Terner.jpg"

        },
        {
            "id": 10,
            "name": "Gal Friedman",
            "gender": "male",
            "description": "Gal Friedman is a former Israeli windsurfer. He is an Olympic and world champion. Friedman is the first Israeli athlete to win an Olympic gold medal and the only one to win two individual Olympic medals.",
            "year": "2005",
            "image": "./images/Galfridman.jpg"

        },


    ]
}
let nowSlide = 0;
let GalleryFilterList;

document.addEventListener("DOMContentLoaded", function (event) {
    GalleryFilterList = jsonData.torchHolders;
    inputValuesToGallery(nowSlide);
    fillterGallery("all");
});

function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

function turnOverCard(myCardID) {
    document.getElementById(myCardID).classList.toggle("turnOver");
}

function isGoToNextSlide(isNext) {

    if (isNext) {
        nowSlide += 1;
    }
    else {
        nowSlide -= 1;
    }

    nowSlide = fixNum(nowSlide);

    inputValuesToGallery(nowSlide);
}

function fixNum(nowSlide) {
    if (nowSlide > GalleryFilterList.length - 1) {
        nowSlide = 0;
    }
    else if (nowSlide < 0) {
        nowSlide = GalleryFilterList.length - 1;
    }
    return nowSlide;
}

function fillterGallery(gender) {
    if (gender == "all") {
        GalleryFilterList = jsonData.torchHolders;
    }
    else {
        GalleryFilterList = [];
        jsonData.torchHolders.forEach((torchHolder) => {
            if (torchHolder.gender == gender) {
                GalleryFilterList.push(torchHolder);
            }
        });
    }

    const ButtonFillterGroupList = document.getElementById("ButtonFillterGroup").getElementsByTagName("button");   
    const chackClass = "mark";
    for (i = 0; i < ButtonFillterGroupList.length; i++) {
        console.log("filterName: "+ ButtonFillterGroupList[i].getAttribute("filter"));
        if (ButtonFillterGroupList[i].getAttribute("filter")==gender) {
            if (ButtonFillterGroupList[i].classList.contains(chackClass)==false) {
                ButtonFillterGroupList[i].classList.add(chackClass);
            }
        }
        else {
            if (ButtonFillterGroupList[i].classList.contains(chackClass)) {
                ButtonFillterGroupList[i].classList.remove(chackClass);
            }
        }
    }
    

    const galeryDot = document.getElementById("GalleryCubes");
    while (galeryDot.firstChild) {
        // Remove the first child node
        galeryDot.removeChild(galeryDot.firstChild);
      }
      
    GalleryFilterList.forEach(holder => {     
        let newDot = document.createElement("button");
        
        newDot.onclick = function () { inputValuesToGallery(getPlaceFromId(holder.id)) };
        galeryDot.appendChild(newDot);
    })

    console.log(GalleryFilterList.length);
    inputValuesToGallery(0);
}

function getPlaceFromId(id){
    for(i=0;i<GalleryFilterList.length;i++){
        if(id==GalleryFilterList[i].id){
            return i;
        }
    }
    return 0;
}

function inputValuesToGallery(slideNum) {
    console.log(slideNum);
    const mainCard = document.getElementById("GallerySlide_Main");

    mainCard.getElementsByTagName("P")[0].innerText = GalleryFilterList[slideNum].name;
    mainCard.getElementsByTagName("DIV")[0].style = `background-image:url("${GalleryFilterList[slideNum].image}")`;

    const prevCard = document.getElementById("GallerySlide_Prev");
    const prevSlide = fixNum(slideNum - 1);
    prevCard.getElementsByTagName("P")[0].innerText = GalleryFilterList[prevSlide].name;
    console.log(GalleryFilterList[prevSlide].image);
    prevCard.getElementsByTagName("DIV")[0].style = `background-image:url('${GalleryFilterList[prevSlide].image}')`;
    prevCard.onclick = function(){inputValuesToGallery(prevSlide)};

    const nextCard = document.getElementById("GallerySlide_Next");
    const nextSlide = fixNum(slideNum + 1);
    nextCard.getElementsByTagName("P")[0].innerText = GalleryFilterList[nextSlide].name;
    nextCard.getElementsByTagName("DIV")[0].style = `background-image:url('${GalleryFilterList[nextSlide].image}')`;
    nextCard.onclick = function(){inputValuesToGallery(nextSlide)};

    const popupName = document.getElementById("popupAbout-Name");
    popupName.innerText = GalleryFilterList[slideNum].name;

    const popupYear = document.getElementById("popupAbout-Year");
    popupYear.innerText = "Held the tourch in: " + GalleryFilterList[slideNum].year;

    const popupAbout = document.getElementById("popupAbout-About");
    popupAbout.innerHTML = `About: <br> ${GalleryFilterList[slideNum].description}`;

    const popupImg = document.getElementById("popupAbout-Img");
    popupImg.src = GalleryFilterList[slideNum].image;

    const galeryDot = document.getElementById("GalleryCubes").getElementsByTagName("button");
    for (i = 0; i < galeryDot.length; i++) {
        if (i == slideNum) {
            if (galeryDot[i].classList.contains("mark")==false) {
                galeryDot[i].classList.add("mark");
            }
        }
        else {
            if (galeryDot[i].classList.contains("mark")) {
                galeryDot[i].classList.remove("mark");
            }
        }
    }
}

function chackChildForClass(List,chackClass,){
        for (i = 0; i < List.length; i++) {
        if (i == slideNum) {
            if (List[i].classList.contains(chackClass)==false) {
                List[i].classList.add(chackClass);
            }
        }
        else {
            if (List[i].classList.contains(chackClass)) {
                List[i].classList.remove(chackClass);
            }
        }
    }
}