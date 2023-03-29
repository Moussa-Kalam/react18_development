import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLike] = useState(true);

  const toggle = () => {
    setLike(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color="red" size={60} onClick={toggle} />;
  return <AiOutlineHeart size={60} onClick={toggle} />;
};

export default Like;
