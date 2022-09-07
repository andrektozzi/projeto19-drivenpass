import joi from "joi";

const cardSchema = joi.object({
  title: joi.string().required(),
  number: joi.string().creditCard().required(),
  name: joi.string().required(),
  CVV: joi.string().length(3).required(),
  password: joi.string().length(4).required(),
  ExpirationDate: joi.date().required(),
  isVirtual: joi.boolean().required(),
  type: joi.valid("CREDIT", "DEBIT", "BOTH")
});

export default cardSchema;