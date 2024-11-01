



export function Result({ correct, incorrect, userAnswers, questions,  }) {
    
    const totalQuestions = questions.length; // Toplam soru sayısı
    const emptyAnswers = totalQuestions - (correct + incorrect); // Boş cevap sayısını hesapla

    return (
        <div className="container">
            <h2>Test Sonucu</h2>
            <p>Doğru Sayısı: {correct}</p>
            <p style={{color:"red", fontWeight:"900"}} >Yanlış Sayısı: {incorrect}</p>
            <p style={{fontWeight:900, color:"gray"}} >  Boş Sayısı: {emptyAnswers} </p>  
            <h4>Detaylar</h4>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{index + 1}. Soru:</p>
                    <p>Cevabınız: {userAnswers[index] || "Cevap verilmedi" }</p>
                    <p>Doğru Cevap: {question.answer}</p>
                </div>
            ))}
        </div>
    );
}
