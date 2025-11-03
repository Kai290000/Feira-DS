document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção de Elementos (Novos e Antigos)
    const btnConversarAgora = document.getElementById('btn-conversar-agora');
    const optionsContainer = document.getElementById('options-container'); // NOVO
    const btnChatDireto = document.getElementById('btn-chat-direto');     // NOVO

    // Links do Cabeçalho e Modal (mantidos do exemplo anterior, se aplicável)
    const linkPainelChat = document.getElementById('link-painel-chat');   
    const linkConta = document.getElementById('link-conta');
    
    // VARIÁVEL DE REDIRECIONAMENTO (Para o chat direto do site, caso não use modal)
    const LINK_CHAT_DIRETO_SITE = '/caminho-para-sua-pagina-de-chat.html'; // Ajuste esta URL


    // -------------------------
    // Funções de Ação
    // -------------------------
    
    // 1. Botão Inicial: Conversar Agora (Expande as opções)
    btnConversarAgora.addEventListener('click', () => {
        // Esconde o botão original
        btnConversarAgora.classList.add('hidden');
        
        // Revela o container de opções
        optionsContainer.classList.remove('hidden');
        optionsContainer.classList.add('visible');
    });
    
    // 2. Opção 2: Conversar Diretamente (Site)
    btnChatDireto.addEventListener('click', () => {
        // Opção A: Redirecionar para o chat (Se não quiser o modal)
        // window.location.href = LINK_CHAT_DIRETO_SITE;
        
        // Opção B: Abrir o Modal (Se você usar a solução do modal da resposta anterior)
        alert('Abrindo a interface de Chat Direto (Modal ou Redirecionamento).');
        // Exemplo: chatModal.classList.add('visible'); 
    });


    // --- Outros Handlers (Mantidos) ---
    linkPainelChat.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecionando para o Painel de Chat (Histórico)...');
    });

    linkConta.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Abrindo modal/página de Configurações de Conta...');
    });
});