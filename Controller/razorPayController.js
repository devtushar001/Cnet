import orders from "razorpay/dist/types/orders.js";
import { razorPayInstance } from "../Config/razorPayConfig.js";

export const createRazorPayOrderController = async (req, res) => {

  //Don't get the amount from frontend
  const { courseId, amount } = req.body;

  // Create order
  const rPI = razorPayInstance(process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET);

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: 'reciept_order_1'
  };

  try {

    rPI.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: `Razor pay ${err}`
        })
      }
      return res.status(200).json(order)
    })
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: `Razorpay got ${error}`
    })
  }

}

export const verifyRazorPayOrderController = async (req, res) => {
  
}