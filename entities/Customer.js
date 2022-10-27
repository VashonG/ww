module.exports = (Customer) => {

  let newCustomer = { 
    id: Customer.id,
    firstName: Customer.firstName,
    lastName: Customer.lastName,
    profile: Customer.profile,
    contactNumber: Customer.contactNumber,
    email: Customer.email,
    isActive: Customer.isActive,
    createdAt: Customer.createdAt,
    updatedAt: Customer.updatedAt,
    addedBy: Customer.addedBy,
    updatedBy: Customer.updatedBy,
    isDeleted: Customer.isDeleted,
  };

  // remove undefined values
  if (newCustomer.id){
    Object.keys(newCustomer).forEach(key =>{
      if (newCustomer[key] === undefined) return newCustomer[key] = null;
    });
  } else {
    Object.keys(newCustomer).forEach(key => newCustomer[key] === undefined && delete newCustomer[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newCustomer) => {
   *   if (!newCustomer.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newCustomer) 
   */
  return Object.freeze(newCustomer);
};
