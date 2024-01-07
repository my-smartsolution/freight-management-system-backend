const Joi = require("joi");

const subscriptionSchema = Joi.object({
  planName: Joi.string().required(),
  planType: Joi.string().valid("Monthly", "Yearly").required(),
  amount: Joi.number().required(),
  months_Year_Num : Joi.number().integer(),
  noOfCompanyAllowed: Joi.number().integer(),
  status: Joi.string().valid("Active", "Inactive").default("Active"),
});

const SubscriptionMasterSchema = Joi.object({
  company_id: Joi.number().integer().required(),
  subscription_id: Joi.number().integer().allow(null),
  startDate: Joi.date().allow(null),
  endDate: Joi.date().allow(null),
  // PaymentStatus: Joi.string().valid('Pending', 'Paid', 'Failed').allow(null),
  // PaymentDate: Joi.date().allow(null),
  // paymentReference: Joi.string().allow(null),
  // paymentMode: Joi.string().valid('Online', 'wire', 'cash').allow(null),
  // transactionDate: Joi.date().allow(null),
  amount : Joi.alternatives().try(
    Joi.number(),
    Joi.string()
  ).required()
});

module.exports = { subscriptionSchema , SubscriptionMasterSchema };
