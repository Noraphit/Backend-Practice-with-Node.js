const service = require('../services/services')

exports.getresult = (req, res) => {
  service.calculate(req.params.number).then((result) => {
    res.status(200).json({
      massage: result
    })
  })
}