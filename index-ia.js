document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------------
    // 1. Lógica da Animação de Intro
    // -------------------------
    const intro = document.getElementById('page-intro');
    const mainContentWrapper = document.getElementById('main-content-wrapper');
    const introDuration = 3000; // 3 segundos (3000ms)

    setTimeout(() => {
        // Esconde a Intro suavemente
        intro.classList.add('hidden');

        // Revela o Conteúdo Principal com o efeito de subida
        mainContentWrapper.classList.add('loaded');
        
        // Remove o elemento da Intro totalmente após a transição (500ms)
        setTimeout(() => {
            intro.style.display = 'none';
        }, 500); 
        
    }, introDuration);


    // -------------------------
    // 2. Lógica dos Botões (Mantida)
    // -------------------------
    const btnConversarAgora = document.getElementById('btn-conversar-agora');
    const optionsContainer = document.getElementById('options-container');
    const btnChatDireto = document.getElementById('btn-chat-direto');     

    // Links do Cabeçalho
    const linkPainelChat = document.getElementById('link-painel-chat');   
    const linkConta = document.getElementById('link-conta');
    
    // Ação: Botão Inicial (Expande as opções)
    btnConversarAgora.addEventListener('click', () => {
        btnConversarAgora.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
        optionsContainer.classList.add('visible');
    });
    
    // Ação: Conversar Diretamente (Site)
    btnChatDireto.addEventListener('click', () => {
        // Alerta provisório: Se você usar a solução do modal da resposta anterior, substitua aqui
        alert('Abrindo a interface de Chat Direto (Modal ou Redirecionamento).');
    });


    // Ação: Outros Handlers
    linkPainelChat.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecionando para o Painel de Chat (Histórico)...');
    });

    linkConta.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Abrindo modal/página de Configurações de Conta...');
    });
});