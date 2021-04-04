import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>LOREM </span> ipsums
      </h1>
      <p className={headerStyles.description}>
        Think classic lorem ipsum is passé? Give your next project a bit more
        edge with these funny and unique text generators.{" "}
      </p>
    </div>
  );
};

export default Header;
