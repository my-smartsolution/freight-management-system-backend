const messages = require("../../config/constant/message");
const CommonValidator = require("../../middleware/validators/CommonValidators");
const {
  
  subscriptionMasters,
  companies,
  subscriptions,
} = require("../../model");
const Company = require("../../model/Company");
const errorResponce = require("../../responses/ErrorResponce");
const successResponce = require("../../responses/successResponce");
const {
  findAllService,
  findByPkService,
} = require("../../service/FindService");
const {
  SubscriptionMasterSchema,
} = require("../../validators/superAdminValiadtor/ComminJoiSchema");

subscriptionMasters.belongsTo(companies, {
    as: "Company",
    foreignKey: "company_id",
  });
  subscriptionMasters.belongsTo(subscriptions, {
    as: "Subscription",
    foreignKey: "subscription_id",
  });

const createSubscriptionMaster = async (req, res) => {
  try {
    const validate = CommonValidator(req.body, SubscriptionMasterSchema);
    if (!validate.validate) {
      return errorResponce(res, 400, validate.data, "validation Error");
    }
    const createSubscription = await subscriptionMasters.create(req.body);

    if (createSubscription) {
      // update company
      const company = await companies.findOne({
        where: { company_id: req.body.company_id },
      });
      if (company) {
        await companies.update(
          {
            subscriptionId: createSubscription.subscription_id,
            start_at: req.body.startDate,
            expiry_at: req.body.endDate,
            renewed_at: req.body.endDate,
          },
          { where: { company_id: req.body.company_id } }
        );
        successResponce(res, messages.httpRes.SUCCESS, createSubscription, 201);
      }
    }
  } catch (error) {
    console.error(error);
    errorResponce(res, 400, error, messages.httpRes.SERVER_ERROR);
  }
};

const getAllSubscriptions = async (req, res) => {
  try {
    const asso = [{
        model : companies , 
        as : "Company" ,
        attributes : ['contactPersonFullName', 'businessName' , 'company_id'] 
    }, {
        model : subscriptions , 
        as : "Subscription" ,

    }]
    const AllSubscriptions = await findAllService(subscriptionMasters, {} , asso);
    AllSubscriptions.length > 0
      ? successResponce(res, messages.httpRes.SUCCESS, AllSubscriptions, 201)
      : errorResponce(res, 404, messages.httpRes.NOT_FOUND);
  } catch (error) {
    console.error(error);
    errorResponce(res, 400, error, messages.httpRes.SERVER_ERROR);
  }
};

const getsingleSubscription = async (req, res) => {
  try {
    const Subscriptions = findByPkService(subscriptionMasters, req.body);
    Subscriptions
      ? successResponce(res, messages.httpRes.SUCCESS, Subscriptions, 201)
      : errorResponce(res, 404, messages.httpRes.NOT_FOUND);
  } catch (error) {
    console.error(error);
    errorResponce(res, 400, error, messages.httpRes.SERVER_ERROR);
  }
};

const updateSubscriptionsMaster = async(req , res) =>{
    try {
        
        const [updatedRows] = await subscriptionMasters.update(req.body, {
            where: { subscriptionmaster_id: req.body.subscriptionmaster_id },
        })
        if (updatedRows) {
            successResponce(res , messages.httpRes.SUCCESS , updatedRows , 200)
        } else {
            errorResponce(res , 403 , messages.httpRes.INVALID_INPUT , "")
        }
    } catch (error) {
        console.log("updateSubscriptionsMaster :: ==>>>",error);
        errorResponce(res , 500 , messages.httpRes.SERVER_ERROR , "" )
        
    }
}

module.exports = {
  createSubscriptionMaster,
  getAllSubscriptions,
  getsingleSubscription,
  updateSubscriptionsMaster
};
