const  express = require("express");
const {createSubscription , getAllSubscriptions , getSubscriptionById , deleteSubscriptionById , updateSubscriptionById } = require("../controller/superAdmin.js/Subscription");

const   router = express.Router();



router.post("/add" , createSubscription)
router.get("/getsubscriptions" , getAllSubscriptions)
router.get('/getsubscriptionsById/:id', getSubscriptionById)
router.put('/updatesubscriptionsById/:id', updateSubscriptionById)
router.delete('/deletesubscriptionsById/:id', deleteSubscriptionById)

module.exports = router;
