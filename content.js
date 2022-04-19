

function highlight(word) {
  let re = new RegExp(word, "g")
  let el = document.querySelectorAll("p,span,div")
  el.forEach((el) => {
    el.innerHTML = el.innerHTML.replace(re, "<span style='background-color:yellow; padding:2px 5px'><strong>" + word + "</strong></span>")
  })

}

highlight("word")