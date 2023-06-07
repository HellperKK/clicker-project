module GameElements.AchievementRequirement exposing (..)

import Json.Decode as D exposing (Decoder, andThen, fail, field, map, string)
import Json.Encode as E


type alias BuildingQuantity =
    { buildingId : Int
    , quantity : Int
    }


type AchievementRequirement
    = AchievementBuildingQuantity BuildingQuantity


encodeBuildingQuantity : BuildingQuantity -> E.Value
encodeBuildingQuantity requirement =
    E.object
        [ ( "buildingId", E.int requirement.buildingId )
        , ( "quantity", E.int requirement.quantity )
        , ( "type", E.string "buildingQuantity" )
        ]


decoderBuildingQuantity : D.Decoder BuildingQuantity
decoderBuildingQuantity =
    D.map2 BuildingQuantity
        (D.field "buildingId" D.int)
        (D.field "quantity" D.int)


encodeAchievementRequirement : AchievementRequirement -> E.Value
encodeAchievementRequirement achievement =
    case achievement of
        AchievementBuildingQuantity buildingQuantity ->
            encodeBuildingQuantity buildingQuantity


decoderAchievementRequirement : Decoder AchievementRequirement
decoderAchievementRequirement =
    field "type" string
        |> andThen achievementRequirementHelp


achievementRequirementHelp : String -> Decoder AchievementRequirement
achievementRequirementHelp version =
    case version of
        "buildingQuantity" ->
            decoderBuildingQuantity |> map AchievementBuildingQuantity

        _ ->
            fail <|
                "Trying to decode achievement requirement, but version "
                    ++ version
                    ++ " is not supported."
