import razorpay from 'razorpay';

export const razorPayInstance = (razorPayKeyId, razorPayKeySecret) => {
  return new razorpay({
    key_id: razorPayKeyId,
    key_secret: razorPayKeySecret
  });
};