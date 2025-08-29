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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
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
        return parseIntCoin;  
    }
    else{
         alert("You don't have enough coins. You need at least 20 Coins to make a call." )
    }
})
