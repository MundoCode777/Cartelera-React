import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const API_KEY = "cc02df44a5e35f3d340f75a7b61812b2"; // Coloca tu API Key aquí

    // Obtener los detalles de la película
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error(error));

    // Obtener el trailer de la película
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`)
      .then((response) => {
        const trailer = response.data.results.find(
          (video) => video.type === "Trailer"
        );
        setVideo(trailer);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p><strong>Descripción:</strong> {movie.overview}</p>
      <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
      <p><strong>Géneros:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      <p><strong>Duración:</strong> {movie.runtime} minutos</p>

      {/* Mostrar el trailer si está disponible */}
      {video ? (
        <div>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}

export default MovieDetail;
