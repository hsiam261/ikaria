const handleCodeblockCollapse = (event) => {
    let parent = event.currentTarget.parentNode.parentNode.parentNode;
    let codeblock = parent.children[1];
    let icon = parent.querySelector('.code-block__collapse-icon');

    if (codeblock.classList.contains('code-block-expandible--open')) {
        codeblock.classList.remove('code-block-expandible--open');
        icon.classList.add('code-block__collapse-icon--collapsed');
    } else {
        codeblock.classList.add('code-block-expandible--open');
        icon.classList.remove('code-block__collapse-icon--collapsed');
    }
};

const code_block_collapse_buttons = document.getElementsByClassName('code-block__collapse');
for (let code_block of code_block_collapse_buttons) {
    code_block.addEventListener('click', handleCodeblockCollapse);
}
