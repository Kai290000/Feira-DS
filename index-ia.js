document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------------
    // Seleção de Elementos (Apenas os que precisam de Ações Complexas)
    // -------------------------
    const btnConversarAgora = document.getElementById('btn-conversar-agora');
    const linkPainelChat = document.getElementById('link-painel-chat');   
    const linkConta = document.getElementById('link-conta');       

    // -------------------------
    // ⚠️ LINKS QUE VOCÊ DEVE AJUSTAR (Restante) ⚠️
    // -------------------------
    
    // 1. Link da página para conversar com a IA
    const LINK_CONVERSAR_AGORA = 'https://ajuste-aqui-o-link-da-pagina-de-chat.com';


    // -------------------------
    // Funções de Ação
    // -------------------------
    
    // Botão Primário: Conversar Agora
    btnConversarAgora.addEventListener('click', () => {
        // Redireciona o usuário para a página de chat
        window.location.href = LINK_CONVERSAR_AGORA;
    });
    
    // Link do Cabeçalho: Painel de Chat
    linkPainelChat.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecionando para o Painel de Chat (Histórico)...');
        // Se você tiver uma URL específica: window.location.href = '/painel-chat'; 
    });

    // Link do Cabeçalho: Conta
    linkConta.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Abrindo modal/página de Configurações de Conta (Deletar, Memória)...');
    });

    // NOTA: Os botões "Grupo de Suporte" e "Suporte WhatsApp" agora funcionam diretamente via HTML (<a>).
});