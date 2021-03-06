import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthDispatch } from "./../context/auth";
export default function Home({ history }) {
  const dispatch = useAuthDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };
  return (
    <Col className="bg-white justify-center-around">
      <Link to="/login">
        <Button variant="link">Login</Button>
      </Link>
      <Link to="/register">
        <Button variant="link">Register</Button>
      </Link>

      <Button variant="link" onClick={logout}>
        Logout
      </Button>
    </Col>
  );
}
