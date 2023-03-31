interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Number of items in cart: {cartItemsCount}</div>;
};

export default NavBar;
