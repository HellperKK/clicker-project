module GameElements.Achivements exposing (..)

import Array exposing (Array)
import GameElements.AchievementRequirement exposing (..)
import Json.Decode as D
import Json.Encode as E


type alias Achievement =
    { id : Int
    , name : String
    , description : String
    , condition : AchievementRequirement
    , isDiscovered : Bool
    }


encodeAchievement : Achievement -> E.Value
encodeAchievement achievement =
    E.object
        [ ( "id", E.int achievement.id )
        , ( "name", E.string achievement.name )
        , ( "description", E.string achievement.description )
        , ( "condition", encodeAchievementRequirement achievement.condition )
        , ( "isDiscovered", E.bool achievement.isDiscovered )
        ]


decoderAchievement : D.Decoder Achievement
decoderAchievement =
    D.map5 Achievement
        (D.field "id" D.int)
        (D.field "name" D.string)
        (D.field "description" D.string)
        (D.field "condition" decoderAchievementRequirement)
        (D.field "isDiscovered" D.bool)


addAchivement : String -> String -> AchievementRequirement -> Array Achievement -> Array Achievement
addAchivement name description requirement achievementsList =
    Array.push
        { id = Array.length achievementsList + 1
        , name = name
        , description = description
        , condition = requirement
        , isDiscovered = False
        }
        achievementsList


achievements : Array Achievement
achievements =
    Array.fromList []
        |> addAchivement "10 fingers" "Purchase 10 fingers" (AchievementBuildingQuantity (BuildingQuantity 0 10))
        |> addAchivement "50 fingers" "Purchase 50 fingers" (AchievementBuildingQuantity (BuildingQuantity 0 50))
        |> addAchivement "100 fingers" "Purchase 100 fingers" (AchievementBuildingQuantity (BuildingQuantity 0 100))
        |> addAchivement "10 palms" "Purchase 10 palms" (AchievementBuildingQuantity (BuildingQuantity 1 10))
        |> addAchivement "50 palms" "Purchase 50 palms" (AchievementBuildingQuantity (BuildingQuantity 1 50))
        |> addAchivement "100 palms" "Purchase 100 palms" (AchievementBuildingQuantity (BuildingQuantity 1 100))
        |> addAchivement "10 fists" "Purchase 10 fists" (AchievementBuildingQuantity (BuildingQuantity 2 10))
        |> addAchivement "50 fists" "Purchase 50 fists" (AchievementBuildingQuantity (BuildingQuantity 2 50))
        |> addAchivement "100 fists" "Purchase 100 fists" (AchievementBuildingQuantity (BuildingQuantity 2 100))
        |> addAchivement "10 chests" "Purchase 10 chests" (AchievementBuildingQuantity (BuildingQuantity 3 10))
        |> addAchivement "50 chests" "Purchase 50 chests" (AchievementBuildingQuantity (BuildingQuantity 3 50))
        |> addAchivement "100 chests" "Purchase 100 chests" (AchievementBuildingQuantity (BuildingQuantity 3 100))
        |> addAchivement "10 hammers" "Purchase 10 hammers" (AchievementBuildingQuantity (BuildingQuantity 4 10))
        |> addAchivement "50 hammers" "Purchase 50 hammers" (AchievementBuildingQuantity (BuildingQuantity 4 50))
        |> addAchivement "100 hammers" "Purchase 100 hammers" (AchievementBuildingQuantity (BuildingQuantity 4 100))
        |> addAchivement "10 mass" "Purchase 10 mass" (AchievementBuildingQuantity (BuildingQuantity 5 10))
        |> addAchivement "50 mass" "Purchase 50 mass" (AchievementBuildingQuantity (BuildingQuantity 5 50))
        |> addAchivement "100 mass" "Purchase 100 mass" (AchievementBuildingQuantity (BuildingQuantity 5 100))
