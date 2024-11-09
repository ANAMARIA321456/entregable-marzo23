import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    tipo: "",
    raza: "",
    nombre: "",
    edad: "",
  });

  const [errors, setErrors] = useState({
    tipo: "",
    raza: "",
    nombre: "",
    edad: "",
    mostrarAlerta: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.tipo.trim() || formData.tipo.trim().length < 3) {
      valid = false;
      errors.tipo =
        "Tipo es requerido y debe contener al menos 3 caracteres sin espacios al inicio";
      errors.mostrarAlerta = true;
    }

    if (!formData.raza.trim() || formData.raza.trim().length < 6) {
      valid = false;
      errors.raza =
        "Raza es requerido y debe contener al menos 3 caracteres sin espacios al inicio";
      errors.mostrarAlerta = true;
    }

    if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
      valid = false;
      errors.nombre =
        "Raza es requerido y debe contener al menos 3 caracteres sin espacios al inicio";
      errors.mostrarAlerta = true;
    }

    if (!formData.edad.trim() || formData.edad.trim().length < 1) {
      valid = false;
      errors.edad =
        "Raza es requerido y debe contener al menos 3 caracteres sin espacios al inicio";
      errors.mostrarAlerta = true;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      console.log("Formulario enviado:", formData);
      // Aquí puedes agregar la lógica para manejar el envío del formulario
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mt-4">
        <div
          className="card shadow-sm"
          style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
        >
          <div className="card-header bg-success text-white text-center">
            <h5>Formulario Enviado Correctamente</h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Tipo:</strong> {formData.tipo}
            </p>
            <p className="card-text">
              <strong>Raza:</strong> {formData.raza}
            </p>
            <p className="card-text">
              <strong>Nombre:</strong> {formData.nombre}
            </p>
            <p className="card-text">
              <strong>Edad:</strong> {formData.edad}
            </p>
          </div>
          <div className="card-footer text-muted text-center">
            ¡Gracias por enviar la información!
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {errors.mostrarAlerta && (
        <div className="container">
          <div className="alert alert-warning" role="alert">
            Por favor chequea que la información sea correcta.
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="container mt-4"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">
            Tipo
          </label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className={`form-control ${errors.tipo ? "is-invalid" : ""}`}
          />
          {errors.tipo && <div className="invalid-feedback">{errors.tipo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="raza" className="form-label">
            Raza
          </label>
          <input
            type="text"
            id="raza"
            name="raza"
            value={formData.raza}
            onChange={handleChange}
            className={`form-control ${errors.raza ? "is-invalid" : ""}`}
          />
          {errors.raza && <div className="invalid-feedback">{errors.raza}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
          />
          {errors.nombre && (
            <div className="invalid-feedback">{errors.nombre}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            className={`form-control ${errors.edad ? "is-invalid" : ""}`}
          />
          {errors.edad && <div className="invalid-feedback">{errors.edad}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Card;
