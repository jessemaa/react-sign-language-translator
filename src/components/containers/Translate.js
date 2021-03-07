import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TranslateForm from '../forms/TranslateForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from '../shared/AppHeader'
import TranslateCard from '../translations/TranslateCard'
import { useState } from 'react'

function Translate() {
  const [ sentence, setSentence ] = useState('')

  function saveToArray(sentences) {
    if (sentences !== "" && sentences != null) {
      let sentenceArray = JSON.parse(window.localStorage.getItem('sentences')) || [];
      if (sentenceArray.length === 10) {
        sentenceArray.shift()
      }
      sentenceArray.push(sentences);
      console.log(sentenceArray.length)
      localStorage.setItem('sentences', JSON.stringify(sentenceArray));
      console.log(window.localStorage.getItem('sentences'))
    }
  }

  function translateSentence(word) {
    setSentence(word)
  }

  return (
    <div>
      <AppHeader />
      <Container>
          <Jumbotron className="translate-jumbotron">
              <TranslateForm save={saveToArray} translate={translateSentence}/>
          </Jumbotron>
          <Jumbotron>
              <h2>Translation</h2>
              {sentence && <TranslateCard word={sentence} />}
          </Jumbotron>
      </Container>
    </div>
  )
}

export default Translate
