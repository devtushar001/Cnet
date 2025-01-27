import { razorPayInstance } from "../Config/razorPayConfig.js";
import crypto from 'crypto';

const razorPayKeyId = process.env.RAZORPAY_KEY_ID
const razorPayKeySecret = process.env.RAZORPAY_KEY_SECRET

export const createRazorPayOrderController = async (req, res) => {
  if (!razorPayKeyId || !razorPayKeySecret) {
    return res.status(404).json({
      success: false,
      message: `jhjg`
    })
  }

  //Don't get the amount from frontend
  const { courseId, amount } = req.body;

  // Create order
  const rPI = razorPayInstance(razorPayKeyId, razorPayKeySecret);

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
          message: `Razorpay create orders ${err}`
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
  const { order_id, payment_id, signature } = req.body;


  //Create hmac object
  const hmac = crypto.createHmac("sha256", razorPayKeySecret);
  hmac.update(order_id + "|" + payment_id);

  const rPS = hmac.digest('hex');

  if (rPS === signature) {
    return res.status(200).json({
      success: true,
      message: `Payment variefied`
    })
  }
}