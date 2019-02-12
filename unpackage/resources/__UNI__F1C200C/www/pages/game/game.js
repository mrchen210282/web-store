
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"index{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"status_bar{background:#8a6de9}\n.",[1],"status_bar,.",[1],"top_view{height:var(--status-bar-height);width:100%}\n.",[1],"top_view{position:fixed;top:0}\n.",[1],"content{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/game/game.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      