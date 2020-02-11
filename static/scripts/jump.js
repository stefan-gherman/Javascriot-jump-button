const main = () => {
    console.log('Loaded');
    const button_yes = document.getElementById('yes');
    const button_no = document.getElementById('no');

    if (button_yes.dataset.correct === 'true') {
        button_yes.addEventListener('click', function (event) {
            alert('I knew you selected this :)');
        });

        button_no.addEventListener('mouseover', function (event) {

            let randomX = Math.floor(Math.random() * 500);
            let randomY = Math.floor(Math.random() * 500);
            button_no.setAttribute('style', `position:absolute; margin-left: ${randomX}px; margin-top: ${randomY}px`);

        })
    } else if (button_no.dataset.correct === 'true') {
        button_no.addEventListener('click', function (event) {
            alert('I knew you selected this :)');
        });

        button_yes.addEventListener('mouseover', function (event) {

            let randomX = Math.floor(Math.random() * 500);
            let randomY = Math.floor(Math.random() * 500);
            button_yes.setAttribute('style', `position:absolute; margin-left: ${randomX}px; margin-top: ${randomY}px`);

        })
    }
};


main();

