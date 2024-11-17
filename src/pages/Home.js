import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Para redirigir a los detalles de la película

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "cc02df44a5e35f3d340f75a7b61812b2"; // Coloca tu API Key aquí

    // Función para obtener las películas
    const fetchMovies = () => {
      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`)
        .then((response) => {
          setMovies(response.data.results); // Guardar las películas en el estado
          setLoading(false); // Terminamos de cargar
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
        });
    };

    fetchMovies(); // Cargar las películas al principio

    // Configurar la actualización automática cada 10 minutos (600000 ms)
    const interval = setInterval(fetchMovies, 600000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // El useEffect se ejecuta solo una vez cuando el componente se monta

  if (loading) return <div>Cargando películas...</div>; // Mensaje de carga mientras esperamos

  return (
    <div>
      <h1>Cartelera de Películas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "20px", width: "200px", textAlign: "center" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <Link to={`/movie/${movie.id}`} style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
