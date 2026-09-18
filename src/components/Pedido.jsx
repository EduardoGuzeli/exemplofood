import { useState } from "react"

// Array de objetos contendo o estado inicial do cardapio
const cardapio=[
  { id: 1, nome: "Combo-01", preco: 25.00, disponivel: true, quantidade: 0 },
  { id: 2, nome: "Combo-02", preco: 35.00, disponivel: true, quantidade: 0 },
  { id: 3, nome: "Combo-03", preco: 45.00, disponivel: false, quantidade: 0 },
  { id: 4, nome: "Combo-04", preco: 55.00, disponivel: true, quantidade: 0 },
];

const Pedido = () => {

  // HOOK - useState- Manipula o estado da variavel 
  // Estados para gerenciar a lista de items do cardápio
  const[items,setItems]=useState(cardapio);
  const[status,setStatus]=useState("");
  const[enviar,setEnviar]=useState(false);

  // Valor fixo adicionado ao total quando tiver itens do carrinho
  const taxaEntrega=5.00;

  // Função que altera a quantidade do pedido 
  const AlterarQuantidade =(id,valor)=>{
    setItems(alt =>
      // MAP: Cria um novo array e percorre os items sem modificar o original(IMUTABILIDADE)
      alt.map(item=>
        // TERNARIO: Verifica seu item da iteração atual é o que deve ser alterado 
        // SPRED (...item): Mantem os dados antigos e adiciona os novos
        // MATH.MAX: Objeto que garante que a quantidade nunca seja menor que 0
        item.id === id ? {...item,quantidade: Math.Max(0,item.quantidade + valor)}:item
      )
    )
  }

  // FILTER: Seleciona apenas os produtos disponiveis do carrinho
  const produtosDisponiveis = items.filter(item =>item.disponivel);
  const carrinho = items.filter(item => item.quantidade > 0);

  // REDUCE: Calcula a soma dos itens (Preco + quantidade) e adiciona a taxa de entrega 
  const subTotal = carrinho.reduce((ac,item)=> ac + item.preco * item.quantidade,0);
  const total =subTotal >0 ? subTotal + taxaEntrega: 0;

  //SIMULAÇÃO DO CICLO DE VIDA DE ENTREGA USANDO TEMPORIZADOR ASSÍNCRONO
  const ConfirmarPedido=()=>{
    setEnviar(true);
    setStatus("Restaurante Confirmou pagamento, preparando pedido");
    setTimeout(()=> {
      setStatus("Seu pedido saiu para entrega")
      setEnviar(false);
    },5000)
    setTimeout(()=>{
      setStatus("Seu pedido foi entregue com sucesso");
      setEnviar(false)
    },10000)
  }


  return (
    <>
      
    </>
  )
}

export default Pedido
