const handleCodeblockCopy = (event) => {
    let code = event.currentTarget.getAttribute('data-code');
    console.log(code);
    let lastChild = event.currentTarget.children[1];
    navigator.clipboard.writeText(code);
    lastChild.innerHTML = 'Copied!'
    setTimeout(() => {
        lastChild.innerHTML = 'Copy';
    }, 3000);
};

const code_block_copy_buttons = document.getElementsByClassName('code-block__copy');
for (let code_block of code_block_copy_buttons) {
    code_block.addEventListener('click', handleCodeblockCopy);
}
