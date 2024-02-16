const express = require("express")
const authRoutes = require("./auth.routes")
const companyRoutes = require("./company.routes")
const customersRoutes = require("./customer.routes")
const clientRoutes = require("./client.routes")
const driverRoute = require("./Driver.route")
const driver_documents = require("./driverDocumetns")
const country = require("./country.route")
const vehicleRoute = require("./vehicle.routes")
const booking = require("./booking.routes")
// const routeController = require("../controller/border_Routes/borderRouteController").default
const borderroute = require("./routeBorder.router")
const users = require("./user.route")
const user_company_assignments = require("./UserCompanyAssignment.route")
const transactionsRoutes = require("./transactions.routes")
const subscriptionRoutes = require("./subscription.routes")
const subscriptionMasterRoutes = require("./subscriptionMaster.routes")
const superAdmin = require("./superadmin.routes");
// const JWT = require("../helpers/jwt")
// const verifyUserCookieAccessToken = JWT.verifyUserCookieAccessToken;
const router = express.Router();
router.use("/auth", authRoutes);
router.use("/customers" , customersRoutes)
router.use("/users" , users)
router.use("/client" , clientRoutes )
// router.use("/company", verifyUserCookieAccessToken, companyRoutes);
router.use("/companies",  companyRoutes);
router.use("/drivers",  driverRoute);
router.use("/",  driver_documents);
router.use("/location",  country);
router.use("/vehicles",  vehicleRoute);
router.use("/routes",  borderroute); // border routess
router.use("/bookings", booking ); // border routess
router.use("/transactions", transactionsRoutes  ); // border routess
router.use("/assignCompany", user_company_assignments ); // border routess
router.use("/subscription", subscriptionRoutes  ); // plan routes
router.use("/subscriptionMaster", subscriptionMasterRoutes  ); // plan routes
router.use("/superAdmin", superAdmin  ); // plan routes

module.exports = router;
