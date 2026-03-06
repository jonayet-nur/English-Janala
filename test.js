const createElement = (arr)=>{
    const htmlElement = arr.map((el)=>`<span>${el}</span>`)
    console.log(htmlElement.join(" "))
}
createElement()