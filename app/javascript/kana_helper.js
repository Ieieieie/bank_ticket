document.addEventListener("turbolinks:load", function(){
    $(function () {
        //            input要素のフォーカスを失ったタイミングで発生します。
                    $('#account-name').blur(function () {
        //              ひらがなを自動変換するイベントの呼び出し
                        kanaChange($(this));
        //
        //              空値及びカナ以外の値が入っていないかチェックするバリデーション
                        emptyCheck($(this));
                    });
        
                    kanaChange = function (ele) {
                        var val = ele.val();
        //                正規表現でひらがなを引数の値に置換
                        var kana = val.replace(/[ぁ-ん]/g, function (s) {
                            // ユニコード値でカナに変換
                            return String.fromCharCode(s.charCodeAt(0) + 0x60)
                        });
        
                        if (val.match(/[ぁ-ん]/g)) {
                            $(ele).val(kana)
                        }
        
                    };
        
                    emptyCheck = function (ele) {
                        var val = ele.val();
        //                空値の場合、背景へCSSクラス適用し、テキストを追加
                        if (val == "") {
                            $('#test').addClass('color');
                            $("#msg-test").text("入力されていません。");
                        }
        //                カナ以外の値が入っていないる場合背景へCSSクラス適用し、テキストを追加
                        else if(val.match( /[^ぁ-んァ-ン　\s]+/ )) {
                            $('#test').addClass('color');
                            $("#msg-test").text("全角カナ以外が登録されています。");
                        }
        
                        else {
                            $('#test').removeClass('color');
                            $("#msg-test").text("");
                        }
                    };
                });
  })
