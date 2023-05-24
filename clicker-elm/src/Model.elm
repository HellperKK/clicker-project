module Model exposing (..)

import Array exposing (Array)
import GameElements.Buildings exposing (..)


type alias Model =
    { tabIndex : Int
    , money : Float
    , buildings : Array Building
    }
