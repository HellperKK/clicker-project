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



-- x |> f -> f(x)
-- x |> f |> g -> g(f(x))


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


achievements : Array Achievement
achievements =
    Array.fromList
        [ { id = 1
          , name = "10 fingers"
          , description = "Purchase 10 fingers"
          , condition = AchievementBuildingQuantity (BuildingQuantity 0 10)
          , isDiscovered = False
          }
        , { id = 2
          , name = "50 fingers"
          , description = "Purchase 50 fingers"
          , condition = AchievementBuildingQuantity (BuildingQuantity 0 50)
          , isDiscovered = False
          }
        ]
