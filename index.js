const API_KEY = "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";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "dime hola " + prompt,
      max_tokens: 5,
    }),
  });

  const data = await response.json();
  return data;
}

document.addEventListener("DOMContentLoaded", () => {
  const promptInput = document.querySelector("#prompt");
  const generateButton = document.querySelector("#generate");
  const output = document.querySelector("#output");

  generateButton.addEventListener("click", async () => {
    const prompt = promptInput.value.trim();

    if (!prompt) {
      window.alert("Please enter a prompt");
      return;
    }

    const response = await getCompletion(prompt);
    output.textContent = response.choices[0].text.trim();
  });
});
