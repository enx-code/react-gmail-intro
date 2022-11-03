import './styles/app.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
// import backArrow from './assets/icons/back-arrow.png'
// import downloadButton from './assets/icons/download-button.png'
// import rateStarButton from './assets/icons/rate-star-button.png'
// import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import Header from './Header'
import LeftMenu from './LeftMenu'
import EmailView from './EmailView'
function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
