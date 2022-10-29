/**
 *partialUpdateCustomer.js
 */

const  CustomerEntity = require('../../entities/Customer');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Customer. {status, message, data}
 */
const partialUpdateCustomer = ({ CustomerDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedCustomer = await CustomerDb.update(query,dataToUpdate);
  if (!updatedCustomer || updatedCustomer.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedCustomer[0] });
};
module.exports = partialUpdateCustomer;