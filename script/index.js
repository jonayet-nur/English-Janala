const loadLessons = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all') //promise of response
    .then((res) => res.json()) //promise of json data
    .then((json) => displayLesson(json.data)) //data ata  api all property name
}

const loadLevelWord= (id)=>{
const url= (`https://openapi.programming-hero.com/api/level/${id}`)
fetch(url)
.then(res => res.json())
.then(data => {
    displayLevelWord(data.data)
})
}

// {
//     "id": 84,
//     "level": 1,
//     "word": "Fish",
//     "meaning": "মাছ",
//     "pronunciation": "ফিশ"
// }

const displayLevelWord = (words)=>{
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = ""
// ata use jokon lesson4 and lesson7 oi gular modde kichu nai tai akta card dekabu
    if(words.length == 0){
        wordContainer.innerHTML = `

         <div class="text-center col-span-full space-y-3 font-bangla">
             <img src="assets/alert-error.png" alt="" class=" mx-auto">
            <p class="text-sm text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-3xl font-medium ">নেক্সট Lesson এ যান</h2>
        </div>
        `
    }

    words.forEach((word) => {
        // console.log(word);
        const card = document.createElement("div")
        card.innerHTML =` 
        <div class="bg-white rounded-xl shadow-md text-center py-10 px-5 space-y-4 w-full">
            <h2 class="text-3xl font-bold">${word.word ? word.word:"শব্দ  পাওয়া যায়নি"}</h2>
            <p class="font-medium">Meaning /Pronounciation</p>
            <div class="text-xl font-medium font-bangla">${word.meaning ? word.meaning:"অর্থ পাওয়া যায়নি"}/ ${word.pronunciation}</div>
            <div class="flex justify-between items-center ">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `

        wordContainer.appendChild(card)
    })
}
const displayLesson = (lessons)=>{
// 1.get the container and empty
const levelContainer = document.getElementById("level-container")
levelContainer.innerHTML = ""

// 2.get into every lessons
for(let lesson of lessons){

    //     3.create Element
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <button onclick ="loadLevelWord(${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
     `
//     4.appent into container
levelContainer.appendChild(btnDiv);
}

}
loadLessons()