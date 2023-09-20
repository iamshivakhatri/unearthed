


const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'


const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

headerLeft.append(headerLogo)
headerLeft.append(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'


const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

headerRight.addEventListener('click', () => {
    window.location.href = '/'
})

headerRight.append(headerButton)

headerContainer.append(headerLeft)
headerContainer.append(headerRight)

header.appendChild(headerContainer)







