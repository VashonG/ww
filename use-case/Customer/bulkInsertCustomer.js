
/**
 *bulkInsertCustomer.js
 */

const  CustomerEntity = require('../../entities/Customer');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Customers. {status, message, data}
 */
const bulkInsertCustomer = ({
  CustomerDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let customerEntities = dataToCreate.map(item => CustomerEntity(item));
  let createdCustomer = await CustomerDb.createMany(customerEntities);
  return response.success({ data:{ count: createdCustomer.length } });
};
module.exports = bulkInsertCustomer;