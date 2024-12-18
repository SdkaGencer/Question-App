import React, { useState } from 'react';
import { questions } from "./assets/questions" //datamı import ettim
import { Start } from "./components/Start"  //Start componentim importu
import { Questions } from "./components/Questions" //Question componentimin importu
import { Result } from './components/Results'; //results componentimin importu


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //bir ilk değer belirledim. kendim isimlendirdim ve sıfıra eşitledim yanındakiyle değişiklik sağlıcam
  const [testStarted, setTestStarted] = useState(false); // Testin başlamış olup olmadığını kontrol eden durum
  //result kısmı için yanıtların sayısı
  const [correctAnswers, setCorrectAnswers] = useState(0); //doğru sayısı
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);  //yanlış sayısı
  const [userAnswers, setUserAnswers] = useState([]); //kullanıcı cevapları
  //akış için
  const [screen, setScreen] = useState("start"); // "start", "questions" veya "result" değerlerini alacak



  const startTest = () => {
    setCurrentQuestionIndex(0); // Soruların indeksini sıfırla
    setTestStarted(true); // Testin başladığını ayarla
    setScreen("questions"); // Ekranı "questions" olarak ayarla
};

  
  // Geçerli soruyu data.js'ten alıyoruz:
  const currentQuestion = questions[currentQuestionIndex]; //bu şimdi içinde datamın ilk nesnesini barındırıyo
  
  
/* return kısmında propslarımı yazıyorum ve sonrasında ilgili componente de props geçiyorum */
  return (
    <>
       {screen === "start" && <Start onStart={startTest} />} {/* Başlangıç ekranıyla açılcak ekran */}
        {screen === "questions" && (
            <Questions            
                questionData={currentQuestion} 
                setCurrentQuestionIndex={setCurrentQuestionIndex} 
                currentQuestionIndex={currentQuestionIndex} 
                setCorrectAnswers={setCorrectAnswers}
                setIncorrectAnswers={setIncorrectAnswers}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                setScreen={setScreen}
                questions={questions} 
            />
        )}
        {screen === "result" && (
            <Result 
                correct={correctAnswers} 
                incorrect={incorrectAnswers} 
                userAnswers={userAnswers} 
                questions={questions} 
            />
        )}
    </>
  )
}

export default App
