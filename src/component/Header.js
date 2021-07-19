import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Logo</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
    </>
  )
}