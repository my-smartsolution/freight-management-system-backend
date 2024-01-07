// controllers/subscriptionController.js
const CommonValidator = require("../../middleware/validators/CommonValidators");
const {  subscriptions } = require("../../model");
const Subscription = require("../../model/Subscription");
const errorResponce = require("../../responses/ErrorResponce");
const successResponce = require("../../responses/successResponce");
const { findAllService, findByPkService } = require("../../service/FindService");
const messages = require("../../config/constant/message")
const {
  subscriptionSchema,
} = require("../../validators/superAdminValiadtor/ComminJoiSchema");

// Create a new subscription
const createSubscription = async (req, res) => {
  try {
    const validate = CommonValidator(req.body, subscriptionSchema);
    if (!validate.validate) {
      return errorResponce(res, 400, validate.data, "validation Error");
    }
    const subscription = await subscriptions.create(req.body);
    successResponce(res, messages.httpRes.SUCCESS , subscription, 201);
  } catch (error) {
    console.error(error);
    errorResponce(res, 400, error, messages.httpRes.SERVER_ERROR);
  }
};

// Get all subscriptions
// Get all subscriptions
const getAllSubscriptions = async (req, res) => {
  try {
    const subscription = await findAllService(subscriptions, {});

    return subscription
      ? successResponce(res, messages.httpRes.SUCCESS, subscription, 201)
      : errorResponce(res, 404, messages.httpRes.NOT_FOUND, "");
  } catch (error) {
    console.error(error);
    return errorResponce(res, 500, messages.httpRes.SERVER_ERROR, error);
  }
};

// Get a specific subscription by ID
const getSubscriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const subscription =  findByPkService(subscriptions , id)
    return subscription
    ? successResponce(res, messages.httpRes.SUCCESS, subscription, 201)
    : errorResponce(res, 404, messages.httpRes.NOT_FOUND, "");
  } catch (error) {
    console.error(error);
    return errorResponce(res, 500, messages.httpRes.SERVER_ERROR, error);
  }
};

// Update a subscription by ID
const updateSubscriptionById = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedRowsCount, updatedSubscriptions] = await Subscription.update(req.body, {
      where: { subscription_id: id },
      returning: true,
    });
    return updatedRowsCount > 0
    ? successResponce(res, messages.httpRes.SUCCESS, updatedSubscriptions, 200)
    : errorResponce(res, 404, messages.httpRes.NOT_FOUND, "");
  } catch (error) {
    console.error(error);
    return errorResponce(res, 500, messages.httpRes.SERVER_ERROR, error);
  }
};

// Delete a subscription by ID
// Delete a subscription by ID
const deleteSubscriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Subscription.destroy({
      where: { subscription_id: id },
    });

    if (deletedRowCount > 0) {
      return successResponce(res, messages.httpRes.SUCCESS, deletedRowCount, 200);
    } else {
      return errorResponce(res, 404, messages.httpRes.NOT_FOUND, "");
    }
    
  } catch (error) {
    console.error(error);
    return errorResponce(res, 500, messages.httpRes.SERVER_ERROR, error);
  }
};

module.exports = {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscriptionById,
  deleteSubscriptionById,
};
