import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Router>
      <div>
        {/* Encabezado con título y descripción */}
        <header style={headerStyle}>
          <div style={headerContentStyle}>
            <h1 style={titleStyle}>PeliFlix</h1>
            <p style={descriptionStyle}>
              Página creada para el ambiente de personas que buscan encontrar las películas más nuevas.
            </p>
          </div>
        </header>

        {/* Rutas de la aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>

        {/* Información del creador */}
        <footer style={footerStyle}>
          <p>Creado por: <strong>Luis-Rodríguez -  Mundo Code</strong></p>
          <p>Información de contacto: <strong>luisrodriguezvalle21@gmail.com</strong></p>
          <p>Desarrollador web y apasionado por la tecnología.</p>
        </footer>
      </div>
    </Router>
  );
}

const headerStyle = {
  backgroundColor: "#1e1e1e", // color oscuro para el fondo
  color: "#fff", // texto blanco
  padding: "40px 0", // espacio arriba y abajo
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // sombra suave para el efecto de profundidad
};

const headerContentStyle = {
  maxWidth: "800px",
  margin: "0 auto", // centrado
  padding: "0 20px",
};

const titleStyle = {
  fontSize: "3rem", // tamaño grande para el título
  fontFamily: "'Roboto', sans-serif", // fuente limpia
  fontWeight: "700", // hacer el título más destacado
};

const descriptionStyle = {
  fontSize: "1.2rem", // tamaño más pequeño para la descripción
  color: "#f0f0f0", // color gris claro para la descripción
  marginTop: "10px", // espacio entre título y descripción
  lineHeight: "1.5", // espaciado entre líneas para una lectura cómoda
};

const footerStyle = {
  backgroundColor: "#333", // fondo oscuro para el pie de página
  color: "#fff", // texto blanco
  padding: "20px",
  textAlign: "center",
  marginTop: "20px",
  fontFamily: "'Roboto', sans-serif", // fuente similar a la del encabezado
};

export default App;
