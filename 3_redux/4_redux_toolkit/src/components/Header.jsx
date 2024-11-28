import { Container, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>

        <Stack gap={3} direction="horizontal" className="justify-content-end">
          <NavLink to="/">CRUD</NavLink>
          <NavLink to="/counter">Sayaç</NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
