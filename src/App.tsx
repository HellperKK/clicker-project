import { useEffect } from "react";
import "./App.css";
import {
  buildingShowValue,
  buildingTruePrice,
  buildingsGain,
} from "./buildings";
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
      const reward = buildingsGain(buildings);
      dispatch(changeByAmount(reward));
    }, 1000);
    return () => clearInterval(interval);
  }, [buildings, dispatch]);

  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <p>
            Monney : {money} (+{buildingsGain(buildings)}/s)
          </p>
          <button
            className="button"
            onClick={() => dispatch(changeByAmount(1))}
          >
            Click
          </button>
        </div>
        <div className="column">
          {buildings.map((building) => (
            <div key={building.id}>
              <HideElement minimalShow={buildingShowValue(building)}>
                <button
                  className="button"
                  title={building.desc}
                  disabled={money < buildingTruePrice(building)}
                  onClick={() => {
                    dispatch(
                      changeByAmount(Math.ceil(-buildingTruePrice(building)))
                    );
                    dispatch(buyBuilding(building));
                  }}
                >
                  {building.name}(+{building.moneyGain}/s){" "}
                  {buildingTruePrice(building)}
                </button>
              </HideElement>
            </div>
          ))}
        </div>
        <div className="column is-one-quarter"></div>
      </div>
    </>
  );
}

export default App;
