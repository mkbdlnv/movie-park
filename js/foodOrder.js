function toggleFAQ(questionId) {
    const answer = document.getElementById(questionId + '-answer');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

