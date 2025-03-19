
        // Código JavaScript para adicionar itens ao carrinho
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.adicionar');
            const listaCarrinho = document.querySelector('#lista-carrinho');
            const finalizarPedidoButton = document.querySelector('#finalizar-pedido');

            // Função para adicionar item ao carrinho
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const produto = e.target.closest('.comida');
                    const nomeProduto = produto.querySelector('h2').textContent;
                    const precoProduto = produto.querySelector('h4').textContent;

                    // Cria um item para o carrinho
                    const itemCarrinho = document.createElement('li');
                    itemCarrinho.textContent = `${nomeProduto} - ${precoProduto}`;
                    listaCarrinho.appendChild(itemCarrinho);
                });
            });

            // Finalizar pedido
            finalizarPedidoButton.addEventListener('click', () => {
                alert('Pedido finalizado!');
                listaCarrinho.innerHTML = '';
            });
        });

