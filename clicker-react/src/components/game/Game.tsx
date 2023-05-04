import { useEffect, useMemo, useState } from "react";
import "./Game.css";
import {
  buildingShowingValue,
  buildingTruePrice,
  buildingsGain,
} from "../../gameElements/buildings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeByAmount } from "../../store/moneySlice";
import { buyBuilding, unlockBuilding } from "../../store/buildingSlice";
import burger from "../../assets/burger.png";

function App() {
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );
  const dispatch = useDispatch();

  const [date, setDate] = useState<Date>(new Date());

  buildings.forEach((building) => {
    if (!building.isUnlocked && money >= buildingShowingValue(building)) {
      dispatch(unlockBuilding(building));
    }
  });

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

  useEffect(() => {
    const event = () => {
      if (document.hidden) {
        console.log("hidden");
        setDate(new Date());
      } else {
        console.log("reveal");
        const nowDate = new Date();
        const delay = nowDate.getTime() - date.getTime();
        const reward = buildingsGain(buildings);
        dispatch(changeByAmount(reward * Math.floor(delay / 1000)));
      }
    };
    document.addEventListener("visibilitychange", event);
    return () => document.removeEventListener("visibilitychange", event);
  }, [date, buildings, dispatch]);

  return (
    <>
      <div className="columns">
        <div className="column is-one-third  has-text-centered">
          <p className="is-size-1">
            Money : {display.format(money)} (+
            {display.format(buildingsGain(buildings))}/s)
          </p>
          <button
            className="transparent-button"
            onClick={() => dispatch(changeByAmount(1))}
          >
            <img src={burger} alt="Click me!" />
          </button>
          <br />
          <button
            className="button"
            onClick={() => dispatch(changeByAmount(1_000_000_000))}
          >
            Cheat
          </button>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column"></div>
          </div>
          {buildings
            .filter((building) => building.isUnlocked)
            .map((building) => {
              const truePrice = buildingTruePrice(building);
              return (
                <div key={building.id}>
                  <button
                    className="button max-width is-size-4"
                    title={`${building.desc} (${building.moneyGain}/s)`}
                    disabled={money < truePrice}
                    onClick={() => {
                      dispatch(changeByAmount(Math.ceil(-truePrice)));
                      dispatch(buyBuilding(building));
                    }}
                  >
                    {building.name} ({building.quantity}){" "}
                    {display.format(truePrice)}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter"></div>
        <div className="column"></div>
        <div className="column is-one-quarter"></div>
      </div>
    </>
  );
}

export default App;
