const  express = require("express");
const {createSubscriptionMaster , getAllSubscriptions , getsingleSubscription, updateSubscriptionsMaster } = require("../controller/superAdmin.js/subscriptionmastersController");
const router = express.Router();

router.post("/" , createSubscriptionMaster)
router.get("/" , getAllSubscriptions)
router.get('/:id',  getAllSubscriptions)
router.put('/update/:id',   updateSubscriptionsMaster)
// router.put('/:id', updateUser)
// router.delete("/unassignUserFromCompany:id", unassignUserFromCompany);

module.exports = router;
