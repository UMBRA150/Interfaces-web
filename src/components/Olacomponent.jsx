    function Olacomponent({nome, idade, mail, titulo}) {

    const validarEmail = (email) => {
        if (!email) return false;

        const partes = email.split("@");
        if (partes.length !== 2) return false;

        const [antesDoArroba, depoisDoArroba] = partes;
        if (!antesDoArroba || !depoisDoArroba) return false;

        const dominioPartes = depoisDoArroba.split(".");
        if (dominioPartes.length < 2) return false;

        const [dominio, extensao] = dominioPartes;
        if (!dominio || !extensao) return false;

        return true;
    };

        let mensagemAviso;
        if (idade >= 18) {
            mensagemAviso = <>Você é maior de idade</>
        } else {
            mensagemAviso = <>Você é menor de idade</>
        }

        return <>
        <hr />
        Ola <b>{nome}</b>-<b>{titulo}</b> com <b>{idade}</b> anos! <br/>    
        Email: <b>{mail? (validarEmail(mail)? mail: "Email inválido"): "Sem email"}</b>
        <br/>
        {mensagemAviso}
        </>
        
    }

    export default Olacomponent;