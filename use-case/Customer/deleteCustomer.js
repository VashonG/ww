
/**
 *deleteCustomer.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Customer. {status, message, data}
 */
const deleteCustomer = ({ CustomerDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedCustomer = await CustomerDb.destroy(query);
  if (!deletedCustomer || deletedCustomer.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedCustomer[0] });
};

module.exports = deleteCustomer;
