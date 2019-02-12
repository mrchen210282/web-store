
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(\x27https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf\x27) format(\x27truetype\x27); }\n.",[1],"uni-flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-flex-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"uni-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-h6 { font-size: 24px; color: #8f8f94; }\n.",[1],"uni-h5 { font-size: 28px; color: #8f8f94; }\n.",[1],"uni-h4 { font-size: 36px; }\n.",[1],"uni-h3 { font-size: 48px; font-weight: 600; }\n.",[1],"uni-h2 { font-size: 60px; font-weight: 600; }\n.",[1],"uni-h1 { font-size: 72px; font-weight: 600; }\n.",[1],"uni-ellipsis { overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"uni-input { height: 80px; min-height: 80px; line-height: 80px; }\n.",[1],"uni-label { width: 210px; word-wrap: break-word; word-break: break-all; }\n.",[1],"uni-badge { padding: 4px 14px; font-size: 24px; height: 24px; line-height: 1; color: #333; background-color: rgba(0, 0, 0, .15); border-radius: 200px; }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 10px 0 0; color: #929292; background-color: transparent }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff }\n.",[1],"uni-badge-blue.",[1],"uni-badge-inverted, .",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent }\n.",[1],"uni-badge-green, .",[1],"uni-badge-success { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge-green.",[1],"uni-badge-inverted, .",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent }\n.",[1],"uni-badge-warning, .",[1],"uni-badge-yellow { color: #fff; background-color: #f0ad4e }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted, .",[1],"uni-badge-yellow.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent }\n.",[1],"uni-badge-danger, .",[1],"uni-badge-red { color: #fff; background-color: #dd524d }\n.",[1],"uni-badge-danger.",[1],"uni-badge-inverted, .",[1],"uni-badge-red.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent }\n.",[1],"uni-badge-purple, .",[1],"uni-badge-royal { color: #fff; background-color: #8a6de9 }\n.",[1],"uni-badge-purple.",[1],"uni-badge-inverted, .",[1],"uni-badge-royal.",[1],"uni-badge-inverted { color: #8a6de9; background-color: transparent }\n.",[1],"uni-collapse-content { height: 0; width: 100%; overflow: hidden; }\n.",[1],"uni-collapse-content.",[1],"uni-active { height: auto; }\n.",[1],"uni-card { background: #fff; border-radius: 8px; margin: 20px; position: relative; -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .3); box-shadow: 0 2px 4px rgba(0, 0, 0, .3); }\n.",[1],"uni-card-content { font-size: 30px; }\n.",[1],"uni-card-content-inner { position: relative; padding: 30px; }\n.",[1],"uni-card-footer, .",[1],"uni-card-header { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; min-height: 50px; padding: 20px 30px; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-card-header { font-size: 36px; }\n.",[1],"uni-card-footer { color: #6d6d72; }\n.",[1],"uni-card-footer:before, .",[1],"uni-card-header:after { position: absolute; top: 0; right: 0; left: 0; height: 2px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-card-header:after { top: auto; bottom: 0; }\n.",[1],"uni-card-media { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"uni-card-media-logo { height: 84px; width: 84px; margin-right: 20px; }\n.",[1],"uni-card-media-body { height: 84px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"uni-card-media-text-top { line-height: 36px; font-size: 34px; }\n.",[1],"uni-card-media-text-bottom { line-height: 30px; font-size: 28px; color: #8f8f94; }\n.",[1],"uni-card-link { color: #007AFF; }\n.",[1],"uni-list { background-color: #FFFFFF; position: relative; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list:after { position: absolute; z-index: 10; right: 0; bottom: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list:before { position: absolute; z-index: 10; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-list-cell-hover { background-color: #eee; }\n.",[1],"uni-list-cell-pd { padding: 22px 30px; }\n.",[1],"uni-list-cell-left { padding: 0 30px; }\n.",[1],"uni-list-cell-db, .",[1],"uni-list-cell-right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"uni-list-cell:after { position: absolute; right: 0; bottom: 0; left: 30px; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list .",[1],"uni-list-cell:last-child:after { height: 0px; }\n.",[1],"uni-list-cell-last.",[1],"uni-list-cell:after { height: 0px; }\n.",[1],"uni-list-cell-divider { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; color: #999; background-color: #f7f7f7; padding: 10px 20px; }\n.",[1],"uni-list-cell-divider:before { position: absolute; right: 0; top: 0; left: 0px; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-divider:after { position: absolute; right: 0; bottom: 0; left: 0px; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); -ms-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-navigate { padding: 22px 30px; line-height: 48px; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-list-cell-navigate { padding-right: 36px; }\n.",[1],"uni-navigate-badge { margin-right: 20px; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-right:after { font-family: uniicons; content: \x27\\E583\x27; position: absolute; right: 24px; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom:after { font-family: uniicons; content: \x27\\E581\x27; position: absolute; right: 24px; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom.",[1],"uni-active:after { font-family: uniicons; content: \x27\\E580\x27; position: absolute; right: 24px; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-collapse.",[1],"uni-list-cell { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-active { background: #eee; }\n.",[1],"uni-list.",[1],"uni-collapse { -webkit-box-sizing: border-box; box-sizing: border-box; height: 0; overflow: hidden; }\n.",[1],"uni-collapse .",[1],"uni-list-cell { padding-left: 36px; }\n.",[1],"uni-collapse .",[1],"uni-list-cell:after { left: 52px; }\n.",[1],"uni-list.",[1],"uni-active { height: auto; }\n.",[1],"uni-triplex-row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 22px 30px; }\n.",[1],"uni-triplex-right, .",[1],"uni-triplex-left { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-triplex-left { width: 84%; }\n.",[1],"uni-triplex-right { width: 16%; text-align: right; }\n.",[1],"uni-media-list { padding: 22px 30px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-navigate-right.",[1],"uni-media-list { padding-right: 74px; }\n.",[1],"uni-pull-right { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -webkit-flex-direction: row-reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }\n.",[1],"uni-pull-right\x3e.",[1],"uni-media-list-logo { margin-right: 0px; margin-left: 20px; }\n.",[1],"uni-media-list-logo { height: 84px; width: 84px; margin-right: 20px; }\n.",[1],"uni-media-list-body { height: 84px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; overflow: hidden; }\n.",[1],"uni-media-list-text-top { width: 100%; line-height: 36px; font-size: 34px; }\n.",[1],"uni-media-list-text-bottom { width: 100%; line-height: 30px; font-size: 28px; color: #8f8f94; }\n.",[1],"uni-grid-9 { background: #f2f2f2; width: 750px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; border-top: 2px solid #eee; }\n.",[1],"uni-grid-9-item { width: 250px; height: 200px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom: 2px solid; border-right: 2px solid; border-color: #eee; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"no-border-right { border-right: none; }\n.",[1],"uni-grid-9-image { width: 100px; height: 100px; }\n.",[1],"uni-grid-9-text { width: 250px; line-height: 50px; height: 50px; text-align: center; font-size: 30px; }\n.",[1],"uni-grid-9-item-hover { background: rgba(0, 0, 0, 0.1); }\n.",[1],"uni-uploader { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-uploader-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-uploader-info { color: #B2B2B2; }\n.",[1],"uni-uploader-body { margin-top: 16px; overflow: hidden; }\n.",[1],"uni-uploader__file { float: left; margin-right: 18px; margin-bottom: 18px; }\n.",[1],"uni-uploader__img { display: block; width: 158px; height: 158px; }\n.",[1],"uni-uploader__input-box { float: left; position: relative; margin-right: 18px; margin-bottom: 18px; width: 154px; height: 154px; border: 2px solid #D9D9D9; }\n.",[1],"uni-uploader__input-box:before, .",[1],"uni-uploader__input-box:after { content: \x22 \x22; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #D9D9D9; }\n.",[1],"uni-uploader__input-box:before { width: 4px; height: 79px; }\n.",[1],"uni-uploader__input-box:after { width: 79px; height: 4px; }\n.",[1],"uni-uploader__input-box:active { border-color: #999999; }\n.",[1],"uni-uploader__input-box:active:before, .",[1],"uni-uploader__input-box:active:after { background-color: #999999; }\n.",[1],"uni-uploader__input { position: absolute; z-index: 1; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; }\n.",[1],"feedback-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 20px; color: #8f8f94; font-size: 28px; }\n.",[1],"feedback-star-view.",[1],"feedback-title { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; margin: 0; }\n.",[1],"feedback-quick { position: relative; padding-right: 40px; }\n.",[1],"feedback-quick:after { font-family: uniicons; font-size: 40px; content: \x27\\E581\x27; position: absolute; right: 0; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"feedback-body { background: #fff; }\n.",[1],"feedback-textare { height: 200px; font-size: 34px; padding: 20px 30px 0; }\n.",[1],"feedback-input { height: 80px; font-size: 34px; padding-left: 20px; }\n.",[1],"feedback-uploader { padding: 22px 20px; }\n.",[1],"feedback-star { font-family: uniicons; font-size: 40px; margin-left: 6px; }\n.",[1],"feedback-star-view { margin-left: 20px; }\n.",[1],"feedback-star:after { content: \x27\\E408\x27; }\n.",[1],"feedback-star.",[1],"active { color: #FFB400; }\n.",[1],"feedback-star.",[1],"active:after { content: \x27\\E438\x27; }\n.",[1],"feedback-submit { background: #007AFF; color: #FFFFFF; margin: 20px; }\n.",[1],"aui-dri { height: 8px; background: #e5e5e5; }\n.",[1],"aui-dri2 { height: 49px; }\n.",[1],"aui-address-content { background: #007AFF; }\n.",[1],"aui-address-well { padding-bottom: 44px; }\n.",[1],"aui-address-box-list { position: relative; z-index: 320; }\n.",[1],"aui-address-box-default { padding: 20px 10px; position: relative; display: block; background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAKBAMAAACOO0tGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf///4u16Oxtbezz/J3B7NDh9vvd3fSmprjS8vGNje57e/jDw/7w8IQ3dnAAAABSSURBVCjPY2CAAG4l7GADVJ4hUBArEIXJJ2HXrw6TZ8auX7ABKs+zCLsBE2AGmGDXLwKT58SuX+sATIEjdgOcYfJF2A1Qg8lz4PCBwWgQUiMIAWCaOFG2MdFRAAAAAElFTkSuQmCC) -7px bottom repeat-x; background-size: 44px 2px; }\n.",[1],"aui-address-box-default .",[1],"_ul { position: relative; padding-right: 30px; padding-left: 0px; }\n.",[1],"aui-address-box-default .",[1],"_ul .",[1],"_li { font-size: 12px; color: #81838e; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden; position: relative; padding-left: 15px; }\n.",[1],"aui-address-box-default .",[1],"_ul .",[1],"_li .",[1],"_strong { font-size: 14px; padding-bottom: 10px; display: inline-block; color: #555; padding-right: 10px; }\n.",[1],"aui-address-box-default .",[1],"aui-tag { display: inline-block; position: relative; overflow: hidden; padding: 0 5px; vertical-align: middle; margin: 0 5px 0 0; max-width: 8em; height: 15px; line-height: 15px; font-size: 0.5rem; color: #4b9bfb; }\n.",[1],"aui-address-box-default .",[1],"aui-tag-default { color: #d4244e; border-color: #d4244e; }\n.",[1],"aui-address-box-default .",[1],"aui-tag::after { content: \x22\x22; position: absolute; z-index: 1; pointer-events: none; background-color: #4b9bfb; border: 1px solid #ddd; top: 0; bottom: 0; left: 0; right: 0; background: none; border-color: #4b9bfb; border-radius: 2px; right: -100%; bottom: -100%; -webkit-transform: scale(.5); -webkit-transform-origin: 0 0; border-radius: 4px; }\n.",[1],"aui-address-box-default .",[1],"aui-tag-default::after { border-color: #d4244e; }\n.",[1],"aui-address-box-default:after { content: \x22\x22; display: inline-block; vertical-align: middle; width: 15px; height: 15px; background-image: url(\x27data:image/png;base64,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\x3d\x3d\x27); background-repeat: no-repeat; background-size: 100%; position: absolute; top: 50%; right: 10px; margin-top: -5px; }\n.",[1],"aui-payment-bar { position: fixed; width: 100%; bottom: 0; left: 0; background: #FFFFFF; z-index: 1000; }\n.",[1],"aui-payment-bar .",[1],"shop-total { float: left; height: 49px; line-height: 49px; padding-left: 20px; font-size: 16px; color: #da4644; }\n.",[1],"aui-payment-bar .",[1],"settlement { display: block; float: right; width: 135px; height: 49px; line-height: 49px; text-align: center; color: #fff; font-size: 16px; background: #FF5E53; }\n.",[1],"aui-address-cell { padding: 10px 15px; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: inherit; }\n.",[1],"buy-list { width: 100%; background-color: #fff; font-size: 14px; }\n.",[1],"buy-list .",[1],"_ul { position: relative; overflow: hidden; width: 92%; padding: 4%; border-bottom: solid 1px #ccc; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_a { display: block; width: 100%; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_figure { float: left; width: 30%; height: 8em; overflow: hidden; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_figure .",[1],"imgtp { width: 100%; height: 88px; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_li { float: left; width: 66%; margin-left: 4%; overflow: hidden; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_li .",[1],"texth { font-size: 14px; color: #333; font-weight: normal; text-align: justify; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_li .",[1],"_span { font-size: 12px; color: #999; text-align: justify; line-height: 1.6; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_li .",[1],"_b { position: absolute; right: 5%; bottom: 30%; font-size: 14px; color: #FC605A; font-weight: normal; }\n.",[1],"buy-list .",[1],"_ul .",[1],"_li .",[1],"_small { position: absolute; right: 5%; bottom: 15%; font-size: 1.25em; color: #999; }\n.",[1],"buy-list .",[1],"_dl { width: 100%; clear: both; overflow: hidden; }\n.",[1],"buy-list .",[1],"_dl .",[1],"_dd { width: 90%; padding: 4% 5%; font-size: 1.35em; border-bottom: solid 1px #ccc; overflow: hidden; }\n.",[1],"buy-list .",[1],"_dl .",[1],"_dd .",[1],"_span { color: #666; float: left; font-size: 14px; }\n.",[1],"buy-list .",[1],"_dl .",[1],"_dd .",[1],"_small { color: #999; float: right; font-size: 14px; }\n.",[1],"buy-list .",[1],"_dl .",[1],"_dt { width: 90%; padding: 3% 5%; }\n.",[1],"buy-list .",[1],"_dl .",[1],"_dt .",[1],"_textarea { width: 90%; padding: 3% 5%; font-size: 1.169em; color: #666; line-height: 1.6; text-align: justify; border-radius: 0.3em; border: solid 1px #c8c8c8; }\n",],undefined,{path:"./pages/buy/buy.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/buy/buy.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      