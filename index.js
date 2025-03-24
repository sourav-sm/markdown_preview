const preview= document.getElementById('preview-output');
const editor= document.getElementById('editor');
const reset=document.getElementById('Reset');


// Configure marked
marked.setOptions({
    breaks: true,
    gfm: true,
    sanitize: false, // Set to true for more security
    headerIds: false,
    smartLists: true,
    highlight: function(code, lang) {
      return hljs.highlightAuto(code).value;
    }
  });


// initial render
preview.innerHTML=marked.parse(editor.value || '');

editor.addEventListener('input', ()=>{
    const markdownText=editor.value;
    const html=marked.parse(markdownText);
    preview.innerHTML=html;
});

reset.addEventListener('click',()=>{
    editor.value="";
    preview.innerHTML="";
})
