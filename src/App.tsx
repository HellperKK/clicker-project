import { useEffect, useMemo } from "react";
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

  const display = useMemo(
    () =>
      new Intl.NumberFormat("en-GB", {
        notation: "compact",
        compactDisplay: "short",
      }),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const reward = buildingsGain(buildings);
      dispatch(changeByAmount(reward / 10));
    }, 100);
    return () => clearInterval(interval);
  }, [buildings, dispatch]);

  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter"></div>
        <div className="column has-text-centered">
          <p>
            Monney : {display.format(money)} (+
            {display.format(buildingsGain(buildings))}/s)
          </p>
          <button
            className="button"
            onClick={() => dispatch(changeByAmount(1))}
          >
            Click
          </button>
          <button
            className="button"
            onClick={() => dispatch(changeByAmount(1_000_000_000))}
          >
            Cheat
          </button>
        </div>
        <div className="column is-one-quarter"></div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter"></div>
        <div className="column">
          {buildings.map((building) => {
            const truePrice = buildingTruePrice(building);
            return (
              <div key={building.id}>
                <HideElement minimalShow={buildingShowValue(building)}>
                  <button
                    className="button max-width"
                    title={building.desc}
                    disabled={money < truePrice}
                    onClick={() => {
                      dispatch(changeByAmount(Math.ceil(-truePrice)));
                      dispatch(buyBuilding(building));
                    }}
                  >
                    {building.name}(+{building.moneyGain}/s){" "}
                    {display.format(truePrice)}
                  </button>
                </HideElement>
              </div>
            );
          })}
        </div>
        <div className="column is-one-quarter"></div>
      </div>
    </>
  );
}

export default App;
