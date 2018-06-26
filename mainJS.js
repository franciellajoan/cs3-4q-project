var qd = location.search;
qd = qd.substring(4, qd.length);

function changeOrb(){
    if(qd==3){
        document.getElementById("hy").innerHTML = "<div class='aaa'>Hybridized</div><div class='lvl1'><u>&#x21BF;&nbsp;</u><br>p</div><div class='lvl2'><u>&#x21BF;&#x21C2;</u>&nbsp;<u>&#x21BF;&#x21C2;</u>&nbsp;<u>&#x21BF;&nbsp;</u><br>sp<sup>2</sup></div>"; 
        document.getElementById("sCan").innerHTML =
            `
            <svg width="500"  height="500">
            <circle cx="250" cy="220" r="60" stroke="darkgreen" stroke-width="7" fill="lime" />
            <g id="all" transform="translate(-60,20)">
            <g id="g3186" transform="translate(250,250)">
            <path fill="yellow" stroke="goldenrod" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            <g id="b" transform="rotate(180 250 250)">
            <g id="a" transform="translate(130,250)">
            <path fill="yellow" stroke="goldenrod" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            <g id="b" transform="rotate(70 250 330)">
            <g id="a" transform="translate(130,250)">
            <path fill="lime" stroke="darkgreen" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            <g id="b" transform="rotate(290 250 160)">
            <g id="a" transform="translate(130,250)">
            <path fill="lime" stroke="darkgreen" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            </g>
            </svg>
            `;
    }
    else if(qd==4){
        document.getElementById("hy").innerHTML = "<div class='aaa'>Hybridized</div><div class='lvl0'><u>&#x21BF;&#x21C2;</u>&nbsp;<u>&#x21BF;&#x21C2;</u>&nbsp;<u>&#x21BF;&nbsp;</u>&nbsp;<u>&#x21BF;&nbsp;</u><br>sp<sup>3</sup></div>";
        document.getElementById("sCan").innerHTML =
            `
            <svg width="500"  height="500">
            <g id="awd" transform="rotate(40 250 320)">
            <g id="a" transform="translate(130,250)">
            <path fill="lime" stroke="darkgreen" transform="scale(5,4)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            <g transform="rotate(190 250 250)">
            <g id="all" transform="translate(-60,20)">

            <g id="b" transform="rotate(150 250 260)">
            <g id="a" transform="translate(130,250)">
            <path fill="lime" stroke="darkgreen" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            <g id="b" transform="rotate(45 250 390)">
            <g id="a" transform="translate(130,250)">
            <path fill="lime" stroke="darkgreen" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            <g id="b" transform="rotate(290 250 160)">
            <g id="a" transform="translate(130,250)">
            <path fill="lime" stroke="darkgreen" transform="scale(4,5.5)" stroke-width="1.5"
            d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"

               />
            </g>
            </g>
            </g>
            </g>
            </svg>
            `;
    }
    else{
        document.getElementById("sCan").innerHTML =
        `
        <svg width="500" height="500">
        <circle cx="100" cy="200" r="70" stroke="purple" stroke-width="7" fill="magenta" />
        <circle cx="400" cy="200" r="70" stroke="darkgreen" stroke-width="7" fill="green" />
        <circle cx="250" cy="400" r="70" stroke="goldenrod" stroke-width="7" fill="yellow" />
        <circle cx="250" cy="250" r="170" stroke="darkred" stroke-width="7" fill="red" />
        <circle cx="100" cy="300" r="70" stroke="darkgreen" stroke-width="7" fill="green" />
        <circle cx="400" cy="300" r="70" stroke="purple" stroke-width="7" fill="magenta" />
        <circle cx="250" cy="90" r="70" stroke="goldenrod" stroke-width="7" fill="yellow" />
        </svg>
        `;
    }
}

var hl = "background-color: aliceblue; transform: scale(1.25);";
var norm = "background-color: aqua; width: 50px; height: 50px;";

function edEval(idk){
    document.getElementById("ed").value = idk.value;
    var other;
    if(idk.name=="three") other = document.getElementById("four");
    else other = document.getElementById("three");
    idk.style.cssText = hl;
    other.style.cssText = norm;
}

function clearShit(){
    history.replaceState({}, "Title", "index.html");
    document.getElementById("hy").innerHTML = "<div class='lvl1'><u>&#x21BF;&#x21C2;</u>&nbsp;<u>&#x21BF;&nbsp;</u>&nbsp;<u>&#x21BF;&nbsp;</u><br>2p</div><div class='lvl2'><u>&#x21BF;&#x21C2;</u><br>2s</div>";
    document.getElementById("sCan").innerHTML =
        `
        <svg width="500" height="500">
        <circle cx="100" cy="200" r="70" stroke="purple" stroke-width="7" fill="magenta" />
        <circle cx="400" cy="200" r="70" stroke="darkgreen" stroke-width="7" fill="green" />
        <circle cx="250" cy="400" r="70" stroke="goldenrod" stroke-width="7" fill="yellow" />
        <circle cx="250" cy="250" r="170" stroke="darkred" stroke-width="7" fill="red" />
        <circle cx="100" cy="300" r="70" stroke="darkgreen" stroke-width="7" fill="green" />
        <circle cx="400" cy="300" r="70" stroke="purple" stroke-width="7" fill="magenta" />
        <circle cx="250" cy="90" r="70" stroke="goldenrod" stroke-width="7" fill="yellow" />
        </svg>
        `;
}