import TranslateCard from './TranslateCard'
import 'bootstrap/dist/css/bootstrap.min.css'


function Translations() {
  const translatedWordsArray = JSON.parse(window.localStorage.getItem('sentences'))

  let translationItems = []

  if (translatedWordsArray) {
    translationItems = translatedWordsArray.map((translation) => <TranslateCard word={translation} /> )
  }
  
  return (
    <div>
      {translationItems}
    </div>
  )
}

export default Translations
