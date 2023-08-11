import { Link } from "react-router-dom";

const FooterStandrdLink = ({ path, name }) => {
  return (
    <div className="text-blue-600 hover:underline px-1">
      <Link to={path}> {name} </Link>
    </div>
  );
};

const FooterlowerLink = ({ path, name }) => {
  return (<div className="text-gray-600 hover:underline px-1">
    <Link to={path}>{name}</Link>
  </div>)
}

function Footer() {
  return (
    <div className="px-[20px] bg-gray text-xs font-semibold text-gray-600">
      <div className="flex flex-row py-2">
        Contact our Support agent. <FooterStandrdLink to="/" name="+074 6076544" /> or{"  "}
        <FooterStandrdLink to="/" name=" +074 5076564" />
        {" "}
        hear you.
      </div>
      <div className="flex flex-row justify-between py-2 border-t-2 border-t-gray-400" >
        <div>Copyright Edugo Inc. All Right Recieved</div>
        <div className="flex flex-row gap-6">
          <FooterlowerLink to="/" name="Privacy policy" />
          <FooterlowerLink to="/" name="Terms of Use" />
          <FooterlowerLink to="/" name="Gift anf offers" />
          <FooterlowerLink to="/" name="Leagle" />
          <FooterlowerLink to="/" name="Site Map" />
        </div>
        <div> 
          <FooterlowerLink to="/" name="Sri Lanka" />
        </div>
      </div>

    </div>
  );
}

export default Footer;
