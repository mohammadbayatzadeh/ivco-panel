const { Schema, models, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    prevPasswords: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = models.user || model("user", userSchema);

export default User;
