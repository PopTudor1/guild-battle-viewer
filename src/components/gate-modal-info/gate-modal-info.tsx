import { useEffect, useState } from "react";
import GuildPointsImg from "../../assets/guild-points-icon.png";
import { GateTypeEnum, GateTypeEnumLabel } from "../../enums/gate-type-enum";
import { GateModel } from "../../models/gate-model";
import { useMobileView } from "../../utils/use-mobile-view";
import "./gate-modal-info.css";

type Props = {
  gate: GateModel | null;
};

function calculateGuildPoints(level: number) {
  // Calculate points using the improved formula
  const points = 25 + 5 * (level - 1) * (level + 1);

  return {
    imageUrl: GuildPointsImg,
    points,
  };
}

export default function GateModalInfo({ gate }: Props) {
  const isMobile = useMobileView();
  const [localGate, setLocalGate] = useState<GateModel | null>(gate);

  useEffect(() => {
    setLocalGate(gate);
  }, [gate]);

  const updateLevel = (delta: number) => {
    setLocalGate((prev) => {
      if (!prev) return prev;
      if (prev.type !== GateTypeEnum.GUILD) return prev; // only allow for guild gates

      const currentLevel = prev.level ?? 1;
      const newLevel = Math.min(51, Math.max(1, currentLevel + delta)); // 🔹 clamp between 1 and 51

      return {
        ...prev,
        level: newLevel,
        guildPoints: calculateGuildPoints(newLevel),
      };
    });
  };

  if (!localGate) {
    return (
      <div className="modal-container">
        <span className="no-gate-selected">
          Select a gate to see the details.
        </span>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <span className="modal-title">{GateTypeEnumLabel[localGate.type]}</span>
      <div className="modal-content">
        <div className="modal-left">
          <div className="level-container">
            {localGate.type === GateTypeEnum.GUILD ? (
              <>
                <button
                  onClick={() => updateLevel(-1)}
                  className="level-button"
                  title="Decrease level"
                  disabled={localGate.level === 1}
                >
                  ➖
                </button>
                <span className="level">Level {localGate.level ?? "N/A"}</span>
                <button
                  onClick={() => updateLevel(1)}
                  className="level-button"
                  title="Increase level"
                  disabled={localGate.level === 51}
                >
                  ➕
                </button>
              </>
            ) : (
              <span className="level">Level {localGate.level ?? "N/A"}</span>
            )}
          </div>

          <div className="description-container">
            <span className="dungeon-goal">Dungeon Goals</span>
            <div className="gate-image-container">
              <img
                className="gate-image"
                src={localGate.gateImage}
                alt="Gate"
              />
            </div>
            <span className="description">{localGate.gateDescription}</span>
          </div>

          {!isMobile && <Rewards gate={localGate} />}
        </div>

        <div className="modal-right">
          <img
            className="monster-image"
            src={localGate.monsterImage || localGate.gateImage}
            alt="Monster image"
          />
          <div className="scroll-cost-container">
            <img
              className="scroll-image"
              src={localGate.scrollImage}
              alt="Scroll image"
            />
            <span className="scroll-cost">{localGate.scrollCost ?? "N/A"}</span>
          </div>
        </div>
      </div>

      {isMobile && <Rewards gate={localGate} />}

      <span className="fail-message">
        *If you fail, rewards cannot be obtained.
      </span>
    </div>
  );
}

function Rewards({ gate }: { gate: GateModel }) {
  return (
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

        {gate.runesList?.length
          ? gate.runesList.map((rune, index) => (
              <div key={index} className="reward-item">
                <img
                  className="reward-image"
                  src={rune.imageUrl}
                  alt={rune.rune.toString()}
                />
                <span className="reward-text">{rune.chance}%</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
