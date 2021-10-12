import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import TeacherModal from "../models/teacher.js";

const secret = "test";

export const tsignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldTeacher = await TeacherModal.findOne({ email });

    if (!oldTeacher)
      return res.status(404).json({ message: "Teacher doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      oldTeacher.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: oldTeacher.email, id: oldTeacher._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: oldTeacher, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const tsignup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldTeacher = await TeacherModal.findOne({ email });

    if (oldTeacher)
      return res.status(400).json({ message: "Teacher already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await TeacherModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
export const teacherdetails = async (req, res) => {
  TeacherModal.find()
    .then((result) => {
      res.status(200).json({
        teacherData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
