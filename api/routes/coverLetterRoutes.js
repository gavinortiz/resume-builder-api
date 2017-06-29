'use strict';

module.exports = function(app) {
  var coverLetterController = require('../controllers/coverLetterController');

  app.route('/cover-letter')
    .get(coverLetterController.list_cover_letters)
    .post(coverLetterController.create_cover_letter);
  app.route('/cover-letter/:coverLetterId')
    .get(coverLetterController.read_cover_letter)
    .put(coverLetterController.update_cover_letter)
    .delete(coverLetterController.delete_cover_letter);
};