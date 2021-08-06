import express from 'express';
import Producto from '../productos';

/**
 * DATOS A MANIPULAR
 */

const router = express.Router();

const miProducto = new Producto();
router.post('/productos/guardar', (req, res) => {
    const body = req.body;
    const producto = miProducto.savedata(body);
    if (producto == 'error'){
      return res.status(400).json({
        msg: 'Necesito en el body title, price and thumbnail',
      });
    }
    res.json({
      producto,
    });
  });

  export default router;