const service = require('../services/cangrejoService');

exports.listar = (req, res) => res.json(service.listar());

exports.obtener = (req, res) => {
  const cangrejo = service.obtener(Number(req.params.id));
  if (!cangrejo) return res.status(404).json({ error: 'No encontrado' });
  res.json(cangrejo);
};
