const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/gifts')
    const data = await response.json()
    const giftContent = document.getElementById('gift-content')
    let gift
    gift = data.find(gift => gift.id === requestedID)
    if (gift) {
      
    }
    else {
          
    }
    const message = document.createElement('h2')
    message.textContent = 'No Gifts Available 😞'
    giftContent.appendChild(message)
    document.getElementById('image').src = gift.image
    document.getElementById('name').textContent = gift.name
    document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
    document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
    document.getElementById('audience').textContent = 'Great For: ' + gift.audience
    document.getElementById('description').textContent = gift.description
    document.title = `UnEarthed - ${gift.name}`
    


}
const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderGift()
}
