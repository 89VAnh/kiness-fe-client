import { FormRule } from "antd";

// Validator
interface keyValidator {
  required?: any;
  email?: any;
  phone?: any;
  number?: any;
  username?: any;
  password?: any;
  people_name?: any;
}

export const RULES_FORM: Record<keyof keyValidator, FormRule[]> = {
  required: [
    {
      required: true,
      message: "Không thể để trống",
    },
  ],
  email: [
    {
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Email không đúng định dạng",
    },
  ],
  phone: [
    {
      pattern: /^0[0-9]{9}$/gm,
      message: "Số điện thoại không đúng định dạng",
    },
  ],
  number: [
    {
      pattern: /^[0-9]*$/gm,
      message: "Chỉ được là số",
    },
  ],
  username: [
    {
      pattern: /^[a-zA-Z0-9]{4,10}$/g,
      message: "Mã người dùng phải là chữ hoặc số, độ dài 4 đến 10 ký tự",
    },
  ],
  password: [
    {
      pattern:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]).{8,}$/g,
      message:
        "Mật khẩu phải có ít nhất 8 kí tự bao gồm chữ hoa, chữ thường, và ít nhất một kí tự đặc biệt và số",
    },
  ],
  people_name: [
    {
      pattern:
        /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm,
      message: "Tên này không hợp lệ",
    },
  ],
};
