const chatbotData = {
    intents: [
      {
        tag: "greeting",
        patterns: ["ಹಲೋ", "ಹಾಯ್", "ಶುಭೋದಯ", "ಶುಭ ಸಂಜೆ", "ಶುಭ ಅಪರಾಹ್ನ", "ಹೇ", "ಏನು ಹೊಡೆಯುತ್ತಿದ್ದೀರಾ", "ಯಾರಾದರೆ ಇದ್ದಾರೆಯೇ"],
        responses: ["ಹಲೋ. ಮೆಗಾ ಚಾಟ್‌ಬಾಟ್ ಬ್ಯಾಂಕ್‌ಗೆ ಸುಸ್ವಾಗತ", "ಹಾಯ್. ನಾವು ನಿಮಗೆ ಸೇವೆ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇವೆ", "ಸ್ವಾಗತ", "ಹಾಯ್ ಇರಿಯಾ"]
      },
      {
        tag: "name",
        patterns: ["ನೀವು ಯಾರು?", "ನನಗೆ ನಿಮ್ಮ ಹೆಸರು ಗೊತ್ತಿದೆಯೇ?", "ನಿಮ್ಮ ಹೆಸರೇನು?"],
        responses: ["ನನ್ನ ಹೆಸರು ಮೆಗಾಬಾಟ್", "ನೀವು ನನ್ನನ್ನು ಆರ್ಥಿಕ ಸಹಾಯದಾತಾ ಎಂದು ಕರೆಯಬಹುದು"]
      },
      {
        tag: "about",
        patterns: ["ಬ್ಯಾಂಕ್‌ಗೆ ಬಗ್ಗೆ ಹೇಗಿದೆ?", "ಬ್ಯಾಂಕ್‌ಗೆ ಬಗ್ಗೆ ಹೇಗಿದೆ ಹೇಳಿ", "ಈ ಬ್ಯಾಂಕ್ ಯಾವ ವರ್ಷದಲ್ಲಿ ಆರಂಭವಾಯಿತು", "ನಿಮ್ಮ ಕಂಪೆನಿ ಬಗ್ಗೆ ಹೇಳಿ", "ನಾನು ಈ ಬ್ಯಾಂಕ್‌ಗೆ "]
      }
      // Add more intents as needed
    ]
  };
  
  function processUserInput(userInput) {
    const userPattern = userInput.toLowerCase();
  
    for (const intent of chatbotData.intents) {
      for (const pattern of intent.patterns) {
        if (userPattern.includes(pattern.toLowerCase())) {
          return intent.responses[Math.floor(Math.random() * intent.responses.length)];
        }
      }
    }
  
    // Default response if no matching pattern is found
    return "I'm sorry, I didn't understand that. Can you please rephrase?";
  }
  
  // Example usage
  const userMessage = "ಹಲೋ";
  const botResponse = processUserInput(userMessage);
  console.log(botResponse); // Output: One of the greetings from the data set
  