// Celebration messages based on score
const celebrationMessages = {
    perfect: [
        "🎉 INCREDIBLE! You're a genius! 🎓",
        "🌟 PERFECT SCORE! You're absolutely brilliant! 🏆",
        "⭐ OUTSTANDING! You've mastered this! 🎯"
    ],
    great: [
        "🎈 Amazing job! You're doing great! 🌟",
        "✨ Fantastic work! Keep it up! 🚀",
        "🌈 Excellent performance! You're a star! ⭐"
    ],
    good: [
        "👏 Well done! You're making progress! 📈",
        "💫 Good effort! Keep learning! 📚",
        "🌟 Nice work! You're getting better! 💪"
    ],
    needsImprovement: [
        "💪 Keep trying! You're getting there! 🎯",
        "📚 Practice makes perfect! Don't give up! ✨",
        "🌱 Every mistake is a chance to learn! 💡"
    ]
};

// Get random message from array
function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Calculate score category
function getScoreCategory(score, total) {
    const percentage = (score / total) * 100;
    if (percentage === 100) return 'perfect';
    if (percentage >= 80) return 'great';
    if (percentage >= 60) return 'good';
    return 'needsImprovement';
}

// Create and show end celebration
function showEndCelebration(score, total) {
    const percentage = (score / total) * 100;
    const userName = localStorage.getItem('quizUserName') || 'Friend';
    let message = '';
    
    if (percentage === 100) {
        message = `🎉 PERFECT SCORE, ${userName}! You're Brilliant! 🏆\n` +
                 'You\'re a True Champion! 🌟';
    } else if (percentage >= 80) {
        message = `🎈 Outstanding Performance, ${userName}! 🌟\n` +
                 'You\'re Almost Perfect! Keep Going! 🚀';
    } else if (percentage >= 60) {
        message = `👏 Well Done, ${userName}! 🌟\n` +
                 'You\'re Making Great Progress! 📈';
    } else {
        message = `💪 Keep Learning, ${userName}! 📚\n` +
                 'Every Question Makes You Stronger!💡';
    }
    
    // Create message element with multiple lines
    const celebrationDiv = document.createElement('div');
    celebrationDiv.className = 'celebration-message';
    celebrationDiv.innerHTML = message.replace(/\n/g, '<br>');
    
    // Add to score container
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.insertBefore(celebrationDiv, scoreContainer.firstChild);
    
    // Show confetti for scores 60% or better
    if (percentage >= 60) {
        createConfetti();
    }
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}


