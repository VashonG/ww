const CustomerDb = require('../../../../data-access/CustomerDb');
const CustomerSchema = require('../../../../validation/schema/Customer');
const createValidation = require('../../../../validation')(CustomerSchema.createSchema);
const updateValidation = require('../../../../validation')(CustomerSchema.updateSchema);
const filterValidation = require('../../../../validation')(CustomerSchema.filterValidationSchema);
const CustomerController = require('./Customer');

// use-cases imports with dependency injection
const addCustomerUsecase = require('../../../../use-case/Customer/addCustomer')({
  CustomerDb,
  createValidation 
});
const findAllCustomerUsecase = require('../../../../use-case/Customer/findAllCustomer')({
  CustomerDb,
  filterValidation
});
const getCustomerCountUsecase = require('../../../../use-case/Customer/getCustomerCount')({
  CustomerDb,
  filterValidation
});
const softDeleteManyCustomerUsecase = require('../../../../use-case/Customer/softDeleteManyCustomer')({ CustomerDb });
const bulkInsertCustomerUsecase = require('../../../../use-case/Customer/bulkInsertCustomer')({ CustomerDb });
const bulkUpdateCustomerUsecase = require('../../../../use-case/Customer/bulkUpdateCustomer')({ CustomerDb });
const deleteManyCustomerUsecase = require('../../../../use-case/Customer/deleteManyCustomer')({ CustomerDb });
const softDeleteCustomerUsecase = require('../../../../use-case/Customer/softDeleteCustomer')({ CustomerDb });
const partialUpdateCustomerUsecase = require('../../../../use-case/Customer/partialUpdateCustomer')({
  CustomerDb,
  updateValidation
});
const updateCustomerUsecase = require('../../../../use-case/Customer/updateCustomer')({
  CustomerDb,
  updateValidation 
});
const getCustomerUsecase = require('../../../../use-case/Customer/getCustomer')({
  CustomerDb,
  filterValidation
});
const deleteCustomerUsecase = require('../../../../use-case/Customer/deleteCustomer')({ CustomerDb });

// controller methods mapping
const addCustomer = CustomerController.addCustomer(addCustomerUsecase);
const findAllCustomer = CustomerController.findAllCustomer(findAllCustomerUsecase);
const getCustomerCount = CustomerController.getCustomerCount(getCustomerCountUsecase);
const softDeleteManyCustomer = CustomerController.softDeleteManyCustomer(softDeleteManyCustomerUsecase);
const bulkInsertCustomer = CustomerController.bulkInsertCustomer(bulkInsertCustomerUsecase);
const bulkUpdateCustomer = CustomerController.bulkUpdateCustomer(bulkUpdateCustomerUsecase);
const deleteManyCustomer = CustomerController.deleteManyCustomer(deleteManyCustomerUsecase);
const softDeleteCustomer = CustomerController.softDeleteCustomer(softDeleteCustomerUsecase);
const partialUpdateCustomer = CustomerController.partialUpdateCustomer(partialUpdateCustomerUsecase);
const updateCustomer = CustomerController.updateCustomer(updateCustomerUsecase);
const getCustomerById = CustomerController.getCustomer(getCustomerUsecase);
const deleteCustomer = CustomerController.deleteCustomer(deleteCustomerUsecase);

module.exports = {
  addCustomer,
  findAllCustomer,
  getCustomerCount,
  softDeleteManyCustomer,
  bulkInsertCustomer,
  bulkUpdateCustomer,
  deleteManyCustomer,
  softDeleteCustomer,
  partialUpdateCustomer,
  updateCustomer,
  getCustomerById,
  deleteCustomer,
};