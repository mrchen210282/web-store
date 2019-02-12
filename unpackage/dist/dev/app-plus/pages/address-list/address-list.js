
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"container { background-color: #F2f2f2; }\n.",[1],"address-list { width: 100%; background-color: #fff; margin-top: ",[0,20],"; padding-bottom: ",[0,100],"; }\n.",[1],"address-list .",[1],"a-address { width: ",[0,720],"; margin-left: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,30]," 0; border-bottom: ",[0,1]," solid #eee; }\n.",[1],"a-address .",[1],"left-text { width: ",[0,610],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"a-address .",[1],"left-text .",[1],"name-tel { margin-bottom: ",[0,20],"; }\n.",[1],"a-address .",[1],"left-text .",[1],"address-box { font-size: ",[0,24],"; color: #888888; line-height: ",[0,36],"; }\n",],undefined,{path:"./pages/address-list/address-list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/address-list/address-list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      