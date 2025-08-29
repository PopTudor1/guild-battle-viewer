import { GateTypeEnumLabel } from "../../enums/gate-type-enum";
import { GateModel } from "../../models/gate-model";
import { useMobileView } from "../../utils/use-mobile-view";
import "./gate-modal-info.css";

type Props = {
  gate: GateModel | null;
};

export default function GateModalInfo({ gate }: Props) {
  const isMobile = useMobileView();

  if (!gate)
    return (
      <div className="modal-container">
        <span className="no-gate-selected">
          Select a gate to see the details.
        </span>
      </div>
    );

  return (
    <div className="modal-container">
      <span className="modal-title">{GateTypeEnumLabel[gate.type]}</span>
      <div className="modal-content">
        <div className="modal-left">
          <div className="level-container">
            <span className="level">
              Level {gate.level ? gate.level : "N/A"}
            </span>
          </div>
          <div className="description-container">
            <span className="dungeon-goal">Dungeon Goals</span>
            <div className="gate-image-container">
              <img className="gate-image" src={gate.gateImage} />
            </div>
            <span className="description">{gate.gateDescription}</span>
          </div>
          {!isMobile && (
            <div className="rewards-container">
              <span className="reward">Reward</span>
              <div className="rewards-list">
                {gate.guildPoints && (
                  <div className="reward-item">
                    <img
                      className="reward-image"
                      src={gate.guildPoints.imageUrl}
                      alt="Guild Points"
                    />
                    <span className="reward-text">
                      {gate.guildPoints.points} points
                    </span>
                  </div>
                )}

                {gate.runesList && gate.runesList.length > 0 && (
                  <>
                    {gate.runesList.map((rune, index) => (
                      <div key={index} className="reward-item">
                        <img
                          className="reward-image"
                          src={rune.imageUrl}
                          alt={rune.rune.toString()}
                        />
                        <span className="reward-text">{rune.chance}%</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
          {!isMobile && (
            <span className="fail-message">
              *If you fail, rewards cannot be obtained.
            </span>
          )}
        </div>
        <div className="modal-right">
          <img
            className="monster-image"
            src={gate.monsterImage ? gate.monsterImage : gate.gateImage}
            alt="Monster image"
          />
          <div className="scroll-cost-container">
            <img
              className="scroll-image"
              src={gate.scrollImage}
              alt="Scroll image"
            />
            <span className="scroll-cost">
              {gate.scrollCost ? gate.scrollCost : "N/A"}
            </span>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="rewards-container">
          <span className="reward">Reward</span>
          <div className="rewards-list">
            {gate.guildPoints && (
              <div className="reward-item">
                <img
                  className="reward-image"
                  src={gate.guildPoints.imageUrl}
                  alt="Guild Points"
                />
                <span className="reward-text">
                  {gate.guildPoints.points} points
                </span>
              </div>
            )}

            {gate.runesList && gate.runesList.length > 0 && (
              <>
                {gate.runesList.map((rune, index) => (
                  <div key={index} className="reward-item">
                    <img
                      className="reward-image"
                      src={rune.imageUrl}
                      alt={rune.rune.toString()}
                    />
                    <span className="reward-text">{rune.chance}%</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}
      {isMobile && (
        <span className="fail-message">
          *If you fail, rewards cannot be obtained.
        </span>
      )}
    </div>
  );
}
