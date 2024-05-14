import React, {useState} from "react";

export default function ListaDeContatos(){
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("")

    const adicionarContato = () =>{
        if(nome && telefone){
            setContatos([...contatos,{nome,telefone}]);
            setNome("");
            setTelefone("");
        }
    };

    return(
        <>
        <div className="div">
        <h2>Lista de Contatos</h2>
        <p>Adicione os seus contatos aqui</p>
        <div>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do contato"/>
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Número"/>
        </div>
        <button onClick={adicionarContato}>Adicionar Contato</button>
        <ul>
            {contatos.map((contato,index) =>(
                <li key={index}><strong>{contato.nome}: </strong> {contato.telefone}</li>
            ))}
            
        </ul>
        </div>
        </>
    );
}