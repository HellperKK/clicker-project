import { useEffect } from "react";
import "./App.css";
import { calculateBuildingPrice, calculateBuildingReward } from "./buildings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { changeByAmount } from "./moneySlice";
import { buyBuilding } from "./buildingSlice";
import HideElement from "./utils/HideElement";

function App() {
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const reward = calculateBuildingReward(buildings);
      dispatch(changeByAmount(reward));
    }, 1000);
    return () => clearInterval(interval);
  }, [buildings]);

  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <p>
            Monney : {money} (+{calculateBuildingReward(buildings)}/s)
            <button onClick={() => dispatch(changeByAmount(1))}>Click</button>
          </p>
        </div>
        <div className="column"></div>
        <div className="column is-one-quarter">
          {buildings.map((building) => (
            <HideElement
              minimalShow={building.basePrice * 0.75}
              key={building.id}
            >
              <button
                className="button"
                title={building.desc}
                disabled={money < calculateBuildingPrice(building)}
                onClick={() => {
                  dispatch(
                    changeByAmount(Math.ceil(-calculateBuildingPrice(building)))
                  );
                  dispatch(buyBuilding(building));
                }}
              >
                {building.name}(+{building.moneyGain}/s){" "}
                {calculateBuildingPrice(building)}
              </button>
            </HideElement>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
