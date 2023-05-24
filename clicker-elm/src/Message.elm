module Message exposing (..)

import Time


type Msg
    = ChangeMoney Float
    | BuyBuilding Int
    | ChangeTab Int
    | UpdateMoney Time.Posix
