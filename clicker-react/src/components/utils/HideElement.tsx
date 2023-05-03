import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Props {
  children: ReactElement;
  minimalShow: number;
}

function HideElement(props: Props) {
  const money = useSelector((state: RootState) => state.money.value);

  const [visible, setVisible] = useState(false);

  if (!visible && props.minimalShow <= money) {
    setVisible(true);
  }

  return <>{visible && props.children}</>;
}

export default HideElement;
