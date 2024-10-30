//rafce kısayolmuşş

export function Start({onStart}){


    return(
        <>
            <div className="container" >
            <h1>Question App</h1>
            <h2>Sizin için harika sorular hazırladık!</h2>
            <p style={{color:"black"}} >Bu testte 10 ilginç soru sizi bekliyor! Her soruya 30 saniye süreniz var, ancak ilk 4 saniye boyunca cevap seçenekleri görünmeyecek. Test sonunda doğru ve yanlış sayılarınızı öğrenebilirsiniz. İyi şanslar!
            </p>
            <button id="start" onClick={onStart} >  {/*Burda bi on click kullanıcaz*/}
                Teste Başla
            </button>
            </div>
        </>
    )
}

