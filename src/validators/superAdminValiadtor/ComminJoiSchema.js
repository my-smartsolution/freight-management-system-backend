const Joi = require("joi");

const subscriptionSchema = Joi.object({
  planName: Joi.string().required(),
  planType: Joi.string().valid("Monthly", "Yearly").required(),
  amount: Joi.number().required(),
  noOfCompanyAllowed: Joi.number().integer().required(),
  status: Joi.string().valid("Active", "Inactive").default("Active"),
});

module.exports = { subscriptionSchema };
