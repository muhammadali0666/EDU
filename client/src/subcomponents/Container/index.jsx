import { ContainerTag } from "./index.style";

const Container = ({ className, children }) => {
  return (
    <ContainerTag className={className}>
      {children}
    </ContainerTag>
  );
}

export default Container;