module Model exposing (..)

import Array exposing (Array)
import GameElements.Buildings exposing (..)
import Json.Decode as D
import Json.Encode as E


encodeModel : Model -> E.Value
encodeModel model =
    E.object
        [ ( "tabIndex", E.int model.tabIndex )
        , ( "money", E.float model.money )
        , ( "buildings", E.array encodeBuilding model.buildings )
        ]


decoderModel : D.Decoder Model
decoderModel =
    D.map3 Model
        (D.field "tabIndex" D.int)
        (D.field "money" D.float)
        (D.field "buildings" (D.array decoderBuilding))


decodeModel : String -> Model
decodeModel str =
    str |> D.decodeString decoderModel |> Result.withDefault (Model 0 0 buildings)


type alias Model =
    { tabIndex : Int
    , money : Float
    , buildings : Array Building
    }
