# Mimmit Koodaa Workshop 2020

Repository for the workshop between Mimmit Koodaa and Futurice. Work inspired from Juha-Matti "Juhis" Santala (@Hamatti).

Be sure to check the [Search UI for Pokémon TCG Google Slides](https://bit.ly/mimmit-koodaa-2020) that go along with this repository.

## HTML Exercises

With the help of the [HTML learning resources of w3schools](https://www.w3schools.com/html/html_intro.asp), Google and your mentor, let's do the following assignments.

Note: you don't have to complete all the assignments.

Assignment #0:
Create a comment somewhere inside the `<section id="exercises">` tag using HTML comments, e.g. `<!-- your comment -->`.

Assignment #1:
Add this image `https://bit.ly/futupink-yes` somewhere inside the `<section id="exercises">` tag.

Assignment #2:
Create a link `<a>` to your favorite website.

### Extra exercises

Assignment #3:
Create a list for the following ingredients: `flour`, `eggs`, `milk`.

Assignment #4:
Create a form with an `<input>` (remember to add a `<label>`) and a submit `<button>`. Bonus points (we're not really keeping points) if you add a `aria-describedby` property to the `<input>`.
You can check the `index.html` page of the folder `1 - CSS` if you need some guidance, but try first to solve this with Google and/or your mentor.

## CSS Exercises

With the help of the [CSS learning resources of w3schools](https://www.w3schools.com/css/css_intro.asp), Google and your mentor, let's do the following assignments. Note: you don't have to complete all the assignments.

Assignment #0:
Just play around with the existing CSS styles; have fun and ask questions to your mentor!

--

Add the following snippet of code somewhere inside the `<section id="exercises">` tag.

```
<form>
    <label for="keyword">Pokémon name:</label>
    <input
        type="text"
        name="search"
        id="keyword"
        aria-describedby="keyword-help"
    />
    <span id="keyword-help">
        e.g. <em>Bulbasaur</em> (Enter at least three letters)
    </span>
    <button type="submit">Search</button>
</form>
```

The form looks pretty ugly and tiny, doesn't it? Shall we make it more pretty and accessible?

Assignment #1:
Create a selector for the `<label>` element and add the following properties in its code block.

```css
font-weight: bold;
```

Assignment #2:
Create a selector for the form `<input>` element and assign the following properties inside its code block.

```
min-width: 70%;
padding: 1rem;
font-size: 2rem;
border: 1px solid palevioletred;
```

Assignment #3:
Make the submit `<button>` bigger and make the cursor look like a hand pointer when you hover on it; select the button in a way that if the form had more than one button, only the submit button would be affected

## JavaScript Exercises

For the JavaScript exercises please refer to the file named `javascript_exercises.js`.
