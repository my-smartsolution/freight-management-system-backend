// controllers/subscriptionController.js
const CommonValidator = require("../../middleware/validators/CommonValidators");
const {  subscriptions } = require("../../model");
const Subscription = require("../../model/Subscription");
const errorResponce = require("../../responses/ErrorResponce");
const successResponce = require("../../responses/successResponce");
const { findAllService } = require("../../service/FindService");
const messages = require("../../config/constant/message")
const {
  subscriptionSchema,
} = require("../../validators/superAdminValiadtor/ComminJoiSchema");

// Create a new subscription
const createSubscription = async (req, res) => {
  try {
    let validate = CommonValidator(req.body, subscriptionSchema);
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
const getAllSubscriptions = async (req, res) => {
  try {
    const subscription = await findAllService(subscriptions, {});

    subscription
      ? successResponce(res, messages.httpRes.SUCCESS, subscription , 201)
      : errorResponce(res, 404, messages.httpRes.NOT_FOUND, "");
  } catch (error) {
    console.error(error);
    errorResponce(res, 500, messages.httpRes.SERVER_ERROR, error);
  }
};

// Get a specific subscription by ID
const getSubscriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const subscription = await Subscription.findByPk(id);
    if (subscription) {
      res.status(200).json(subscription);
    } else {
      res.status(404).json({ error: "Subscription not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a subscription by ID
const updateSubscriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedSubscriptions] = await Subscription.update(
      req.body,
      {
        where: { subscription_id: id },
        returning: true,
      }
    );

    if (updatedRowsCount > 0) {
      res.status(200).json(updatedSubscriptions[0]);
    } else {
      res.status(404).json({ error: "Subscription not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a subscription by ID
const deleteSubscriptionById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Subscription.destroy({
      where: { subscription_id: id },
    });

    if (deletedRowCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Subscription not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscriptionById,
  deleteSubscriptionById,
};
