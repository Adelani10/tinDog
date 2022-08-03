
const char = document.querySelector(".char")
const like = document.querySelector(".like")
const crossBtn = document.querySelector(".cross-btn")
const heartBtn = document.querySelector(".heart-btn")
heartBtn.addEventListener("click", heartFunc)
crossBtn.addEventListener("click", crossFunc)
let dogsArray = ["Rex", "Bella", "Teddy"]

const characterData = {
    Rex: {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    Bella: {
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    Teddy: {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
}

function getNextDog() {
    let currentArrayValue = dogsArray.shift()
    dogsArray.push(currentArrayValue)
    const a = characterData[currentArrayValue]
    return a ? new Character(a) : {}
}


function crossFunc(){
    dogs.hasBeenSwiped = true
    if (dogs.hasBeenSwiped && (dogsArray.length > 0)){
        setTimeout(function(){
            dogs = getNextDog()
            render()
        }, 1500)
    }

    render()
}
function heartFunc(){
    dogs.hasBeenSwiped = true
    dogs.hasBeenLiked = true
    like.classList.add("show-like")
    if (dogsArray.length > 0 && (dogs.hasBeenLiked) && (dogs.hasBeenSwiped)){
        setTimeout(function(){
            dogs = getNextDog()
            render()
            like.classList.remove("show-like")
        }, 2000)
        
    }
}




class Character {
    constructor(data){
        Object.assign(this,data)
    }
    setCharacterHtml () {
        const {name, avatar, age, bio} = this

        return `
                <div class="p-2 absolute flex flex-col bottom-0  left-1">
                    <h1 class="font-bold text-whitesmoke text-2xl tracking-wider ">
                        ${name}, 
                        <span class="age">${age}</span>
                    </h1>
                    <p class="text-lg font-thin tracking-widest text-whitesmoke">
                        ${bio}
                    </p>
                </div>
                <img src="${avatar}" class="h-full w-full object-cover rounded-md" alt=""></img>`
    }
}

let dogs = getNextDog()

function render(){
    char.innerHTML = dogs.setCharacterHtml()
}

render()