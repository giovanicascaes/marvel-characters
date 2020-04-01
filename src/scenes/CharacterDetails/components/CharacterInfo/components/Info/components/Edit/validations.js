import * as yup from "yup";

const schema = yup.object().shape({
  id: yup
    .number()
    .required()
    .label("ID"),
  name: yup
    .string()
    .trim()
    .min(3)
    .required()
    .label("Name"),
  description: yup
    .string()
    .trim()
    .label("Description")
});

export default schema;
