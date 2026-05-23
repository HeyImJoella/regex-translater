const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown (){
  const input = markdownInput.value;

  let result = input;
  result = result.replace(/^\s*### (.+)/gm, "<h3>$1</h3>");
  result = result.replace(/^\s*## (.+)/gm, "<h2>$1</h2>");
  result = result.replace(/^\s*# (.+)/gm, "<h1>$1</h1>");
  result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");
  result = result.replace(/__(.+?)__/g, "<strong>$1</strong>");
  result = result.replace(/_(.+?)_/g, "<em>$1</em>");
  result = result.replace(/!\[(.+?)\]\((.+?)\)/g, `<img alt="$1" src="$2">`)
  result = result.replace(/\[(.+?)\]\((.+?)\)/g, `<a href="$2">$1</a>`)
  result = result.replace(/^\s*> (.+)/gm, "<blockquote>$1</blockquote>")

  htmlOutput.textContent = result;
  preview.innerHTML = result;
  return result;
};

markdownInput.addEventListener("input", convertMarkdown);