const express = require('express');
const router = express.Router();
const model = require('/models')



//Basic outline, needs editing

router.get('/:region/:name', async (req, res) => {
  const { region, name } = req.params;

  try {
    const model = await model.getPlayerData(region, name);
    res.json(PlayerData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
