



export function Result({ correct, incorrect, userAnswers, questions }) {
    return (
        <div className="container">
            <h2>Test Sonucu</h2>
            <p>Doğru Sayısı: {correct}</p>
            <p style={{color:"red", fontWeight:"900"}} >Yanlış Sayısı: {incorrect}</p>
            <h4>Detaylar</h4>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{index + 1}. Soru:</p>
                    <p>Cevabınız: {userAnswers[index]}</p>
                    <p>Doğru Cevap: {question.answer}</p>
                </div>
            ))}
        </div>
    );
}
