export const validate = (activity, activities = []) => {
  let errors = {};
  // \u00f1 y \u00d1 son el equivalente para "ñ" y "Ñ",
  if (!activity.name.trim()) {
    errors.name = "El nombre es requerido";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(activity.name)) {
    errors.name = "El nombre de la actividad debe contener solo letras";
  } else if (activities.includes(activity.name.trim())) {
    errors.name = "Actividad existente";
  }
  if (!activity.difficulty) errors.difficulty = "La dificultad es requerida";
  if (!activity.duration) errors.duration = "La duración es requerida";
  if (parseInt(activity.duration) < 1 || parseInt(activity.duration) > 30)
    errors.duration = "La duración debe ser mayor a 0 y menor que 30";
  if (!activity.seasson) errors.seasson = "La temporada es requerida";
  if (activity.countries.length === 0)
    errors.countries = "El país es requerido";

  return errors;
};
