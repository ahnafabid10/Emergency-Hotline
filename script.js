const callHistory = []

// herHeart
document.getElementById('her-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})

// police heart 
document.getElementById('police-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
// fire heart
document.getElementById('fire-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
// ambulance-heart
document.getElementById('ambulance-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
// Women-Child
document.getElementById('Women-Child-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
//Anti-Corruption
document.getElementById('Anti-Corruption-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
// Electricity
document.getElementById('Electricity-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
//Brac Heart
document.getElementById('Brac-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})
//Bangladesh Railway
document.getElementById('Bangladesh-Railway-heart')
.addEventListener('click', function(){
    const herHeart = document.getElementById('count-her-heart')
    console.log(herHeart)
    const countHerHeart = parseInt(herHeart.innerText)
    console.log(countHerHeart)
    const totalCount = countHerHeart + 1;
    console.log(totalCount)
    document.getElementById('count-her-heart').innerText = totalCount
})

// call alert + Coin Decrease + call History

// national call 
document.getElementById('national-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling National Emergency Number 999...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin

        const data = {
            name: 'National Emergency call Number',
            number: '999',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div)   
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

// police call

const police = document.getElementById('police-call')
police.addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Police Helpline Number 999...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin

        const data = {
            name: 'Police Call Number',
            number: '999',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div) 
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

// fire-call
document.getElementById('fire-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Fire Service Number 999...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin
        const data = {
            name: 'Fire Call Number',
            number: '999',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div) 
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})
// ambulance-call
document.getElementById('ambulance-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Ambulance Service Number 1994-99999...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin
        const data = {
            name: 'Ambulance Service Number',
            number: '1994-99999',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div)   
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

//women-child-call
document.getElementById('women-child-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Women & Child Helpline Number 109...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin
        
        const data = {
            name: 'Women & Child Helpline',
            number: '109',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div)  
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

//Anti-Corruption-call
document.getElementById('Anti-Corruption-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Anti-Corruption Helpline Number 106...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin
        
        const data = {
            name: 'Anti Corruption Helpline',
            number: '106',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div) 
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

//Electricity-call
document.getElementById('Electricity-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Electricity Helpline Number 16216...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin
        
        const data = {
            name: 'Electricity Helpline',
            number: '16216',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call History
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div)  
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

//Brac-call

document.getElementById('Brac-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Brac Helpline Number 16445...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin 

        const data = {
            name: 'Brac Helpline',
            number: '16445',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // call history
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div)
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})

// Bangladesh-Railway-call
document.getElementById('Bangladesh-Railway-call').addEventListener('click',function(){
    let coin =document.getElementById('coin')
    let parseIntCoin= parseInt(coin.innerText)
    const callCost = 20
    if(parseIntCoin >= callCost ){
        alert("Calling Bangladesh Railway Number 163...")
        parseIntCoin = parseIntCoin - callCost
        console.log(parseIntCoin)
        document.getElementById('coin').innerText = parseIntCoin

        // Data 
        const data = {
            name: 'Bangladesh Railway',
            number: '163',
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        // Call history
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-[#FAFAFA] rounded-xl p-3">
                <div class="flex items-center justify-between mb-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <p class="font-bold">${data.number}</p>
            </div>
        `;
        document.getElementById("call-history").appendChild(div)
        

        
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})



// Clear Call History 
    // Clear Call History 
document.getElementById('clear-history').addEventListener('click', function () {

    document.getElementById('call-history').innerHTML = `
        <div class="flex items-center justify-between mb-5">
            <h3 class="text-[#111111] text-xl font-bold">
                <i class="fa-solid fa-clock-rotate-left"></i> Call History
            </h3>
            <h3 id="clear-history" class="text-white text-lg font-semibold bg-[#00A63E] p-4 rounded-[45px] cursor-pointer">Clear</h3>
        </div>
    `;
    
    alert("Call history has been cleared!");
});





// Call history Function 
// document.getElementById('call-history').addEventListener('click', function (){
//     console.log(callHistory)
//     for(const data of callHistory ){
//         const div = document.createElement('div')
//         div.innerHTML= `
//         <div class="bg-[#FAFAFA] rounded-xl p-3">
//                     <div class="flex items-center justify-between mb-2">
//                         <h1 class="font-bold">${data.name}</h1>
//                     <p>${data.date}</p>
//                     </div>
//                     <p class="font-bold">16216</p>
//                 </div>
//                 `;
//         document.getElementById("call-history").appendChild(div)

                
//     }
// })



