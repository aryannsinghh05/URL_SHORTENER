async function shortenUrl() {
  const url = document.getElementById("urlInput").value;
  const resultDiv = document.getElementById("result");

  if (!url) {
    resultDiv.innerHTML = `<p class="text-red-400">Please enter a URL</p>`;
    return;
  }

  try {
    resultDiv.innerHTML = "⏳ Generating...";

    const res = await fetch("/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ original_url: url }),
    });

    const data = await res.json();

    resultDiv.innerHTML = `
      <p>Short URL:</p>
      <a href="${data.short_url}" target="_blank" class="text-sky-400 underline">
        ${data.short_url}
      </a>
      <br/><br/>
      <button onclick="copyUrl('${data.short_url}')" 
        class="text-black bg-green-100 px-3 py-1 rounded mt-2 hover:bg-white-200">
        Copy
      </button>
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p class="text-red-400">Something went wrong</p>`;
  }
}

function copyUrl(url) {
  navigator.clipboard.writeText(url);
  alert("Copied to clipboard!");
}