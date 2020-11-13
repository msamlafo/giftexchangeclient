// display  by user
function displayMine(){
    // console.log('displayMine function called');

    const accessToken = localStorage.getItem('SessionToken');

    fetch('http://localhost:3000/giftexchange/mine', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error){
        console.error('Error:', error);
    })
    .then(function(response){
        let display = document.getElementById('giftExchange');
        // help with understanding why it is not i<=display.childNodes.length. Also I do not see the promise in my console when I click on see my posts
        for(i = 0; i = display.childNodes.length; i++){
            display.removeChild(display.firstChild);
        }

        if(response.length === 0){
            let display = document.getElementById('giftExchange');
            let header = document.createElement('h5');
            display.appendChild(header);
            header.textContent= "You haven't made any gift exchange entries yet!";
            header.setAttribute("class", "noPosts");

        } else {
            for (i = 0; i < response.length; i++){
                let display = document.getElementById('giftExchange');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5');
                let subtitle = document.createElement('h6');
                let para = document.createElement('h6');
                let para2 = document.createElement('h6');
                let editBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');

                let current = response[i];
                let name = current.name;
                let gift = current.gift;
                let season = current.season;
                let amount = current.amount;

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);
                body.appendChild(para2);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text');
                para2.setAttribute('class', 'card-text');

                editBtn.setAttribute('class', 'btn btn-dark editBtn');
                editBtn.setAttribute('type', 'button');
                editBtn.setAttribute('onclick', `editGift(${current.id})`);

                deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
                deleteBtn.setAttribute('type', 'button');
                deleteBtn.setAttribute('onclick', `deleteGift(${current.id})`);

                header.textContent = name;
                subtitle.textContent = gift;
                para.textContent = season;
                para2.textContent = amount;
                editBtn.textContent = 'Edit';
                deleteBtn.textContent = 'Delete';
            }
        }
    })

}

// Display all
function displayAll(){
    // console.log('displayAll function called');

    fetch('http://localhost:3000/giftexchange/', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json' 
        })
    })
    .then (function(response){
        return response.json();
    })
    .catch(function(error){
        console.log('Error:', error);
    })
    .then(function(response){
        console.log(response)
        let display = document.getElementById('giftExchange');

        for(i = 0; i = display.childNodes.length; i++){
            display.removeChild(display.firstChild);
        }

        if(response.length === 0){
            let display = document.getElementById('giftExchange');
            let header = document.createElement('h5');
            display.appendChild(header);
            header.textContent = 'There are not any post yet!';
            header.setAttribute('class', 'noPosts');

        } else {
            for (i = 0; i < response.length; i++){
                let display = document.getElementById('giftExchange');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5');
                let subtitle = document.createElement('h6');
                let para = document.createElement('h6');
                let para2 = document.createElement('h6');
                
                let current = response[i];
                let name = current.name;
                let gift = current.gift;
                let season = current.season;
                let amount = current.amount;

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text');
                para2.setAttribute('class', 'card-text');

                header.textContent = name;
                subtitle.textContent = gift;
                para.textContent = season;
                para2.textContent = amount;
               
            }
        
        }
    })
}


// Display by Season
function displayBySeason(){
    // console.log('displayByTitle function called');
    let giftSeason = document.getElementById('searchBar').value;
    fetch(`http://localhost:3000/giftexchange/${giftSeason}/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then (function(response){
        return response.json();
    })
    .catch(function(error){
        console.log('Error:', error);
    })
    .then(function(response){
        console.log(response)
        let display = document.getElementById('giftExchange');

        for(i = 0; i = display.childNodes.length; i++){
            display.removeChild(display.firstChild);
        }

        if(response.length === 0){
            let display = document.getElementById('giftExchange');
            let header = document.createElement('h5');
            display.appendChild(header);
            header.textContent = 'There are not any post with this season!';
            header.setAttribute('class', 'noPosts');
        
        } else {
            for (i = 0; i < response.length; i++){
                let display = document.getElementById('giftExchange');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5');
                let subtitle = document.createElement('h6');
                let para = document.createElement('h6');
                let para2 = document.createElement('h6');

                let current = response[i];
                let name = current.name;
                let gift = current.gift;
                let season = current.season;
                let amount = current.amount;

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text');
                para2.setAttribute('class', 'card-text');

                header.textContent = name;
                subtitle.textContent = gift;
                para.textContent = season;
                para2.textContent = amount;
            }
        } 
    })
}
    