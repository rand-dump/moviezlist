export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <section className="filter-panel" aria-labelledby="filter-heading">
      <h2 id="filter-heading">Filter by Genre</h2>
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            className={selectedGenre === genre ? 'genre-button selected' : 'genre-button'}
            key={genre}
            type="button"
            aria-pressed={selectedGenre === genre}
            onClick={() => {
              console.log(`Selected genre: ${genre}`);
              onSelectGenre(selectedGenre === genre ? null : genre);
            }}
          >
            {genre}
          </button>
        ))}
      </div>
    </section>
  );
}
