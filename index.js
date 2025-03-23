const preview= document.getElementById('preview-output');
const editor= document.getElementById('editor');
const reset=document.getElementById('Reset');


//initial render
preview.innerHTML=marked.parse(editor.value);

editor.addEventListener('input', ()=>{
    const markdownText=editor.value;
    const html=marked.parse(markdownText);
    preview.innerHTML=html;
});

reset.addEventListener('click',()=>{
    editor.value="";
    preview.innerHTML="";
})