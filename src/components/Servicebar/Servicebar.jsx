import battery from "../../assets/images/SOne_index_bt-battery.jpg";
import brk from "../../assets/images/SOne_index_bt-break.jpg";
import chock from "../../assets/images/SOne_index_bt-chokeup.jpg";
import guarantee from "../../assets/images/SOne_index_bt-guarantee.jpg";
import oil from "../../assets/images/SOne_index_bt-oil.jpg";
import tire from "../../assets/images/SOne_index_bt-tire.jpg";

import batteryhv from "../../assets/images/SOne_index_bt-battery1.jpg";
import brkhv from "../../assets/images/SOne_index_bt-break1.jpg";
import chockhv from "../../assets/images/SOne_index_bt-chokeup1.jpg";
import guaranteehv from "../../assets/images/SOne_index_bt-guarantee1.jpg";
import oilhv from "../../assets/images/SOne_index_bt-oil1.jpg";
import tirehv from "../../assets/images/SOne_index_bt-tire1.jpg";

const Sevicebar = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-6 gap-4 w-full">
        <img src={tire} onMouseOver={(e) => (e.currentTarget.src = tirehv)} onMouseOut={(e) => (e.currentTarget.src = tire)} alt="" className="w-full object-contain" />
        <img src={brk} onMouseOver={(e) => (e.currentTarget.src = brkhv)} onMouseOut={(e) => (e.currentTarget.src = brk)} alt="" className="w-full object-contain" />
        <img src={battery} onMouseOver={(e) => (e.currentTarget.src = batteryhv)} onMouseOut={(e) => (e.currentTarget.src = battery)} alt="" className="w-full object-contain" />
        <img src={chock} onMouseOver={(e) => (e.currentTarget.src = chockhv)} onMouseOut={(e) => (e.currentTarget.src = chock)} alt="" className="w-full object-contain" />
        <img src={oil} onMouseOver={(e) => (e.currentTarget.src = oilhv)} onMouseOut={(e) => (e.currentTarget.src = oil)} alt="" className="w-full object-contain" />
        <img src={guarantee} onMouseOver={(e) => (e.currentTarget.src = guaranteehv)} onMouseOut={(e) => (e.currentTarget.src = guarantee)} alt="" className="w-full object-contain" />
      </div>
    </>
  );
};

export default Sevicebar;
