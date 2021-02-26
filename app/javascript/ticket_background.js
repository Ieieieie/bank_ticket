document.addEventListener("turbolinks:load", function(){
    $(function(){
        $('.bank-name').each(function(){
            switch(this.textContent) {
                case 'みずほ銀行':
                    $(this).parents('.ticket-box').css('background', '#333F87');
                break;
                case '楽天銀行':
                    $(this).parents('.ticket-box').css('background', '#BF1920');
                break;
                case 'りそな銀行':
                    $(this).parents('.ticket-box').css('background', '#00A065');
                break;
                case '三菱ＵＦＪ銀行':
                    $(this).parents('.ticket-box').css('background', '#E20300');
                break;
                case '新生銀行':
                    $(this).parents('.ticket-box').css('background', '#7EC1E2');
                break;
                case 'ゆうちょ銀行':
                    $(this).parents('.ticket-box').css('background', '#009400');
                break;
                case '三井住友銀行':
                    $(this).parents('.ticket-box').css('background', '#A8DB32');
                break;
                default:
                    $(this).parents('.ticket-box').css('background', '#F7F7F7');
            }
        });
    })
})
