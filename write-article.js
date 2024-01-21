document.getElementById('articleForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('articleTitle').value;
  const content = document.getElementById('articleContent').value;

  // Create a Blob containing the article data
  const articleBlob = new Blob([`Title: ${title}\n\n${content}`], { type: 'text/plain' });

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = window.URL.createObjectURL(articleBlob);
  downloadLink.download = `${title.replace(/ /g, '_')}_article.txt`;

  // Append the link to the document and trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the document
  document.body.removeChild(downloadLink);
});
