const cangrejos = [
  { id: 1, nombre: 'Cangrejo azul', salinidad: 'alta' },
  { id: 2, nombre: 'Cangrejo violinista', salinidad: 'media' },
];

module.exports = {
  listar: () => cangrejos,
  obtener: (id) => cangrejos.find((c) => c.id === id),
};
