import DocumentTitle from "../../Component/DocumentTitle";
import {RegisterForm} from '../../Component/RegisterForm/RegisterForm'

export default function Register() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}