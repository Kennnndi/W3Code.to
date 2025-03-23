window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0);
})
$(document).ready(function(){
    $('#html').click(function(){
        $('#dropdownItem-0').toggleClass('active')
    })
})
$(document).ready(function(){
    $('#css').click(function(){
        $('#dropdownItem-1').toggleClass('actives')
    })
})
$(document).ready(function(){
    $('#javascript').click(function(){
        $('#dropdownItem-2').toggleClass('activess')
    })
})
$(document).ready(function(){
    $('#java').click(function(){
        $('#dropdownItem-3').toggleClass('activesss')
    })
})
$(document).ready(function(){
    $('#quiz').click(function(){
        $('#difficulty').toggleClass('activessss')
    })
})


let availableKeywords = 
[
    '<a id = here href = "htmlstructure.html">Structure',
    '<a id = here href = "htmltext.html">Text</a>',
    '<a id = here href = "htmllist.html">List</a>',
    '<a id = here href = "htmllinks.html">Links</a>',
    '<a id = here href = "htmlimages.html">Images</a>',
    '<a id = here href = "htmltables.html">Tables</a>',
    '<a id = here href = "htmlforms.html">Forms</a>',
    '<a id = here href = "htmlextra.html">Extra Markup</a>',
    '<a id = here href = "htmlflash.html">Flash, Video, and Audio</a>',
    '<a id = here href = "cssintro.html">CSS Introduction</a>',
    '<a id = here href = "csscolor.html">Color</a>',
    '<a id = here href = "csstext.html">CSS Text</a>',
    '<a id = here href = "cssboxes.html">Boxes</a>',
    '<a id = here href = "csslist.html">List, Tables & Forms</a>',
    '<a id = here href = "csslayout.html">Layout</a>',
    '<a id = here href = "cssimages.html">Images</a>',
    '<a id = here href = "cssprocess.html">Process & Design</a>',
    '<a id = here href = "csspractical.html">Practical Information Index</a>',
    '<a id = here href = "jsabc.html">The ABC of Programming</a>',
    '<a id = here href = "jsintro.html">Basic Javascript Instrction</a>',
    '<a id = here href = "jsfunction.html">Function, Methods & Objects</a>',
    '<a id = here href = "jsdecision.html">Decisions & Loops</a>',
    '<a id = here href = "jsdocument.html">Document Object Model</a>',
    '<a id = here href = "jsevents.html">Events</a>',
    '<a id = here href = "jqintro.html">JQuery Introduction</a>',
    '<a id = here href = "jqajax.html">Ajax & JSON</a>',
    '<a id = here href = "jqapi.html">APIs</a>',
    '<a id = here href = "jqerror.html">Error Handling & Debugging</a>',
    '<a id = here href = "jqpanels.html">Content Panels</a>',
    '<a id = here href = "jqfiltering.html">Filtering, Searching & Sorting</a>',
    '<a id = here href = "jqenhancement.html">Form Enhancement & Validation Index</a>',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input =  inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}