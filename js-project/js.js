document.addEventListener('DOMContentLoaded', function() {
    const ballContainer = document.getElementById('ballContainer');
    const phoneNumberInput = document.getElementById('phoneNumber');

    function createBall(number) {
        let ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = number;
        ball.style.left = `${10 + number * 8}%`; // Spread out the balls
        ball.style.animationDuration = `1s`; // Consistent faster speed for all balls
    
        ball.addEventListener('click', () => {
            phoneNumberInput.value += number;
        });
    
        ballContainer.appendChild(ball);
    }

    for (let i = 0; i < 10; i++) {
        createBall(i);
    }
});


