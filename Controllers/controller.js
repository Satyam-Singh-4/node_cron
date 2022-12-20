const Employee = require("../Models/emp");

const add = async (req, res) => {
  try {
    console.log("Body:", req.body);
    const resp = await Employee.bulkCreate(req.body);
    // console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    var date = new Date();
    var formattedDate = `${date.getFullYear()}/${
      date.getMonth()+1
    }/${date.getDate()}`;
    console.log("formattedDate", formattedDate);

    await Employee.destroy({
      where: {
        expiry_date: formattedDate,
      },
    });
    console.log("rows deleted in db");
    console.log("running in every 20sec");
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "record not saved successfully",
      err: err.message,
    });
  }
};

module.exports = {
  add,
  deleteUser,
};
