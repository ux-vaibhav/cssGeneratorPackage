module.exports = [

    /*Padding*/
    { name: 'pad', pro: 'padding', valtype:'px'},
    { name: 'padt', pro: 'padding-top', valtype:'px'},
    { name: 'padb', pro: 'padding-bottom', valtype:'px'},
    { name: 'padl', pro: 'padding-left', valtype:'px'},
    { name: 'padr', pro: 'padding-right', valtype:'px'},

    /*Margin*/ 
    { name: 'mar', pro: 'margin', valtype:'px'},
    { name: 'mart', pro: 'margin-top', valtype:'px'},
    { name: 'marb', pro: 'margin-bottom', valtype:'px'},
    { name: 'marl', pro: 'margin-left', valtype:'px'},
    { name: 'marr', pro: 'margin-right', valtype:'px'},
    { name: 'marc', pro: 'margin:0 auto'},

    /*Height and Width*/
    { name: 'hei', pro: 'height', valtype:'px'},
    { name: 'wid', pro: 'width', valtype:'px'},
    { name: 'heip', pro: 'height', valtype:'%'},
    { name: 'widp', pro: 'width', valtype:'%'},
    { name: 'heiv', pro: 'height', valtype:'vh'},
    { name: 'widv', pro: 'width', valtype:'vh'},
    { name: 'mhei', pro: 'max-height', valtype:'px'},
    { name: 'mwid', pro: 'max-width', valtype:'px'},
    { name: 'mheip', pro: 'max-height', valtype:'%'},
    { name: 'mwidp', pro: 'max-width', valtype:'%'},
    { name: 'mheiv', pro: 'max-height', valtype:'vh'},
    { name: 'mwidv', pro: 'max-width', valtype:'vh'},
    
    /*position*/
    { name: 'posr', pro: 'position:relative'},
    { name: 'posa', pro: 'position:absolute'},
    { name: 'poss', pro: 'position:static'},
    { name: 'posf', pro: 'position:fixed'},
    { name: 'lef', pro: 'left', valtype:'px'},
    { name: 'rig', pro: 'right', valtype:'px'},
    { name: 'top', pro: 'top', valtype:'px'},
    { name: 'bot', pro: 'bottom', valtype:'px'},
    { name: 'z', pro: 'z-index', valtype:''},
    { name: 'lefp', pro: 'left', valtype:'%'},
    { name: 'rigp', pro: 'right', valtype:'%'},
    { name: 'topp', pro: 'top', valtype:'%'},
    { name: 'botp', pro: 'bottom', valtype:'%'},

    /*float*/   
    { name: 'flol', pro: 'float:left'},
    { name: 'flor', pro: 'float:right'},
    { name: 'flon', pro: 'float:none'},
    { name: 'cleb', pro: 'clear:both'},

    /*display*/
    { name: 'disb', pro: 'display:block'},
    { name: 'disi', pro: 'display:inline'},
    { name: 'disib', pro: 'display:inline-block'},
    { name: 'disn', pro: 'display:none'},
    { name: 'vert', pro: 'vertical-align:top'},
    { name: 'verb', pro: 'vertical-align:bottom'},
    { name: 'verm', pro: 'vertical-align:middle'},

     /*font*/
     { name: 'fons', pro: 'font-size', valtype:'px'},
     { name: 'fonsr', pro: 'font-size', valtype:'rem'},
     { name: 'fonse', pro: 'font-size', valtype:'em'},
     { name: 'fonsp', pro: 'font-size', valtype:'%'},  
     { name: 'fonw', pro: 'font-weight',valtype:''},
     { name: 'fonst', pro: 'font-style',valtype:''},
     { name: 'linh', pro: 'line-height',valtype:''},
     { name: 'lets', pro: 'letter-spacing',valtype:'px'},
     { name: 'texa', pro: 'text-align',valtype:''},
     { name: 'texd', pro: 'text-decoration',valtype:''},
     { name: 'texi', pro: 'text-indent',valtype:'px'},
     { name: 'texip', pro: 'text-indent',valtype:'%'},
     { name: 'textu', pro: 'text-transform:uppercase'},
     { name: 'textl', pro: 'text-transform:lowercase'},
     { name: 'textc', pro: 'text-transform:capitalize'},
     { name: 'textn', pro: 'text-transform:none'}, 

     /*list*/
     { name: 'liss', pro: 'list-style',valtype:''},
     { name: 'lisst', pro: 'list-style-type',valtype:''}, 
     { name: 'lissp', pro: 'list-style-position',valtype:''},  

     /*border*/
     { name: 'borw', pro: 'border-width',valtype:'px'},
     { name: 'bor', pro: 'border',valtype:''},
     { name: 'bort', pro: 'border-top',valtype:''},
     { name: 'borb', pro: 'border-bottom',valtype:''},
     { name: 'borl', pro: 'border-left',valtype:''},
     { name: 'borr', pro: 'border-right',valtype:''},
     { name: 'borc', pro: 'border-color',valtype:''},
     { name: 'born', pro: 'border:none'},
     { name: 'bortn', pro: 'border-top:none'},
     { name: 'borbn', pro: 'border-bottom:none'},
     { name: 'borln', pro: 'border-left:none'},
     { name: 'borrn', pro: 'border-right:none'},
     { name: 'borra', pro: 'border-radius',valtype:'px'},
     

    /*color*/
     { name: 'col', pro: 'color', valtype:''},
     { name: 'bcol', pro: 'background-color', valtype:''},
     { name: 'opa', pro: 'opacity', valtype:''},
     
     /*flex*/
     { name: 'disf', pro: 'display:flex'},
     { name: 'disif', pro: 'display:inline-flex'},
     { name: 'flef', pro: 'flex-flow',valtype:''},
     { name: 'alii', pro: 'align-items', valtype:''},
     { name: 'flew', pro: 'flex-wrap',valtype:''},


     /*grid*/ 
     { name: 'grid', pro: 'flex-wrap:wrap;display:flex;'},
     { name: 'col1', pro: 'width:8.3333%;padding:0 15px;'},
     { name: 'col2', pro: 'width:16.6666%;padding:0 15px;'},
     { name: 'col3', pro: 'width:25%;padding:0 15px;'},
     { name: 'col4', pro: 'width:33.3333%;padding:0 15px;'},
     { name: 'col5', pro: 'width:41.6666%;padding:0 15px;'},
     { name: 'col6', pro: 'width:50%;padding:0 15px;'},
     { name: 'col7', pro: 'width:58.3333%;padding:0 15px;'},
     { name: 'col8', pro: 'width:66.6666%;padding:0 15px;'},
     { name: 'col9', pro: 'width:75%;padding:0 15px;'},
     { name: 'col10', pro: 'width:83.3333%;padding:0 15px;'},
     { name: 'col11', pro: 'width:91.6666%;padding:0 15px;'},
     { name: 'col12', pro: 'width:100%;padding:0 15px;'},

     /*box-shadow*/
     { name: 'boxs', pro: 'box-shadow',valtype:''},
     { name: 'texs', pro: 'text-shadow',valtype:''},
    
     /*overflow*/
     { name: 'ovea', pro: 'overflow: auto;'},
     { name: 'oveh', pro: 'overflow: hidden;'},
     { name: 'oves', pro: 'overflow: scroll;'},
     { name: 'ovev', pro: 'overflow: visible;'},
     { name: 'ovexa', pro: 'overflow-x: auto;'},
     { name: 'ovexh', pro: 'overflow-x: hidden;'},
     { name: 'ovexs', pro: 'overflow-x: scroll;'},
     { name: 'ovexv', pro: 'overflow-x: visible;'},
     { name: 'oveya', pro: 'overflow-y: auto;'},
     { name: 'oveyh', pro: 'overflow-y: hidden;'},
     { name: 'oveys', pro: 'overflow-y: scroll;'},
     { name: 'oveyv', pro: 'overflow-y: visible;'},
     
     /*visibility*/
     { name: 'visv', pro: 'visibility: visible;'},
     { name: 'vish', pro: 'visibility: hidden;'},
]

//allProps
  

  