window.onload = () => {
    const [input, output] = document.querySelectorAll(".codemirror-textarea");
    const editor = CodeMirror.fromTextArea(input, { lineNumbers: true, mode: { name: "gas", architecture: "ARMv6" } });
    const shell = CodeMirror.fromTextArea(output, { lineNumbers: false });
}

function getCode() {
    len = document.querySelectorAll(".CodeMirror-line").length;
    var text = []
    for (cont = 0; cont <= (len-1); cont++){
        text.push(document.querySelectorAll(".CodeMirror-line")[cont].innerText)
        // line = document.querySelectorAll(".CodeMirror-line")[cont].outerText
    }

    console.log(text)
}