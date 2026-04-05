window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

        const article = document.createElement("article");
        article.id = movie.imdbID;
        
      // Poster
      const img = document.createElement("img");
      img.src = movie.Poster;

      // Title
      const title = document.createElement("h1");
      title.textContent = movie.Title;

      // Info (runtime + date)
      const info = document.createElement("p");

      const hours = Math.floor(movie.Runtime / 60);
      const minutes = movie.Runtime % 60;
      const formattedRuntime = hours + "h " + minutes + "m";

      const date = new Date(movie.Released);
      const formattedDate =
          (date.getMonth() + 1) + "/" +
          date.getDate() + "/" +
          date.getFullYear();

      info.textContent = "Runtime " + formattedRuntime + " • Released on " + formattedDate;

      // Genres
      const genresDiv = document.createElement("div");
      if (movie.Genres) {
        movie.Genres.forEach(function(genre) {
          const span = document.createElement("span");
          span.textContent = genre;
          span.className = "genre";
          genresDiv.appendChild(span);
        });
      }
      
      // Plot
      const plot = document.createElement("p");
      plot.textContent = movie.Plot;

      // Directors
      const directorsTitle = document.createElement("h3");
      directorsTitle.textContent = "Directors";

      const directorsList = document.createElement("ul");
      movie.Directors.forEach(function(d) {
          const li = document.createElement("li");
          li.textContent = d;
          directorsList.appendChild(li);
      });

      // Writers
      const writersTitle = document.createElement("h3");
      writersTitle.textContent = "Writers";

      const writersList = document.createElement("ul");
      movie.Writers.forEach(function(w) {
          const li = document.createElement("li");
          li.textContent = w;
          writersList.appendChild(li);
      });

      // Actors
      const actorsTitle = document.createElement("h3");
      actorsTitle.textContent = "Actors";

      const actorsList = document.createElement("ul");
      movie.Actors.forEach(function(a) {
          const li = document.createElement("li");
          li.textContent = a;
          actorsList.appendChild(li);
      });

      // Ratings
      const rating = document.createElement("p");
      rating.textContent = "Metascore: " + movie.Metascore + " | IMDb: " + movie.imdbRating;

      // EDIT BUTTON
      const button = document.createElement("button");

      button.textContent = "Edit";
      button.onclick = function () {
      location.href = "edit.html?imdbID=" + movie.imdbID;      
    };
    
      // Append everything
      article.appendChild(img);
      article.appendChild(title);
      article.appendChild(info);
      article.appendChild(genresDiv);
      article.appendChild(plot);
      article.appendChild(directorsTitle);
      article.appendChild(directorsList);
      article.appendChild(writersTitle);
      article.appendChild(writersList);
      article.appendChild(actorsTitle);
      article.appendChild(actorsList);
      article.appendChild(rating);
      article.appendChild(button);

      bodyElement.appendChild(article);
      };

      } else {
          bodyElement.append("Error loading data (Status " + xhr.status + ")");      }
    }

      xhr.open("GET", "/movies")
      xhr.send()
      }