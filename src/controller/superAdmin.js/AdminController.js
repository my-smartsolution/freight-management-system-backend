const messages = require('../../config/constant/message');
const errorResponce = require('../../responses/ErrorResponce');
const successResponce = require('../../responses/successResponce');
const { superadmins } = require('../../model');
const { hashPassword } = require('../../helpers/bcrypt');

const getAllSuperAdmins = async (req, res) => {
  try {
    const superAdmins = await superadmins.findAll();
    successResponce(res , messages.httpRes.SUCCESS ,superAdmins ,200 )
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSuperAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const superAdmin = await superadmins.findByPk(id);
    if (!superAdmin) {
      return errorResponce(res, 404, 'superadmins not found', ''); 
    }
    successResponce(res , messages.httpRes.SUCCESS ,superAdmin ,200 )
  } catch (error) {
    console.error(error);
    errorResponce(res, 500, error, 'Internal Server Error');
  }
};

const createSuperAdmin = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword
    const newSuperAdmin = await superadmins.create(req.body);
    successResponce(res, messages.httpRes.SUCCESS , newSuperAdmin, 201);
  } catch (error) {
    console.error(error);
    errorResponce(res, 500, error, 'Internal Server Error');
  }
};

module.exports = {
  getAllSuperAdmins,
  getSuperAdminById,
  createSuperAdmin,
};
