import React, { useEffect, useState } from 'react';
export function Questions({questionData, currentQuestionIndex,setCurrentQuestionIndex, setCorrectAnswers, setIncorrectAnswers,  setUserAnswers, setScreen, questions }){


    const [showOptions, setShowOptions] = useState(false);//şıkların 4 saniye gecikmesi 


     // Cevap seçildiğinde bir sonraki soruya geç
     const handleAnswerClick = (option) => {
        setShowOptions(false); // Cevap seçildiğinde seçenekleri gizle
        // Kullanıcının cevabını userAnswers dizisine ekle  //BURAYI EKLEDİM
        setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = option; // Cevabı kaydet
            return newAnswers;
        });
         // Cevap kontrolü result için yine
        // Doğru cevabı kontrol et
    if (option === questionData.answer) {
        setCorrectAnswers((prev) => prev + 1); // Doğru sayısını artır
    } else {
        setIncorrectAnswers((prev) => prev + 1); // Yanlış sayısını artır
    }
        // Sorular bittiğinde sonuç ekranını göster
    if (currentQuestionIndex >= questions.length - 1) {
        setScreen("result"); // Sorular bittiğinde sonuç ekranını göster
    } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Bir sonraki soruya geç
    }
};


   // 30 saniye sonra bir sonraki soruya geçiş
   useEffect(() => {
    const timer = setTimeout(() => {
        // Süre dolduğunda cevap verilmediğini belirt  //BURAYI EKLEDİM
        if (!showOptions) {
            setUserAnswers((prevAnswers) => {
                const newAnswers = [...prevAnswers];
                newAnswers[currentQuestionIndex] = "Cevap verilmedi"; // Cevap verilmedi kaydet
                return newAnswers;
            });
        }
         
        
        if (currentQuestionIndex >= questions.length - 1) {   //son soru için
            setScreen("result");
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);  
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 3000);

    return () => clearTimeout(timer);
}, [currentQuestionIndex]);

    useEffect(() => {
        setShowOptions(false); // Her yeni soru için seçenekleri gizle
        const timer = setTimeout(() => {
            setShowOptions(true); // 4 saniye sonra seçenekleri göster
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentQuestionIndex]); // currentQuestionIndex değiştiğinde çalışır

    return(
        <>
            <div className="container">
               <h1>Question App</h1>
               <hr />
               <img 
                src={questionData.media}
               alt="question image" />  
               <h2>{questionData.question}</h2>
               <div className="choices">
                    {showOptions && questionData.options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
                    ))}
                </div>
            </div>

        </>
    )
}
