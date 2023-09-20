const renderGifts = async () => {



    const response = await fetch('/gifts');
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.className = 'top-container'
            topContainer.append(gift)
        
            const bottomContainer = document.createElement('div')
            bottomContainer.className = 'bottom-container'
        
            //set background image of top container
            topContainer.style.backgroundImage = `url(${gift.image})`
        
            const name = document.createElement('h3')
            bottomContainer.append(name)
            name.textContent = gift.name
        
        
            const price = document.createElement('p')
            price.textContent = gift.price
            bottomContainer.append(price)
        
        
            const audience = document.createElement('p')
            audience.textContent = 'Great For:' + gift.audience
            bottomContainer.append(audience)
        
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)
        
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })

    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.append(message)
    
    }

}

renderGifts()
