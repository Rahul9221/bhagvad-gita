let view = document.getElementById("view")

const displayChapters = () => {
    fetch('https://vedicscriptures.github.io/chapters')
      .then(response => response.json())
      .then(data => {
        data.forEach(chapterObj => {
          
          let  chapterNumber = chapterObj.chapter_number;
          let  chapterName = chapterObj.name;
          let  Number = chapterObj.Number;
          let  translation = chapterObj.translation;
          let  transliteration = chapterObj.transliteration;
          
            let  meaning = chapterObj.meaning && chapterObj.meaning.en && chapterObj.meaning.en.hi ? chapterObj.meaning.en.hi : 'Meaning not available';

            let  summary = chapterObj.summary ? chapterObj.summary : 'Summary not available';
            
            view.innerHTML += `
            <div class="chapter mt-5 p-3" style="background-color: white; border-radius: 30px;">
              <h2>${chapterNumber}. ${chapterName}</h2>
              <p>Translation: ${translation}</p>
              <p>Transliteration: ${transliteration}</p>
              <p>Meaning: ${meaning}</p>
              <p>Summary: ${typeof summary === 'object' ? JSON.stringify(summary) : summary}</p>
              </div>
              `;
              view.innerHTML+= `<p class = "Number"> Count: ${Number}</p>`
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  displayChapters();
  

