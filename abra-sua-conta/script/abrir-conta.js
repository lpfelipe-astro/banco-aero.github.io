        // Função para gerar número de cartão aleatório
        function generateCardNumber() {
            let number = '';
            for (let i = 0; i < 4; i++) {
                number += Math.floor(Math.random() * 10000).toString().padStart(4, '0') + ' ';
            }
            return number.trim();
        }

        // Função para gerar validade aleatória (mês/ano)
        function generateExpirationDate() {
            const month = Math.floor(Math.random() * 12) + 1; // Gera mês entre 1 e 12
            const year = Math.floor(Math.random() * 10) + 2024; // Gera ano entre 2024 e 2033
            return `${month.toString().padStart(2, '0')}/${year}`;
        }

        // Função que atualiza a exibição do cartão
        function updateCardDisplay() {
            const cardName = document.getElementById('cardName').value;

            // Gera os dados aleatórios
            const cardNumber = generateCardNumber();
            const expirationDate = generateExpirationDate();

            // Atualiza a exibição do cartão
            document.getElementById('cardDisplayName').textContent = cardName || 'Seu Nome';
            document.getElementById('cardDisplayNumber').textContent = cardNumber;
            document.getElementById('cardDisplayExpiration').textContent = expirationDate;
            document.getElementById('cardDisplayType').textContent = 'Tipo: Crédito, Débito'; // Fixado com ambos os tipos
        }

        // Quando o formulário é enviado
        document.getElementById('cardForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o envio do formulário

            updateCardDisplay(); // Atualiza a visualização do cartão com os dados inseridos
        });