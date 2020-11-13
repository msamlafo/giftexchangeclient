// post Gift
function postGift(){
    // console.log("postGift Function called")
    let name = document.getElementById('name').value;
    let gift = document.getElementById('gift').value;
    let season = document.getElementById('season').value;
    let amount = document.getElementById('amount').value;
    const accessToken = localStorage.getItem('SessionToken');
    let newEntry = { giftexchange: { name: name, gift: gift, season: season, amount: amount } };

    fetch('http://localhost:3000/giftexchange/create', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }),
        body: JSON.stringify(newEntry)
    })
    .then(response => {
        console.log(response.json())
        displayMine()
    })
    .catch((err) => {
        console.log(err)
    })

}

// update GiftEntry
function editGift(postId){
    // console.log('editGiftEntry function called')
    console.log(postId)
    const fetch_url = `http://localhost:3000/giftexchange/update/${postId}`
    const accessToken = localStorage.getItem('SessionToken')
    
    let card = document.getElementById(postId)
    let input = document.createElement('input')

    if (card.childNodes.length < 2) {
        card.append(input)
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'updateEntry')
        input.setAttribute('placeholder', 'Edit your journal entry')
    } else {
        console.log('update');
        let updated = document.getElementById('updateEntry').value
        let updateEntry = {giftexchange: 
            {gift: updated}
        };
         fetch(fetch_url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            body: JSON.stringify(updateEntry)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            displayMine();
        })

        card.removeChild(card.lastChild)
    }

}

// delete GiftEntry
function deleteGift(postId){
    console.log('deleteGift function called')
    console.log(postId)

    const fetch_url = `http://localhost:3000/giftexchange/delete/${postId}`
    const accessToken = localStorage.getItem('SessionToken')

    fetch(fetch_url, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
    }
    })
        .then(response => {
            console.log(response);
            displayMine();
        })
}