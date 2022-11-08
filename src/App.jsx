import { ListOfCategories } from './componets/ListOfCategories'
import { ListOfPhotoCards } from './componets/ListOfPhotoCards'
import { Logo } from './componets/Logo'
import { PhotoCard } from './componets/PhotoCard'

function App() {

  return (
    <div className='App'>
      <Logo/>
      <ListOfCategories />
      <ListOfPhotoCards/>
    </div>
  )
}

export default App
