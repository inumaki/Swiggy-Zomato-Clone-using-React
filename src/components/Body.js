import restaurantData from "../constant";

const RestrauntCard = (restaurantCard) => (

    <div className="card">
<h3>{restaurantCard.name}</h3>
<img src = {restaurantCard.foodImgSrc} alt = "food"/>
<h4>{restaurantCard.itemName}</h4>
<h4>{restaurantCard.location}</h4>
    </div>
);

const Body = () => (
  <>
    <div className="restraunt">
        {restaurantData.map((card)=>{return RestrauntCard(card)})}
    </div>
  </>
);
export default Body;