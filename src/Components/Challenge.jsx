const ChallengeComponente = () => {

    let a = 10;
    let b = 15;
    return (
        <div>
            <h1> componente IMPORTADO</h1>
            <h2>VAMO GANHAR MUITA GRANA</h2>
            <p> A: {a}</p>
            <p> B: {b}</p>
            <p> A + B: {a + b}</p>
            <button onClick={() => alert(5+8)}>Clique aqui</button>
            <button onClick={() => alert(a+b)}>Clique aqui</button>
            <br/>
            <br/>
            <br/>

        </div>

    ) 
}

export default ChallengeComponente;
// Compare this snippet from fundamentos/src/Components/FristComponents.jsx:
