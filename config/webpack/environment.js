const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

//プラグインを追加。
//ProvidePluginは、自動的にモジュールをロードする。
//importが不要になる

environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',//$に格納
    jQuery: 'jquery/src/jquery',
    Popper: "popper.js"
  })
)
module.exports = environment