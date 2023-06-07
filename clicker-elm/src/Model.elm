module Model exposing (..)

import Array exposing (Array)
import GameElements.Achivements exposing (Achievement, achievements, encodeAchievement)
import GameElements.Buildings exposing (..)
import Json.Decode as D
import Json.Encode as E


encodeGameState : GameState -> E.Value
encodeGameState model =
    E.object
        [ ( "money", E.float model.money )
        , ( "buildings", E.array encodeBuilding model.buildings )
        , ( "achievements", E.array encodeAchievement model.achievements )
        ]


decoderGameState : D.Decoder GameState
decoderGameState =
    D.map3 GameState
        (D.field "money" D.float)
        (D.field "buildings" (D.array decoderBuilding))
        (D.field "achievements" (D.array GameElements.Achivements.decoderAchievement))


decodeGameState : String -> GameState
decodeGameState str =
    str |> D.decodeString decoderGameState |> Result.withDefault (GameState 0 buildings achievements)


type alias Model =
    { tabIndex : Int
    , alert : Bool
    , gameState : GameState
    }


type alias GameState =
    { money : Float
    , buildings : Array Building
    , achievements : Array Achievement
    }
