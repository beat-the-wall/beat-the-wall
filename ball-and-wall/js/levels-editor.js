!function(){var n;n=function(){var n;return(n=((navigator.language?navigator.language:navigator.browserLanguage)+"").toLowerCase()).split("-").length>=2&&n.split("-")[0]==n.split("-")[1]?n.split("-")[0]:n},require(["app/i18/_"],function(o){require(["app/_"],function(i){var t;t=function(){o.exists(n())?i.gameOptions.get("window-options:lang")||i.gameOptions.set("window-options",{lang:n()}):i.gameOptions.get("window-options:lang")&&o.exists(i.gameOptions.get("window-options:lang"))||i.gameOptions.set("window-options",{lang:"en-us"}),o.setLanguage(i.gameOptions.get("window-options:lang")),i.preloader.showIndicator(),new i.LevelsEditor},i.gameOptions.isLoaded()?t():i.gameOptions.addListener("loaded",t)})})}();