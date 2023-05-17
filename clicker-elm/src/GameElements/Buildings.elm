module GameElements.Buildings exposing (..)

import Array exposing (Array)
import Maybe
import Utils.Array exposing (updateArray)


type alias Building =
    { id : Int
    , quantity : Int
    , name : String
    , desc : String
    , basePrice : Int
    , moneyGain : Int
    , isUnlocked : Bool
    }


buyBuilding : Int -> Array Building -> Array Building
buyBuilding index builds =
    updateArray
        (Maybe.map (\building -> { building | quantity = building.quantity + 1 }))
        index
        builds


unlockBuilding : Int -> Array Building -> Array Building
unlockBuilding index builds =
    updateArray
        (Maybe.map (\building -> { building | isUnlocked = True }))
        index
        builds


buildingsGain : Array Building -> Int
buildingsGain builds =
    Array.foldl (\building memo -> memo + building.moneyGain * building.quantity) 0 builds


buildings : Array Building
buildings =
    Array.fromList
        [ { id = 1
          , quantity = 0
          , name = "Finger"
          , desc = "A finger to click for you."
          , basePrice = 10
          , moneyGain = 1
          , isUnlocked = False
          }
        , { id = 2
          , quantity = 0
          , name = "Palm"
          , desc = "Many fingers at the same time."
          , basePrice = 200
          , moneyGain = 5
          , isUnlocked = False
          }
        , { id = 3
          , quantity = 0
          , name = "Fist"
          , desc = "A stronger hand by punching."
          , basePrice = 3000
          , moneyGain = 25
          , isUnlocked = False
          }
        , { id = 4
          , quantity = 0
          , name = "Chest"
          , desc = "To press with the whole body."
          , basePrice = 50000
          , moneyGain = 200
          , isUnlocked = False
          }
        , { id = 5
          , quantity = 0
          , name = "Hammer"
          , desc = "When the need for tools start to rise."
          , basePrice = 1000000
          , moneyGain = 1000
          , isUnlocked = False
          }
        , { id = 6
          , quantity = 0
          , name = "Mass"
          , desc = "A heavier tool for more strenght."
          , basePrice = 15000000
          , moneyGain = 5000
          , isUnlocked = False
          }
        ]
