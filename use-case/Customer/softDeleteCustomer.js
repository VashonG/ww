/**
 *softDeleteCustomer.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Customer. {status, message, data}
 */
const softDeleteCustomer = ({ CustomerDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedCustomer = await CustomerDb.update(query, dataToUpdate);
  if (!updatedCustomer || updatedCustomer.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCustomer[0] });
};
module.exports = softDeleteCustomer;
