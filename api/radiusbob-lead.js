// Reenvía el lead del formulario a RadiusBob usando el token guardado en la
// variable de entorno RADIUSBOB_API_TOKEN (Vercel → Settings → Environment
// Variables). El token nunca viaja al navegador del visitante.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const token = process.env.RADIUSBOB_API_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'RADIUSBOB_API_TOKEN no está configurado' });
    return;
  }

  const { nombre, telefono, estado, momento } = req.body || {};

  const params = {
    type: 'Lead',
    name: nombre || '',
    phone: telefono || '',
    state: estado || '',
    note: momento ? `Prefiere que le llamen: ${momento}` : '',
    tags: 'golden-benefits.com',
    'spanish speaking?': 'Yes',
    agent: 'Ernesto Sanchez',
  };

  try {
    const radiusRes = await fetch('https://eit.radiusbob.com/api/v1/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ params }),
    });

    const text = await radiusRes.text();
    if (!radiusRes.ok) {
      res.status(radiusRes.status).json({ error: 'RadiusBob rejected the record', details: text });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ error: 'No se pudo contactar a RadiusBob', details: String(err) });
  }
};
