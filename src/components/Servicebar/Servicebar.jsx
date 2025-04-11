import battery from "../../assets/images/SOne_index_bt-battery.jpg";
import brk from "../../assets/images/SOne_index_bt-break.jpg";
import chock from "../../assets/images/SOne_index_bt-chokeup.jpg";
import guarantee from "../../assets/images/SOne_index_bt-guarantee.jpg";
import oil from "../../assets/images/SOne_index_bt-oil.jpg";
import tire from "../../assets/images/SOne_index_bt-tire.jpg";

const Sevicebar = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-6 gap-4 w-full">
        <img src={tire} alt="" className="w-full object-contain" />
        <img src={brk} alt="" className="w-full object-contain" />
        <img src={battery} alt="" className="w-full object-contain" />
        <img src={chock} alt="" className="w-full object-contain" />
        <img src={oil} alt="" className="w-full object-contain" />
        <img src={guarantee} alt="" className="w-full object-contain" />
      </div>
    </>
  );
};

export default Sevicebar;
