module Message exposing (..)

import Time


type Msg
    = ChangeMoney Float
    | BuyBuilding Int
    | ChangeTab Int
    | UpdateMoney Time.Posix
    | Reset
    | Save
    | Load
    | Export
    | Import
    | LoadApply String
    | ImportApply String
    | ViewAchievements Int
    | GetTimeUpdate Float
