const validate = values => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = "Vui long nhap tieu de";
  } else if (title.trim() && title.length < 5) {
    errors.title = "Tieu De Phai Lon Hon 5 ky tu";
  }
  return errors;
};

export default validate;
