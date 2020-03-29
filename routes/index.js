import { Router } from 'express';
const got = require('got');
const router = Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome page' });
  });

  return router;
};

/**
 * Respond to the request
 * @param {Request} request
 */
